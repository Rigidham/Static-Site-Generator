#!/usr/bin/env zsh
set -euo pipefail

SCRIPT_ROOT="$(cd "$(dirname "$0")" && pwd -P)"
TEMPLATE_LIBRARY_ROOT="${SCRIPT_ROOT}/templates/ui-components"
CUSTOMERS_DIR="${SCRIPT_ROOT}/customers"

# ----------------------------
# Usage
# ----------------------------
usage() {
  cat <<'TXT'
Usage:
  bootstrap.zsh <app-name> [--pages "about,services"] [--components "home:hero;about:hero"] [--global-components "footer,chat-box"] [--global-components-top "promo-banner"] [--global-components-before-outlet "breadcrumbs"] [--global-components-after-outlet "chat-box"] [--global-components-bottom "footer"] [--seo-base-url "https://example.com"] [--style-url "https://example.com"] [--color-primary "#39FF14"] [--color-secondary "#FF3CAC"] [--color-background "#0B0B0B"] [--firebase]

Examples:
  ./bootstrap.zsh acme-plumbing
  ./bootstrap.zsh acme-plumbing --pages "About, Services, Contact Us, FAQ"
  ./bootstrap.zsh acme-plumbing --style-url "https://example.com"
  ./bootstrap.zsh acme-plumbing --style-url "https://example.com" --firebase
  ./bootstrap.zsh acme-plumbing --color-primary "#0ea5e9" --color-background "#020617"
  ./bootstrap.zsh acme-plumbing --firebase

Notes:
  - Home is ALWAYS included.
  - Pages can be ANY labels you type (spaces/caps/punctuation ok). They are auto-converted to URL slugs.
  - Use --seo-base-url to set sitemap/robots + default metadata base URL (defaults to https://example.com).
  - If --pages is omitted, you'll be prompted (press Enter for default: About,Services,Gallery,Contact)
TXT
}

die() { echo "ERROR: $*" >&2; usage; exit 1; }

normalize_hex_color_or_die() {
  local value="$1"
  local label="$2"
  [[ -z "$value" ]] && { print -r -- ""; return 0; }

  local hex="$value"
  if [[ "$hex" != \#* ]]; then
    hex="#$hex"
  fi

  local digits="${hex:1}"
  digits="${digits:l}"

  if [[ "$digits" =~ ^[0-9a-f]{3}$ ]]; then
    local expanded=""
    for ((i=0; i<3; i++)); do
      local c="${digits:i:1}"
      expanded+="${c}${c}"
    done
    digits="$expanded"
  elif [[ ! "$digits" =~ ^[0-9a-f]{6}$ ]]; then
    die "Invalid ${label:-color} value '${value}'. Use #RGB or #RRGGBB."
  fi

  print -r -- "#${digits}"
}

if [[ $# -lt 1 ]]; then
  usage
  exit 1
fi

APP_NAME="$1"
shift

STYLE_URL=""
WITH_FIREBASE=""
PAGES_CSV=""
UI_COMPONENTS_SPEC=""
SEO_BASE_URL_FLAG=""
DEFAULT_COLOR_PRIMARY="#39FF14"
DEFAULT_COLOR_SECONDARY="#FF3CAC"
DEFAULT_COLOR_BACKGROUND="#0B0B0B"
COLOR_PRIMARY="$DEFAULT_COLOR_PRIMARY"
COLOR_SECONDARY="$DEFAULT_COLOR_SECONDARY"
COLOR_BACKGROUND="$DEFAULT_COLOR_BACKGROUND"
COLOR_MODE="light"

# Parse flags (order independent)
while [[ $# -gt 0 ]]; do
  case "$1" in
    --pages)
      shift || true
      [[ $# -eq 0 ]] && die "--pages requires a value"
      PAGES_CSV="$1"
      shift
      ;;
    --global-components-top|--globals-top)
      shift || true
      [[ $# -eq 0 ]] && die "--global-components-top requires a value"
      GLOBAL_COMPONENTS_TOP_CSV="$1"
      shift
      ;;
    --global-components-bottom|--globals-bottom)
      shift || true
      [[ $# -eq 0 ]] && die "--global-components-bottom requires a value"
      GLOBAL_COMPONENTS_BOTTOM_CSV="$1"
      shift
      ;;
    --global-components-before-outlet|--globals-before-outlet)
      shift || true
      [[ $# -eq 0 ]] && die "--global-components-before-outlet requires a value"
      GLOBAL_COMPONENTS_BEFORE_OUTLET_CSV="$1"
      shift
      ;;
    --globals-per-page)
      shift || true
      [[ $# -eq 0 ]] && die "--globals-per-page requires a value"
      GLOBALS_PER_PAGE_MAP="$1"
      shift
      ;;

    --global-components-after-outlet|--globals-after-outlet)
      shift || true
      [[ $# -eq 0 ]] && die "--global-components-after-outlet requires a value"
      GLOBAL_COMPONENTS_AFTER_OUTLET_CSV="$1"
      shift
      ;;

    --global-components|--globals)
      shift || true
      [[ $# -eq 0 ]] && die "--global-components requires a value"
      GLOBAL_COMPONENTS_CSV="$1"
      shift
      ;;

    --ui-components)
      shift || true
      [[ $# -eq 0 ]] && die "--ui-components requires a value"
      UI_COMPONENTS_SPEC="$1"
      shift
      ;;

    --seo-base-url)
      shift || true
      [[ $# -eq 0 ]] && die "--seo-base-url requires a value"
      SEO_BASE_URL_FLAG="$1"
      shift
      ;;

    --components|--page-components)
      shift || true
      [[ $# -eq 0 ]] && die "--components requires a value"
      COMPONENTS_MAP="$1"
      shift
      ;;

    --style-url)
      shift
      if [[ $# -eq 0 ]]; then
        echo "ERROR: --style-url requires a value"
        usage
        exit 1
      fi
      STYLE_URL="$1"
      shift
      ;;
    --color-primary)
      shift || true
      [[ $# -eq 0 ]] && die "--color-primary requires a value"
      COLOR_PRIMARY="$1"
      shift
      ;;
    --color-secondary)
      shift || true
      [[ $# -eq 0 ]] && die "--color-secondary requires a value"
      COLOR_SECONDARY="$1"
      shift
      ;;
    --color-background)
      shift || true
      [[ $# -eq 0 ]] && die "--color-background requires a value"
      COLOR_BACKGROUND="$1"
      shift
      ;;
    --color-mode)
      shift || true
      [[ $# -eq 0 ]] && die "--color-mode requires a value"
      COLOR_MODE="$1"
      shift
      ;;
    --firebase)
      WITH_FIREBASE="--firebase"
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      die "Unknown argument: $1"
      ;;
  esac
done

command -v node >/dev/null || { echo "node is required"; exit 1; }
command -v npm  >/dev/null || { echo "npm is required"; exit 1; }

COLOR_PRIMARY="$(normalize_hex_color_or_die "${COLOR_PRIMARY:-}" "primary")"
COLOR_SECONDARY="$(normalize_hex_color_or_die "${COLOR_SECONDARY:-}" "secondary")"
COLOR_BACKGROUND="$(normalize_hex_color_or_die "${COLOR_BACKGROUND:-}" "background")"
COLOR_MODE="$(echo "${COLOR_MODE:-light}" | tr '[:upper:]' '[:lower:]')"
if [[ "$COLOR_MODE" != "light" && "$COLOR_MODE" != "dark" ]]; then
  die "--color-mode must be 'light' or 'dark' (received: ${COLOR_MODE})"
fi

GENERATE_PRIMENG_TOKENS="true"

# ----------------------------
# Page selection (interactive; home always included)
# - Accept ANY labels, auto-slugify to safe route/component names
# ----------------------------
slugify() {
  # Input: $1 label
  # Output: prints slug
  local s="$1"

  # trim
  s="${s#"${s%%[![:space:]]*}"}"
  s="${s%"${s##*[![:space:]]}"}"

  # lowercase
  s="${(L)s}"

  # common replacements
  s="${s//&/ and }"
  s="${s//\'/}"    # remove apostrophes

  # replace non-alnum with hyphen
  s="${s//[^a-z0-9]/-}"

  # collapse multiple hyphens
  while [[ "$s" == *"--"* ]]; do
    s="${s//--/-}"
  done

  # trim hyphens
  s="${s##-}"
  s="${s%%-}"

  print -r -- "$s"
}

typeset -a PAGE_SLUGS=()
typeset -a PAGE_LABELS=()
typeset -A PAGE_LOCAL_COMPONENTS_CSV=()
typeset -A VALID_PAGE_SCOPES=()
typeset -A UI_TEMPLATE_SELECTION_MAP=()
typeset -a UI_TEMPLATE_GLOBAL_SLUGS=()
UI_TEMPLATE_SERIALIZED=""

ensure_page_component_entry() {
  local page="$1"
  local slug="$2"
  [[ -z "$page" || -z "$slug" ]] && return
  slug="$(slugify "$slug")"
  [[ -z "$slug" ]] && return
  local csv="${PAGE_LOCAL_COMPONENTS_CSV[$page]:-}"
  typeset -a existing=()
  typeset -A seen=()
  if [[ -n "$csv" ]]; then
    IFS=',' read -rA existing <<< "$csv"
  fi
  typeset -a cleaned=()
  for item in "${existing[@]}"; do
    item="${item#"${item%%[![:space:]]*}"}"
    item="${item%"${item##*[![:space:]]}"}"
    [[ -z "$item" ]] && continue
    local normalized="$(slugify "$item")"
    [[ -z "$normalized" ]] && continue
    if [[ -z "${seen[$normalized]:-}" ]]; then
      cleaned+=("$normalized")
      seen[$normalized]=1
    fi
  done
  if [[ -z "${seen[$slug]:-}" ]]; then
    cleaned+=("$slug")
  fi
  PAGE_LOCAL_COMPONENTS_CSV[$page]="${(j:,:)cleaned}"
}

record_ui_template_selection() {
  local scope="$1"
  local component="$2"
  local variant="$3"
  [[ -z "$component" || -z "$variant" ]] && return
  local scope_key="${scope:l}"
  local component_key="$(slugify "$component")"
  local variant_key="$(slugify "$variant")"
  [[ -z "$component_key" ]] && return
  [[ -z "$variant_key" ]] && return
  if [[ "$scope_key" != "global" ]]; then
    scope_key="$(slugify "$scope_key")"
  fi
  if [[ "$scope_key" != "global" && -z "${VALID_PAGE_SCOPES[$scope_key]:-}" ]]; then
    echo "WARN: Ignoring template selection for unknown page scope '${scope}'." >&2
    return
  fi
  local map_key="${scope_key}|${component_key}"
  UI_TEMPLATE_SELECTION_MAP[$map_key]="$variant_key"
  if [[ "$scope_key" == "global" ]]; then
    UI_TEMPLATE_GLOBAL_SLUGS+=("$component_key")
    GLOBAL_BOTTOM_SLUGS+=("$component_key")
  else
    ensure_page_component_entry "$scope_key" "$component_key"
  fi
}

handle_template_block() {
  local scope="$1"
  local block="$2"
  [[ -z "$block" ]] && return
  IFS=',' read -rA entries <<< "$block"
  for entry in "${entries[@]}"; do
    entry="${entry#"${entry%%[![:space:]]*}"}"
    entry="${entry%"${entry##*[![:space:]]}"}"
    [[ -z "$entry" ]] && continue
    local comp=""
    local variant=""
    if [[ "$entry" == *"="* ]]; then
      comp="${entry%%=*}"
      variant="${entry#*=}"
    elif [[ "$entry" == *":"* ]]; then
      comp="${entry%%:*}"
      variant="${entry#*:}"
    else
      comp="$entry"
      variant="default"
    fi
    record_ui_template_selection "$scope" "$comp" "$variant"
  done
}

parse_ui_components_spec() {
  local spec="$1"
  [[ -z "$spec" ]] && return
  IFS=';' read -rA segments <<< "$spec"
  if (( ${#segments[@]} == 0 )); then
    segments=("$spec")
  fi
  for segment in "${segments[@]}"; do
    local current_scope="global"
    IFS=',' read -rA tokens <<< "$segment"
    for token in "${tokens[@]}"; do
      local chunk="$token"
      chunk="${chunk#"${chunk%%[![:space:]]*}"}"
      chunk="${chunk%"${chunk##*[![:space:]]}"}"
      [[ -z "$chunk" ]] && continue

      local scope="$current_scope"
      local entry="$chunk"

      if [[ "$chunk" == *":"* ]]; then
        local candidate="${chunk%%:*}"
        local remainder="${chunk#*:}"
        candidate="${candidate#"${candidate%%[![:space:]]*}"}"
        candidate="${candidate%"${candidate##*[![:space:]]}"}"
        remainder="${remainder#"${remainder%%[![:space:]]*}"}"
        remainder="${remainder%"${remainder##*[![:space:]]}"}"
        local normalized="$(slugify "$candidate")"
        if [[ -n "$normalized" && ( "$normalized" == "global" || -n "${VALID_PAGE_SCOPES[$normalized]:-}" ) ]]; then
          current_scope="$normalized"
          scope="$normalized"
          entry="$remainder"
        fi
      fi

      [[ -z "$entry" ]] && continue
      handle_template_block "$scope" "$entry"
    done
  done
}

is_valid_slug() {
  [[ "$1" =~ ^[a-z0-9]+([a-z0-9-]*[a-z0-9])?$ ]]
}

title_case_label() {
  local slug="$1"
  echo "${(C)${slug//-/ }}"
}

# ----------------------------
# Pages (interactive or non-interactive)
# ----------------------------
if [[ -n "${PAGES_CSV:-}" ]]; then
  echo "==> Pages (non-interactive): ${PAGES_CSV}"
  IFS=',' read -rA raw_pages <<< "${PAGES_CSV}"
  for p in "${raw_pages[@]}"; do
    p="${p//[[:space:]]/}"
    [[ -z "$p" ]] && continue
    [[ "$p" == "home" ]] && continue
    is_valid_slug "$p" || die "Invalid page slug: '$p' (use lowercase letters, numbers, hyphens)"
    PAGE_SLUGS+=("$p")
    PAGE_LABELS+=("$(title_case_label "$p")")
  done
else
  echo ""
  echo "==> Page selection"
  echo "    Enter comma-separated page names (any text is ok). Example: About, Services, Gallery, Contact"
  echo "    Press Enter for default: About, Services, Gallery, Contact"
  echo ""
  print -n "What pages would you like to create? > "
  read -r pages_in || true
  pages_in="${pages_in:-}"

  if [[ -z "$pages_in" ]]; then
    pages_in="About, Services, Gallery, Contact"
  fi

  IFS=',' read -rA raw_labels <<< "${pages_in}"
  for label in "${raw_labels[@]}"; do
    label="${label## }"; label="${label%% }"
    [[ -z "$label" ]] && continue
    slug="$(echo "$label" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+//; s/-+$//; s/-+/-/g')"
    [[ "$slug" == "home" ]] && continue
    is_valid_slug "$slug" || die "Invalid derived slug '$slug' from label '$label'"
    PAGE_SLUGS+=("$slug")
    PAGE_LABELS+=("${label}")
  done
fi

# De-dupe pages (keep order)
typeset -A _seen_pages
typeset -a _uniq_slugs=()
typeset -a _uniq_labels=()
for i in {1..${#PAGE_SLUGS[@]}}; do
  p="${PAGE_SLUGS[$i]}"
  if [[ -z "${_seen_pages[$p]:-}" ]]; then
    _uniq_slugs+=("$p")
    _uniq_labels+=("${PAGE_LABELS[$i]}")
    _seen_pages[$p]=1
  fi
done
PAGE_SLUGS=("${_uniq_slugs[@]}")
PAGE_LABELS=("${_uniq_labels[@]}")

VALID_PAGE_SCOPES=()
VALID_PAGE_SCOPES[home]=1
for pg in "${PAGE_SLUGS[@]}"; do
  VALID_PAGE_SCOPES[$pg]=1
done

echo "==> Pages selected: home ${PAGE_SLUGS:+${PAGE_SLUGS[*]}}"

# ----------------------------
# Per-page components (interactive or non-interactive)
# ----------------------------
if [[ -n "${COMPONENTS_MAP:-}" ]]; then
  echo ""
  echo "==> Page components (non-interactive): ${COMPONENTS_MAP}"
  # Format: "home:Hero,CTA;about:Hero;services:Hero,Features"
  IFS=';' read -rA pairs <<< "${COMPONENTS_MAP}"
  for pair in "${pairs[@]}"; do
    trimmed="$pair"
    trimmed="${trimmed#"${trimmed%%[![:space:]]*}"}"
    trimmed="${trimmed%"${trimmed##*[![:space:]]}"}"
    [[ -z "$trimmed" ]] && continue
    key="${trimmed%%:*}"
    val=""
    if [[ "$trimmed" == *":"* ]]; then
      val="${trimmed#*:}"
    fi
    key="${key#"${key%%[![:space:]]*}"}"
    key="${key%"${key##*[![:space:]]}"}"
    val="${val#"${val%%[![:space:]]*}"}"
    val="${val%"${val##*[![:space:]]}"}"
    [[ -z "$key" ]] && continue
    PAGE_LOCAL_COMPONENTS_CSV[$key]="${val}"
  done
else
  echo ""
  echo "==> Per-page UI components"
  echo "    You will be prompted for each page (Home + selected pages)."
  echo "    Enter comma-separated component labels (any text is ok), or press Enter for none."
  echo "    Example: Hero, Testimonials, FAQ, Call To Action"
  echo ""

  typeset -a ALL_PAGES=()
  ALL_PAGES=("home" "${PAGE_SLUGS[@]}")

  for page in "${ALL_PAGES[@]}"; do
    if [[ "$page" == "home" ]]; then
      pageLabel="Home"
    else
      pageLabel=""
      for j in {1..${#PAGE_SLUGS[@]}}; do
        if [[ "${PAGE_SLUGS[$j]}" == "$page" ]]; then
          pageLabel="${PAGE_LABELS[$j]}"
          break
        fi
      done
      [[ -z "$pageLabel" ]] && pageLabel="$page"
    fi

    echo "What UI components would you like on the ${pageLabel} page?"
    print -n "> "
    read -r comps || true
    comps="${comps:-}"
    PAGE_LOCAL_COMPONENTS_CSV[$page]="$comps"
  done
fi

# ----------------------------
# ----------------------------
# Global components (appear on every page) with positioning
# - Generated ONCE under src/app/components/<slug>
# - Rendered in app shell (AppComponent)
#
# Positions:
# - top: rendered above site-header
# - before-outlet: between header and router-outlet
# - after-outlet: between router-outlet and bottom
# - bottom: rendered at the very end (e.g., footer)
#
# Flags accept slugs or labels (labels will be slugified):
# - --global-components (defaults to bottom)
# - --global-components-top
# - --global-components-before-outlet
# - --global-components-after-outlet
# - --global-components-bottom
# ----------------------------
typeset -a GLOBAL_TOP_SLUGS=()
typeset -a GLOBAL_BEFORE_OUTLET_SLUGS=()
typeset -a GLOBAL_AFTER_OUTLET_SLUGS=()
typeset -a GLOBAL_BOTTOM_SLUGS=()

add_globals_from_csv() {
  local csv="$1"
  local arr_name="$2"
  [[ -z "${csv:-}" ]] && return 0

  IFS=',' read -rA items <<< "${csv}"
  for it in "${items[@]}"; do
    it="${it## }"; it="${it%% }"
    [[ -z "$it" ]] && continue

    local slug=""
    if [[ "$it" =~ ^[a-z0-9]+([a-z0-9-]*[a-z0-9])?$ ]]; then
      slug="${it:l}"
    else
      slug="$(slugify "$it")"
    fi

    [[ -z "$slug" ]] && continue
    [[ "$slug" == "site-header" ]] && continue

    # Append to target array (portable zsh; no namerefs)
    eval "$arr_name+=(\"$slug\")"
  done
}

# Non-interactive: accept flags
add_globals_from_csv "${GLOBAL_COMPONENTS_TOP_CSV:-}" GLOBAL_TOP_SLUGS
add_globals_from_csv "${GLOBAL_COMPONENTS_BEFORE_OUTLET_CSV:-}" GLOBAL_BEFORE_OUTLET_SLUGS
add_globals_from_csv "${GLOBAL_COMPONENTS_AFTER_OUTLET_CSV:-}" GLOBAL_AFTER_OUTLET_SLUGS
add_globals_from_csv "${GLOBAL_COMPONENTS_BOTTOM_CSV:-}" GLOBAL_BOTTOM_SLUGS

# --global-components defaults to bottom
add_globals_from_csv "${GLOBAL_COMPONENTS_CSV:-}" GLOBAL_BOTTOM_SLUGS

# Interactive prompts (only if no global flags provided at all)
if [[ -z "${GLOBAL_COMPONENTS_CSV:-}" && -z "${GLOBAL_COMPONENTS_TOP_CSV:-}" && -z "${GLOBAL_COMPONENTS_BEFORE_OUTLET_CSV:-}" && -z "${GLOBAL_COMPONENTS_AFTER_OUTLET_CSV:-}" && -z "${GLOBAL_COMPONENTS_BOTTOM_CSV:-}" ]]; then
  echo ""
  echo "==> Global UI components (optional)"
  echo "    These appear on EVERY page (rendered in app shell)."
  echo "    Enter comma-separated names (labels or slugs), or press Enter for none."
  echo ""

  print -n "Global components at TOP (above header)? > "
  read -r top_in || true
  add_globals_from_csv "${top_in:-}" GLOBAL_TOP_SLUGS

  print -n "Global components BEFORE outlet (between header and page)? > "
  read -r before_in || true
  add_globals_from_csv "${before_in:-}" GLOBAL_BEFORE_OUTLET_SLUGS

  print -n "Global components AFTER outlet (between page and bottom)? > "
  read -r after_in || true
  add_globals_from_csv "${after_in:-}" GLOBAL_AFTER_OUTLET_SLUGS

  print -n "Global components at BOTTOM (end of app; e.g., footer)? > "
  read -r bottom_in || true
  add_globals_from_csv "${bottom_in:-}" GLOBAL_BOTTOM_SLUGS
fi

parse_ui_components_spec "$UI_COMPONENTS_SPEC"

if [[ -z "${UI_COMPONENTS_SPEC:-}" ]]; then
  echo ""
  echo "==> UI template library (optional)"
  if [[ -f "${TEMPLATE_LIBRARY_ROOT}/manifest.json" ]]; then
    MANIFEST_PATH="${TEMPLATE_LIBRARY_ROOT}/manifest.json" node - <<'NODE'
const fs = require('fs');
const manifestPath = process.env.MANIFEST_PATH;
try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log('    Available components and variants:');
  for (const [slug, entry] of Object.entries(manifest)) {
    const variants = Object.keys(entry.variants || {}).join(', ');
    console.log(`    - ${slug}: ${variants || 'default'}`);
  }
} catch {
  console.log('    (Unable to read template manifest)');
}
NODE
  else
    echo "    templates/ui-components manifest not found; enter selections manually."
  fi
  echo "    Format examples: hero=split,cta=primary   or   banner:dark-and-full-width"
  echo "    Use comma-separated pairs per scope, press Enter to skip."
  echo ""

  typeset -a TEMPLATE_SCOPES=("global" "home" "${PAGE_SLUGS[@]}")
  for scope in "${TEMPLATE_SCOPES[@]}"; do
    local label=""
    if [[ "$scope" == "global" ]]; then
      label="Global components"
    elif [[ "$scope" == "home" ]]; then
      label="Home page"
    else
      label="$scope"
      for idx in {1..${#PAGE_SLUGS[@]}}; do
        if [[ "${PAGE_SLUGS[$idx]}" == "$scope" ]]; then
          label="${PAGE_LABELS[$idx]}"
          break
        fi
      done
    fi
    echo "Templates for ${label}? (comma-separated component=variant)"
    print -n "> "
    read -r tpl_input || true
    [[ -z "${tpl_input//[[:space:]]/}" ]] && continue
    handle_template_block "$scope" "$tpl_input"
  done
fi

UI_TEMPLATE_SERIALIZED=""
for key variant in "${(@kv)UI_TEMPLATE_SELECTION_MAP}"; do
  UI_TEMPLATE_SERIALIZED+="${key}=${variant}"$'\n'
done
export UI_TEMPLATE_SERIALIZED

# De-dupe each position while preserving order
dedupe_arr() {
  local arr_name="$1"
  typeset -A seen
  typeset -a out
  out=()

  # Iterate over array by name (portable zsh)
  eval 'for x in "${'"$arr_name"'[@]}"; do
    if [[ -z "${seen[$x]:-}" ]]; then
      out+=("$x")
      seen[$x]=1
    fi
  done'

  # Assign back
  eval "$arr_name=(\"\${out[@]}\")"
}

dedupe_arr GLOBAL_TOP_SLUGS
dedupe_arr GLOBAL_BEFORE_OUTLET_SLUGS
dedupe_arr GLOBAL_AFTER_OUTLET_SLUGS
dedupe_arr GLOBAL_BOTTOM_SLUGS

# Combined unique list for generation/imports
typeset -A _seen_all_globals
typeset -a GLOBAL_COMPONENT_SLUGS=()
for bucket in GLOBAL_TOP_SLUGS GLOBAL_BEFORE_OUTLET_SLUGS GLOBAL_AFTER_OUTLET_SLUGS GLOBAL_BOTTOM_SLUGS; do
  eval 'for g in "${'"$bucket"'[@]}"; do
    if [[ -z "${_seen_all_globals[$g]:-}" ]]; then
      GLOBAL_COMPONENT_SLUGS+=("$g")
      _seen_all_globals[$g]=1
    fi
  done'
done
if (( ${#UI_TEMPLATE_GLOBAL_SLUGS[@]} )); then
  typeset -A _tmpl_seen
  for g in "${UI_TEMPLATE_GLOBAL_SLUGS[@]}"; do
    [[ -z "$g" ]] && continue
    if [[ -z "${_seen_all_globals[$g]:-}" && -z "${_tmpl_seen[$g]:-}" ]]; then
      GLOBAL_COMPONENT_SLUGS+=("$g")
      _tmpl_seen[$g]=1
      _seen_all_globals[$g]=1
    fi
  done
fi

echo "==> Global components (top): ${GLOBAL_TOP_SLUGS:-"(none)"}"
echo "==> Global components (before-outlet): ${GLOBAL_BEFORE_OUTLET_SLUGS:-"(none)"}"
echo "==> Global components (after-outlet): ${GLOBAL_AFTER_OUTLET_SLUGS:-"(none)"}"
echo "==> Global components (bottom): ${GLOBAL_BOTTOM_SLUGS:-"(none)"}"

# ----------------------------
# Include global components per page (requested behavior)
# - Globals are shared components but can be included on specific pages
# - We will inject them into each page template + page component imports
#
# Non-interactive:
#   --globals-per-page "home:footer,chat-box;about:footer"
# Interactive:
#   Prompts for each page, showing available global components.
# ----------------------------
typeset -A PAGE_GLOBALS_CSV=()
typeset -a ALL_PAGES=()
ALL_PAGES=("home" "${PAGE_SLUGS[@]}")

# Build "all available globals" (deduped, in bucket order)
typeset -a ALL_GLOBALS=()
for bucket in GLOBAL_TOP_SLUGS GLOBAL_BEFORE_OUTLET_SLUGS GLOBAL_AFTER_OUTLET_SLUGS GLOBAL_BOTTOM_SLUGS; do
  eval 'for g in "${'"$bucket"'[@]}"; do ALL_GLOBALS+=("$g"); done'
done
# De-dupe ALL_GLOBALS
typeset -A _seen_allg
typeset -a _uniq_allg=()
for g in "${ALL_GLOBALS[@]}"; do
  if [[ -z "${_seen_allg[$g]:-}" ]]; then
    _uniq_allg+=("$g")
    _seen_allg[$g]=1
  fi
done
ALL_GLOBALS=("${_uniq_allg[@]}")
typeset DEFAULT_GLOBALS_CSV=""
if (( ${#ALL_GLOBALS[@]} )); then
  DEFAULT_GLOBALS_CSV="${(j:,:)ALL_GLOBALS}"
fi

if (( ${#ALL_GLOBALS[@]} == 0 )); then
  echo "==> No global components defined; skipping per-page global inclusion."
else
  if [[ -z "${GLOBALS_PER_PAGE_MAP:-}" && -n "${DEFAULT_GLOBALS_CSV:-}" ]]; then
    echo "==> Globals per page not provided; defaulting every page to all globals: ${ALL_GLOBALS[*]}"
    for page in "${ALL_PAGES[@]}"; do
      PAGE_GLOBALS_CSV[$page]="${DEFAULT_GLOBALS_CSV}"
    done
  fi

  if [[ -n "${GLOBALS_PER_PAGE_MAP:-}" ]]; then
    echo ""
    echo "==> Globals per page (non-interactive): ${GLOBALS_PER_PAGE_MAP}"
    IFS=';' read -rA pairs <<< "${GLOBALS_PER_PAGE_MAP}"
    for pair in "${pairs[@]}"; do
      pair="${pair//[[:space:]]/}"
      [[ -z "$pair" ]] && continue
      key="${pair%%:*}"
      val="${pair#*:}"
      [[ -z "$key" ]] && continue
      [[ "$key" == "$pair" ]] && val=""
      PAGE_GLOBALS_CSV[$key]="${val}"
    done
  else
    echo ""
    echo "==> Include global components per page (optional)"
    echo "    Available globals: ${ALL_GLOBALS[*]}"
    if [[ -n "${DEFAULT_GLOBALS_CSV:-}" ]]; then
      echo "    Press Enter to keep the default (all globals). Enter comma-separated values to override."
    else
      echo "    For each page, enter comma-separated globals to include, or press Enter for none."
    fi
    echo ""

    for page in "${ALL_PAGES[@]}"; do
      if [[ "$page" == "home" ]]; then
        pageLabel="Home"
      else
        pageLabel=""
        for j in {1..${#PAGE_SLUGS[@]}}; do
          if [[ "${PAGE_SLUGS[$j]}" == "$page" ]]; then
            pageLabel="${PAGE_LABELS[$j]}"
            break
          fi
        done
        [[ -z "$pageLabel" ]] && pageLabel="$page"
      fi

      echo "Which GLOBAL components should be included on the ${pageLabel} page? (Available: ${ALL_GLOBALS[*]})"
      print -n "> "
      read -r g_in || true
      trimmed="${g_in//[[:space:]]/}"
      if [[ -n "${trimmed:-}" ]]; then
        PAGE_GLOBALS_CSV[$page]="${g_in:-}"
      fi
    done
  fi
fi

echo "==> Creating Angular app (latest) with SSR + routing: $APP_NAME"
mkdir -p "$CUSTOMERS_DIR"
cd "$CUSTOMERS_DIR"
npx -y @angular/cli@latest new "$APP_NAME" --ssr --routing --style=css --skip-git --interactive=false
cd "$APP_NAME"

export APP_BRAND_TITLE="${APP_NAME}"
if [[ -n "${SEO_BASE_URL_FLAG:-}" ]]; then
  SEO_BASE_URL="$SEO_BASE_URL_FLAG"
elif [[ -z "${SEO_BASE_URL:-}" ]]; then
  SEO_BASE_URL="https://example.com"
fi
export SEO_BASE_URL
export PAGE_SLUGS_LIST="${(j: :)PAGE_SLUGS}"

echo "==> Disabling Angular CLI analytics prompts"
npx -y ng analytics disable --global >/dev/null
npx -y ng analytics disable >/dev/null

echo "==> Ensuring Angular animations package is installed (required for PrimeNG animations)"
npm i @angular/animations

echo "==> Installing PrimeNG + PrimeIcons + PrimeUIX themes"
npm i primeng primeicons @primeuix/themes

echo "==> Installing Tailwind (pinned v3 for CLI support)"
npm i -D tailwindcss@3.4.15 postcss autoprefixer tailwindcss-primeui

echo "==> Generating Aura theme CSS from @primeuix/themes"
node - <<'NODE'
const fs = require('fs');
(async () => {
  try {
    const cssModule = await import('@primeuix/themes/aura/css');
    const css = cssModule.default || '';
    if (!css) throw new Error('Empty CSS payload from @primeuix/themes.');
    fs.writeFileSync('src/prime-theme.css', css);
    console.log('Wrote src/prime-theme.css');
  } catch (err) {
    console.error('Failed to generate Aura CSS:', err);
    process.exit(1);
  }
})();
NODE

echo "==> Writing default robots.txt and sitemap.xml (update SEO_BASE_URL before launch)"
node - <<'NODE'
const fs = require('fs');
const path = require('path');

const baseUrl = (process.env.SEO_BASE_URL || 'https://example.com').replace(/\/+$/, '');
const slugStr = process.env.PAGE_SLUGS_LIST || '';
const slugs = slugStr.split(/\s+/).filter(Boolean);
const routes = ['/', ...slugs.map((slug) => `/${slug}`)];

const sitemapEntries = routes
  .map((route) => {
    const full = route === '/' ? baseUrl : `${baseUrl}${route}`;
    return `  <url>\n    <loc>${full}</loc>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Update baseUrl before launch -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
fs.writeFileSync(path.join('src', 'sitemap.xml'), sitemap);

const robots = `# Update sitemap URL before launch\nUser-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(path.join('src', 'robots.txt'), robots);

console.log('Wrote src/robots.txt and src/sitemap.xml');
NODE

echo "==> Initializing Tailwind config"
npx -y tailwindcss init -p

echo "==> Updating tailwind.config.js content globs"
node - <<'NODE'
const fs = require('fs');
const path = 'tailwind.config.js';
let s = fs.readFileSync(path, 'utf8');
if (!s.includes('content:')) {
  console.error('tailwind.config.js missing content field; please update manually.');
  process.exit(1);
}
s = s.replace(/content:\s*\[[^\]]*\]/m, `content: ["./src/**/*.{html,ts}"]`);
fs.writeFileSync(path, s);
NODE

echo "==> Ensuring tailwindcss-primeui plugin is enabled"
node - <<'NODE'
const fs = require('fs');
const p = 'tailwind.config.js';
let s = fs.readFileSync(p, 'utf8');

// Ensure a plugins array exists
if (!/plugins\s*:\s*\[/.test(s)) {
  // Insert plugins: [] before module export close
  // Handles both module.exports = { ... } and export default { ... }
  s = s.replace(/(\}\s*;?\s*)$/, `  ,\n  plugins: []\n$1`);
}

// Add tailwindcss-primeui if missing
if (!s.includes("tailwindcss-primeui")) {
  s = s.replace(/plugins\s*:\s*\[/, `plugins: [\n    require('tailwindcss-primeui'),`);
}

// Deduplicate accidental double-insertions
s = s.replace(/require\('tailwindcss-primeui'\),\s*require\('tailwindcss-primeui'\),/g, "require('tailwindcss-primeui'),");

fs.writeFileSync(p, s);
NODE

echo "==> Ensuring Tailwind directives exist in src/styles.css"
node - <<'NODE'
const fs = require('fs');
const p = 'src/styles.css';
let s = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
const directives = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`;
if (!s.includes('@tailwind base;')) {
  s = directives + '\n' + s;
  fs.writeFileSync(p, s);
}
NODE

if [[ "${GENERATE_PRIMENG_TOKENS:-}" == "true" ]]; then
  echo "==> Writing PrimeNG styled token overrides"
  export PRIMENG_TOKEN_PRIMARY="${COLOR_PRIMARY:-}"
  export PRIMENG_TOKEN_SECONDARY="${COLOR_SECONDARY:-}"
  export PRIMENG_TOKEN_BACKGROUND="${COLOR_BACKGROUND:-}"
  export PRIMENG_COLOR_MODE="${COLOR_MODE:-light}"
  node - <<'NODE'
const fs = require('fs');
const path = require('path');

const primary = process.env.PRIMENG_TOKEN_PRIMARY || '';
const secondary = process.env.PRIMENG_TOKEN_SECONDARY || '';
const background = process.env.PRIMENG_TOKEN_BACKGROUND || '';

if (!primary && !secondary && !background) {
  process.exit(0);
}

const tokens = [];
const colorMode = (process.env.PRIMENG_COLOR_MODE || 'light').toLowerCase() === 'dark' ? 'dark' : 'light';

const hexToRgb = (hex = '') => {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};

const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((val) => {
      const clamped = Math.max(0, Math.min(255, Math.round(val)));
      return clamped.toString(16).padStart(2, '0');
    })
    .join('')}`;

const mixColor = (base, mixWith, weight) => {
  if (!mixWith || weight == null) return base;
  const baseRgb = hexToRgb(base);
  const mixRgb = hexToRgb(mixWith);
  return rgbToHex({
    r: baseRgb.r * (1 - weight) + mixRgb.r * weight,
    g: baseRgb.g * (1 - weight) + mixRgb.g * weight,
    b: baseRgb.b * (1 - weight) + mixRgb.b * weight,
  });
};

const contrastColor = (hex = '') => {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

const buildScale = (base, tokenPrefix) => {
  if (!base) return;
  const scale = [
    ['50', '#ffffff', 0.92],
    ['100', '#ffffff', 0.82],
    ['200', '#ffffff', 0.72],
    ['300', '#ffffff', 0.55],
    ['400', '#ffffff', 0.35],
    ['500', null, null],
    ['600', '#000000', 0.12],
    ['700', '#000000', 0.24],
    ['800', '#000000', 0.36],
    ['900', '#000000', 0.5],
    ['950', '#000000', 0.62],
  ];
  for (const [suffix, mixWith, weight] of scale) {
    const value = mixColor(base, mixWith, weight);
    tokens.push(`  ${tokenPrefix}-${suffix}: ${value};`);
  }

  const baseColor = mixColor(base, null, null);
  tokens.push(`  ${tokenPrefix}-color: var(${tokenPrefix}-500);`);
  tokens.push(`  ${tokenPrefix}-hover-color: var(${tokenPrefix}-600);`);
  tokens.push(`  ${tokenPrefix}-active-color: var(${tokenPrefix}-700);`);
  tokens.push(`  ${tokenPrefix}-contrast-color: ${contrastColor(baseColor)};`);
};

buildScale(primary, '--p-primary');
buildScale(secondary, '--p-secondary');

if (background) {
  tokens.push(`  --p-surface-ground: ${background};`);
  tokens.push(`  --p-surface-section: ${background};`);
  tokens.push(`  --p-surface-card: ${background};`);
  tokens.push(`  --p-surface-overlay: ${background};`);
  tokens.push(`  --p-surface-0: ${background};`);
}

const bodyStyle = background ? `\nbody {\n  background-color: var(--p-surface-ground);\n}\n` : '';
const content = `:root, :host {\n  color-scheme: ${colorMode};\n${tokens.join('\n')}\n}\n${bodyStyle}`;
const outPath = path.join('src', 'styles', 'primeng-tokens.css');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
if (existing.trim() === content.trim()) {
  console.log('PrimeNG tokens unchanged.');
  process.exit(0);
}
fs.writeFileSync(outPath, content);
console.log(`Wrote ${outPath}`);
NODE
fi

if [[ "${GENERATE_PRIMENG_TOKENS:-}" == "true" ]]; then
  export ENABLE_PRIMENG_TOKEN_CSS="true"
else
  export ENABLE_PRIMENG_TOKEN_CSS="false"
fi

PRIMARY_PALETTE_BLOCK="$(node - <<'NODE'
const base = process.env.PRIMENG_TOKEN_PRIMARY || '#39FF14';
const hexToRgb = (hex = '') => {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};
const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((val) => Math.max(0, Math.min(255, Math.round(val))).toString(16).padStart(2, '0'))
    .join('')}`;
const mixColor = (baseColor, mixWith, weight) => {
  if (!mixWith || weight == null) return baseColor;
  const baseRgb = hexToRgb(baseColor);
  const mixRgb = hexToRgb(mixWith);
  return rgbToHex({
    r: baseRgb.r * (1 - weight) + mixRgb.r * weight,
    g: baseRgb.g * (1 - weight) + mixRgb.g * weight,
    b: baseRgb.b * (1 - weight) + mixRgb.b * weight,
  });
};
const buildScale = (baseColor) => {
  const scale = [
    ['50', '#ffffff', 0.92],
    ['100', '#ffffff', 0.82],
    ['200', '#ffffff', 0.72],
    ['300', '#ffffff', 0.55],
    ['400', '#ffffff', 0.35],
    ['500', null, null],
    ['600', '#000000', 0.12],
    ['700', '#000000', 0.24],
    ['800', '#000000', 0.36],
    ['900', '#000000', 0.5],
    ['950', '#000000', 0.62],
  ];
  return scale.reduce((acc, [suffix, mixWith, weight]) => {
    acc[suffix] = mixColor(baseColor, mixWith, weight);
    return acc;
  }, {});
};
const palette = buildScale(base);
const order = ['50','100','200','300','400','500','600','700','800','900','950'];
for (const key of order) {
  console.log(`  ${key}: '${palette[key]}',`);
}
NODE
)"
PRIMARY_CONTRAST_COLOR="$(node - <<'NODE'
const base = process.env.PRIMENG_TOKEN_PRIMARY || '#39FF14';
const hexToRgb = (hex = '') => {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};
const { r, g, b } = hexToRgb(base);
const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
console.log(luminance > 0.5 ? '#000000' : '#ffffff');
NODE
)"
SURFACE_CONFIG_BLOCK="$(node - <<'NODE'
const base = process.env.PRIMENG_TOKEN_BACKGROUND || '#0B0B0B';
const hexToRgb = (hex = '') => {
  const clean = hex.replace('#', '');
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
};
const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((val) => Math.max(0, Math.min(255, Math.round(val))).toString(16).padStart(2, '0'))
    .join('')}`;
const mixColor = (baseColor, mixWith, weight) => {
  if (!mixWith || weight == null) return baseColor;
  const baseRgb = hexToRgb(baseColor);
  const mixRgb = hexToRgb(mixWith);
  return rgbToHex({
    r: baseRgb.r * (1 - weight) + mixRgb.r * weight,
    g: baseRgb.g * (1 - weight) + mixRgb.g * weight,
    b: baseRgb.b * (1 - weight) + mixRgb.b * weight,
  });
};
const surface = {
  ground: base,
  section: mixColor(base, '#ffffff', 0.04),
  card: mixColor(base, '#ffffff', 0.08),
  overlay: mixColor(base, '#ffffff', 0.12),
  border: mixColor(base, '#ffffff', 0.18),
  hover: mixColor(base, '#ffffff', 0.14),
};
for (const [key, val] of Object.entries(surface)) {
  console.log(`        ${key}: '${val}',`);
}
NODE
)"

echo "==> Generating pages (standalone) in src/app/pages (home + selected)"
npx -y ng g component pages/home --standalone --skip-tests
for s in "${PAGE_SLUGS[@]}"; do
  npx -y ng g component "pages/${s}" --standalone --skip-tests
done

echo "==> Flattening Angular CLI v18+ src/app/app -> src/app (components/pages live in src/app/*)"
if [[ -d src/app/app ]]; then
  # Move known top-level files if they exist
  for f in app.component.ts app.component.html app.component.css app.routes.ts app.config.ts app.config.server.ts app.spec.ts app.ts app.html app.css; do
    if [[ -f "src/app/app/$f" && ! -f "src/app/$f" ]]; then
      mv "src/app/app/$f" "src/app/$f"
    fi
  done

  # Move directories (merge if needed)
  for d in components pages; do
    if [[ -d "src/app/app/$d" ]]; then
      mkdir -p "src/app/$d"
      for item in src/app/app/$d/*; do
        [[ -e "$item" ]] || continue
        base="$(basename "$item")"
        if [[ -e "src/app/$d/$base" ]]; then
          if [[ -d "$item" && -d "src/app/$d/$base" ]]; then
            mv "$item"/* "src/app/$d/$base/" 2>/dev/null || true
            rmdir "$item" 2>/dev/null || true
          fi
        else
          mv "$item" "src/app/$d/"
        fi
      done
    fi
  done

  # Remove src/app/app if empty
  if [[ -z "$(find src/app/app -mindepth 1 -maxdepth 1 2>/dev/null | head -n 1)" ]]; then
    rmdir src/app/app 2>/dev/null || true
  fi
fi

echo "==> Generating shared UI components (standalone) in src/app/components"
# site-header is always created
npx -y ng g component components/site-header --standalone --skip-tests
# Generate additional global components (standalone) in src/app/components
if (( ${#GLOBAL_COMPONENT_SLUGS[@]} )); then
  for gc in "${GLOBAL_COMPONENT_SLUGS[@]}"; do
    npx -y ng g component "components/${gc}" --standalone --skip-tests
  done
fi


echo "==> Normalizing Angular CLI v18+ file layout"
if [[ -d src/app/app/pages && ! -d src/app/pages ]]; then
  mv src/app/app/pages src/app/pages
fi
if [[ -d src/app/app/components && ! -d src/app/components ]]; then
  mv src/app/app/components src/app/components
fi
if [[ -d src/app/app && -z "$(ls -A src/app/app 2>/dev/null)" ]]; then
  rmdir src/app/app
fi

paths=()
[[ -d src/app/pages ]] && paths+=("src/app/pages")
[[ -d src/app/components ]] && paths+=("src/app/components")
if (( ${#paths[@]} )); then
  while IFS= read -r file; do
    [[ "$file" == *.component.ts ]] && continue
    [[ "$file" == *-seo.service.ts ]] && continue
    [[ "$file" == *-seo.service.component.ts ]] && continue
    mv "$file" "${file%.ts}.component.ts"
  done < <(find "${paths[@]}" -type f -name '*.ts' ! -name '*-seo.service.ts' ! -name '*-seo.service.component.ts' 2>/dev/null)

  # If any SEO services were previously renamed to *.service.component.ts, revert them to *.service.ts
  while IFS= read -r serviceFile; do
    newPath="${serviceFile%.service.component.ts}.service.ts"
    mv "$serviceFile" "$newPath"
  done < <(find "${paths[@]}" -type f -name '*-seo.service.component.ts' 2>/dev/null)
fi

if [[ -f src/app/app.ts && ! -f src/app/app.component.ts ]]; then
  mv src/app/app.ts src/app/app.component.ts
fi
if [[ -f src/app/app.html && ! -f src/app/app.component.html ]]; then
  cp src/app/app.html src/app/app.component.html
fi
if [[ -f src/app/app.css && ! -f src/app/app.component.css ]]; then
  cp src/app/app.css src/app/app.component.css
fi



# ----------------------------
# Generate per-page UI components (local) and attach them to their page
# - Components live under: src/app/pages/<page>/components/<component-slug>-<page>/
# - Page imports will reference: ./components/<component-slug>-<page>/<component-slug>-<page>.component
# ----------------------------
echo "==> Generating per-page UI components and attaching to pages"
# Build GLOBALS_PER_PAGE_ENV="home:footer,chat-box;about:footer" from PAGE_GLOBALS_CSV
GLOBALS_PER_PAGE_ENV=""
for k v in "${(@kv)PAGE_GLOBALS_CSV}"; do
  # normalize key to lowercase slug
  key="${k:l}"
  GLOBALS_PER_PAGE_ENV+="${key}:${v};"
done
export GLOBALS_PER_PAGE_ENV
export GLOBAL_TOP_LIST="${(j: :)GLOBAL_TOP_SLUGS}"
export GLOBAL_BEFORE_OUTLET_LIST="${(j: :)GLOBAL_BEFORE_OUTLET_SLUGS}"
export GLOBAL_AFTER_OUTLET_LIST="${(j: :)GLOBAL_AFTER_OUTLET_SLUGS}"
export GLOBAL_BOTTOM_LIST="${(j: :)GLOBAL_BOTTOM_SLUGS}"

echo "==> Writing scripts/globals-per-page.json and scripts/globals-buckets.json"
mkdir -p scripts

# Serialize per-page globals map
node - <<'NODE'
const fs = require('fs');

function parseMap(str) {
  const out = {};
  if (!str) return out;
  // "home:footer,chat-box;about:footer"
  for (const pair of String(str).split(';')) {
    const p = pair.trim();
    if (!p) continue;
    const [k, v] = p.split(':');
    if (!k) continue;
    out[k.trim()] = (v || '').trim();
  }
  return out;
}

// PAGE_GLOBALS_CSV is not directly available to node, so we rebuild it from env pairs we write below.
const perPage = parseMap(process.env.GLOBALS_PER_PAGE_ENV || '');
fs.writeFileSync('scripts/globals-per-page.json', JSON.stringify(perPage, null, 2) + '\n');

const buckets = {
  top: (process.env.GLOBAL_TOP_LIST || '').split(/\s+/).filter(Boolean),
  beforeOutlet: (process.env.GLOBAL_BEFORE_OUTLET_LIST || '').split(/\s+/).filter(Boolean),
  afterOutlet: (process.env.GLOBAL_AFTER_OUTLET_LIST || '').split(/\s+/).filter(Boolean),
  bottom: (process.env.GLOBAL_BOTTOM_LIST || '').split(/\s+/).filter(Boolean),
};
fs.writeFileSync('scripts/globals-buckets.json', JSON.stringify(buckets, null, 2) + '\n');
NODE

echo "==> Writing scripts/ui-template-selection.json"
node - <<'NODE'
const fs = require('fs');
const lines = (process.env.UI_TEMPLATE_SERIALIZED || '').split(/\r?\n/).filter(Boolean);
const map = {};
for (const line of lines) {
  const idx = line.indexOf('=');
  if (idx === -1) continue;
  const scopeComp = line.slice(0, idx);
  const variant = line.slice(idx + 1).trim();
  if (!variant) continue;
  const [scope, component] = scopeComp.split('|');
  if (!scope || !component) continue;
  map[scope] = map[scope] || {};
  map[scope][component] = variant;
}
fs.writeFileSync('scripts/ui-template-selection.json', JSON.stringify(map, null, 2) + '\n');
NODE

if [[ -f "${SCRIPT_ROOT}/scripts/inject-ui-templates.mjs" ]]; then
  cp "${SCRIPT_ROOT}/scripts/inject-ui-templates.mjs" scripts/inject-ui-templates.mjs
fi


# Build lines like: home::Hero,CTA ; about::Hero
PAGE_LOCAL_COMPONENTS_LINES=""
for k in ${(k)PAGE_LOCAL_COMPONENTS_CSV}; do
  # IMPORTANT: use a real newline (not literal \n) so Node can split lines correctly
  PAGE_LOCAL_COMPONENTS_LINES+="${k}::${PAGE_LOCAL_COMPONENTS_CSV[$k]}"$'\n'
done
export PAGE_LOCAL_COMPONENTS_LINES

export PAGE_SLUGS_LIST="${(j: :)PAGE_SLUGS}"
export PAGE_LABELS_LIST="${(j:|:)PAGE_LABELS}"

node - <<'NODE'
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pageSlugs = (process.env.PAGE_SLUGS_LIST || '').split(/\s+/).filter(Boolean);
const pageLabels = (process.env.PAGE_LABELS_LIST || '').split('|').filter(Boolean);

const lines = (process.env.PAGE_LOCAL_COMPONENTS_LINES || '').split(/\r?\n/).filter(Boolean);
const brandTitle = process.env.APP_BRAND_TITLE || 'Our Site';

// slugify similar to zsh slugify: lowercase, replace non-alnum with -, trim dashes, collapse.
function isSlug(s) {
  return /^[a-z0-9]+([a-z0-9-]*[a-z0-9])?$/.test(String(s || '').trim());
}

function slugify(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/-+/g, '-');
}

const toPascal = (value = '') =>
  value
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

function extractTemplateUrl(tsSource) {
  const m = tsSource.match(/templateUrl:\s*['"]\.\/([^'"]+)['"]/);
  return m ? m[1] : null;
}

function tagsBlock(slugs, label) {
  if (!slugs || !slugs.length) return '';
  return slugs.map(c => `

<!-- ${label}: ${c} -->
<app-${c}></app-${c}>
`).join('');
}

function stripCliPlaceholder(html = '', page = '') {
  if (!html) return '';
  const withoutComments = html.replace(/<!--[\s\S]*?-->/g, '').trim();
  const pattern = new RegExp(`^<p>\\s*${page}\\s+works!\\s*</p>$`, 'i');
  return pattern.test(withoutComments) ? '' : html;
}

const pageLabelMap = {};
pageSlugs.forEach((slug, idx) => {
  pageLabelMap[slug] = pageLabels[idx] || slugToTitle(slug);
});
pageLabelMap.home = 'Home';

function slugToTitle(value = '') {
  return value
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

function labelFor(page) {
  return pageLabelMap[page] || slugToTitle(page);
}

function escapeLiteral(value = '') {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

const mapping = new Map();
for (const line of lines) {
  const idx = line.indexOf('::');
  if (idx === -1) continue;
  const page = line.slice(0, idx).trim();
  const csv = line.slice(idx + 2).trim();
  mapping.set(page, csv);
}

const allPages = ['home', ...pageSlugs];
// ----- Globals-per-page support -----
let globalsPerPage = {};
let globalBuckets = { top: [], beforeOutlet: [], afterOutlet: [], bottom: [] };
try {
  if (fs.existsSync('scripts/globals-per-page.json')) {
    globalsPerPage = JSON.parse(fs.readFileSync('scripts/globals-per-page.json', 'utf8') || '{}');
  }
} catch (e) {
  console.warn('WARN: failed reading scripts/globals-per-page.json:', e?.message || e);
}
try {
  if (fs.existsSync('scripts/globals-buckets.json')) {
    globalBuckets = JSON.parse(fs.readFileSync('scripts/globals-buckets.json', 'utf8') || '{}');
  }
} catch (e) {
  console.warn('WARN: failed reading scripts/globals-buckets.json:', e?.message || e);
}

function parseCsvList(csv) {
  return String(csv || '')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
}

function bucketizeSelectedGlobals(page) {
  const selected = parseCsvList(globalsPerPage[page]);
  const selectedSet = new Set(selected);
  const byBucket = {
    top: (globalBuckets.top || []).filter((g) => selectedSet.has(g)),
    beforeOutlet: (globalBuckets.beforeOutlet || []).filter((g) => selectedSet.has(g)),
    afterOutlet: (globalBuckets.afterOutlet || []).filter((g) => selectedSet.has(g)),
    bottom: (globalBuckets.bottom || []).filter((g) => selectedSet.has(g)),
  };
  const bucketed = new Set([...byBucket.top, ...byBucket.beforeOutlet, ...byBucket.afterOutlet, ...byBucket.bottom]);
  const leftovers = selected.filter((g) => !bucketed.has(g));
  if (leftovers.length) byBucket.afterOutlet.push(...leftovers);
  return { selected, ...byBucket };
}

function ensureSeoSetup(ts, { page, baseDir }) {
  const seoClass = `${toPascal(page)}SeoService`;
  createSeoService({ page, baseDir, className: seoClass });
  ts = ensureCoreOnInitImport(ts);
  ts = ensureSeoImport(ts, seoClass, page);
  ts = ensureImplementsOnInit(ts);
  ts = ensureSeoConstructor(ts, seoClass);
  ts = ensureNgOnInit(ts);
  return ts;
}

function createSeoService({ page, baseDir, className }) {
  const servicePath = path.join(baseDir, `${page}-seo.service.ts`);
  if (fs.existsSync(servicePath)) return;
  const pageLabel = labelFor(page);
  const title = `${pageLabel} | ${brandTitle}`;
  const description =
    page === 'home'
      ? `Discover ${brandTitle}. Update this description inside ${className}.`
      : `Learn more about ${pageLabel} at ${brandTitle}. Update this description inside ${className}.`;

  const template = `import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class ${className} {
  private readonly title = '${escapeLiteral(title)}';
  private readonly description = '${escapeLiteral(description)}';

  constructor(private readonly titleService: Title, private readonly meta: Meta) {}

  apply(): void {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({ name: 'description', content: this.description });
    this.meta.updateTag({ property: 'og:title', content: this.title });
    this.meta.updateTag({ property: 'og:description', content: this.description });
  }
}
`;

  fs.writeFileSync(servicePath, template);
}

function ensureCoreOnInitImport(ts) {
  const coreImport = /import\s*{\s*([^}]*)\s*}\s*from\s*'@angular\/core';/;
  if (!coreImport.test(ts)) {
    return `import { Component, OnInit } from '@angular/core';\n${ts}`;
  }
  return ts.replace(coreImport, (m, inner) => {
    const parts = inner.split(',').map((s) => s.trim()).filter(Boolean);
    const unique = [];
    for (const part of [...parts, 'OnInit']) {
      if (!unique.includes(part)) unique.push(part);
    }
    return `import { ${unique.join(', ')} } from '@angular/core';`;
  });
}

function ensureSeoImport(ts, seoClass, page) {
  const importLine = `import { ${seoClass} } from './${page}-seo.service';`;
  if (ts.includes(importLine)) return ts;
  const importMatches = [...ts.matchAll(/^import .*;$/gm)];
  if (importMatches.length) {
    const last = importMatches[importMatches.length - 1];
    const insertPos = last.index + last[0].length;
    return `${ts.slice(0, insertPos)}\n${importLine}${ts.slice(insertPos)}`;
  }
  return `${importLine}\n${ts}`;
}

function ensureImplementsOnInit(ts) {
  return ts.replace(/export class [^{]+{/, (match) => {
    if (/implements/.test(match)) {
      if (/OnInit/.test(match)) return match;
      return match.replace(/implements\s+([^{]+){/, (m2, list) => `implements ${list.trim().replace(/\s+$/, '')}, OnInit {`);
    }
    return match.replace('{', ' implements OnInit {');
  });
}

function ensureSeoConstructor(ts, seoClass) {
  const injection = `private readonly pageSeo: ${seoClass}`;
  if (new RegExp(`constructor\\s*\\([^)]*pageSeo\\s*:\\s*${seoClass}`).test(ts)) return ts;
  const ctorRegex = /constructor\s*\(([^)]*)\)\s*{/;
  if (ctorRegex.test(ts)) {
    return ts.replace(ctorRegex, (m, params) => {
      if (params.includes(seoClass)) return m;
      const trimmed = params.trim();
      const prefix = trimmed ? `${trimmed}, ${injection}` : injection;
      return `constructor(${prefix}) {`;
    });
  }
  return ts.replace(/export class [^{]+{/, (match) => `${match}\n  constructor(${injection}) {}\n`);
}

function ensureNgOnInit(ts) {
  if (ts.includes('this.pageSeo.apply()')) return ts;
  if (/ngOnInit\s*\(/.test(ts)) {
    return ts.replace(/ngOnInit\s*\(\)\s*{([\s\S]*?)}/, (m, body) => {
      if (body.includes('this.pageSeo.apply()')) return m;
      const trimmed = body.trim();
      const prefix = trimmed ? `    ${trimmed}\n` : '';
      return `ngOnInit(): void {\n${prefix}    this.pageSeo.apply();\n  }`;
    });
  }
  const ctorMatch = ts.match(/constructor\s*\([^)]*\)\s*{[\s\S]*?}\s*/);
  if (ctorMatch) {
    const insertAt = ctorMatch.index + ctorMatch[0].length;
    return `${ts.slice(0, insertAt)}\n  ngOnInit(): void {\n    this.pageSeo.apply();\n  }\n${ts.slice(insertAt)}`;
  }
  return ts.replace(/export class [^{]+{/, (match) => `${match}\n  ngOnInit(): void {\n    this.pageSeo.apply();\n  }\n`);
}


for (const page of allPages) {
  const csv = (mapping.get(page) || '').trim();
  if (!csv) continue;

  const labels = csv.split(',').map(s => s.trim()).filter(Boolean);

  // Build unique component slugs for this page, suffixing page (hero-home, hero-about)
  const comps = [];
  const seen = new Set();
  for (const label of labels) {
    const raw = String(label || '').trim();
    const base = isSlug(raw) ? raw.toLowerCase() : slugify(raw);
    if (!base) continue;
    let slug = base.endsWith(`-${page}`) ? base : `${base}-${page}`;
    if (slug === 'site-header') continue; // reserved
    if (seen.has(slug)) continue;
    seen.add(slug);
    comps.push(slug);
  }
  if (!comps.length) continue;

  // Generate components via Angular CLI (standalone, no tests)
  for (const c of comps) {
    const genPath = `pages/${page}/components/${c}`;
    try {
      execSync(`npx -y ng g component "${genPath}" --standalone --skip-tests`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`Failed generating component: ${genPath}`);
      throw e;
    }
  }

  // Normalize possibility: Angular may create src/app/app/...; resolve baseDir after generation
  // We'll prefer src/app/pages/<page>
  let baseDir = path.join('src', 'app', 'pages', page);
  if (!fs.existsSync(baseDir)) {
    // fallback
    baseDir = path.join('src', 'app', 'app', 'pages', page);
  }

  const tsPath = path.join(baseDir, `${page}.component.ts`);
  if (!fs.existsSync(tsPath)) continue;

  let ts = fs.readFileSync(tsPath, 'utf8');

  ts = ensureSeoSetup(ts, { page, baseDir });

  // Ensure component imports exist + add to @Component imports: []
  const classNameOf = (slug) => `${toPascal(slug)}Component`;

  // Globals selected for this page (ordered by bucket)
  const g = bucketizeSelectedGlobals(page);
  const globalOrdered = [...g.top, ...g.beforeOutlet, ...g.afterOutlet, ...g.bottom];

  // Import GLOBAL components from src/app/components/*
  for (const gc of globalOrdered) {
    const className = classNameOf(gc);
    const importLine = `import { ${className} } from '../../components/${gc}/${gc}.component';`;
    if (!ts.includes(importLine)) {
      const importMatches = [...ts.matchAll(/^import .*;$/gm)];
      if (importMatches.length) {
        const last = importMatches[importMatches.length - 1];
        const insertAt = last.index + last[0].length;
        ts = ts.slice(0, insertAt) + `\n${importLine}` + ts.slice(insertAt);
      } else {
        ts = `${importLine}\n` + ts;
      }
    }
  }

  // Import PAGE-LOCAL components from ./components/*
  for (const c of comps) {
    const className = classNameOf(c);
    const importLine = `import { ${className} } from './components/${c}/${c}.component';`;
    if (!ts.includes(importLine)) {
      const importMatches = [...ts.matchAll(/^import .*;$/gm)];
      if (importMatches.length) {
        const last = importMatches[importMatches.length - 1];
        const insertAt = last.index + last[0].length;
        ts = ts.slice(0, insertAt) + `\n${importLine}` + ts.slice(insertAt);
      } else {
        ts = `${importLine}\n` + ts;
      }
    }
  }


  ts = ts.replace(/imports:\s*\[([^\]]*)\]/m, (m, inner) => {
    let items = inner.split(',').map(s => s.trim()).filter(Boolean);

    const allSlugs = [...(globalOrdered || []), ...(comps || [])];
    for (const slug of allSlugs) {
      const className = `${toPascal(slug)}Component`;
      if (!items.includes(className)) items.push(className);
    }

    return `imports: [${items.join(', ')}]`;
  });

  // Attach tags to inline template OR external templateUrl file
  if (ts.includes('template: `')) {
    ts = ts.replace(/template:\s*`([\s\S]*?)`/m, (m, body) => {
      if (comps.some(c => body.includes(`<app-${c}`))) return m;
      return `template: \`${body}${tagsBlock(comps)}\``;
    });
    fs.writeFileSync(tsPath, ts);
    continue;
  }

  const tplRel = extractTemplateUrl(ts);
  fs.writeFileSync(tsPath, ts);

  if (tplRel) {
    const htmlPath = path.join(baseDir, tplRel);
    if (fs.existsSync(htmlPath)) {
      let html = fs.readFileSync(htmlPath, 'utf8');
      if (!comps.some(c => html.includes(`<app-${c}`))) {
        const g2 = bucketizeSelectedGlobals(page);
        const topBlock = tagsBlock(g2.top, 'Global(top)');
        const beforeBlock = tagsBlock(g2.beforeOutlet, 'Global(before)');
        const localBlock = tagsBlock(comps, 'Page-local');
      const afterBlock = tagsBlock(g2.afterOutlet, 'Global(after)');
      const bottomBlock = tagsBlock(g2.bottom, 'Global(bottom)');
      const base = stripCliPlaceholder(html, page);
      html = '';
      html += topBlock;
      html += beforeBlock;
      html += `\n\n<!-- Page template -->\n` + (base || '<!-- Add page content -->') + `\n`;
      html += localBlock;
      html += afterBlock;
      html += bottomBlock;

      fs.writeFileSync(htmlPath, html);
      }
    }
  }
}
NODE

echo "==> Re-normalizing Angular CLI file layout after per-page component generation"
# Angular CLI may generate under src/app/app/...; move anything new into src/app/...
if [[ -d src/app/app/pages ]]; then
  mkdir -p src/app/pages
  # merge pages tree
  for d in src/app/app/pages/*; do
    [[ -d "$d" ]] || continue
    page="$(basename "$d")"
    if [[ -d "src/app/pages/$page" ]]; then
      # merge components into existing page dir
      mkdir -p "src/app/pages/$page/components"
      if [[ -d "$d/components" ]]; then
        mv "$d/components/"* "src/app/pages/$page/components/" 2>/dev/null || true
      fi
    else
      mv "$d" "src/app/pages/$page"
    fi
  done
  # cleanup
  if [[ -d src/app/app/pages && -z "$(ls -A src/app/app/pages 2>/dev/null)" ]]; then
    rmdir src/app/app/pages || true
  fi
fi

if [[ -d src/app/app/components && ! -d src/app/components ]]; then
  mv src/app/app/components src/app/components
fi
if [[ -d src/app/app && -z "$(ls -A src/app/app 2>/dev/null)" ]]; then
  rmdir src/app/app || true
fi

echo "==> Re-normalizing filenames to *.component.ts"
paths=()
[[ -d src/app/pages ]] && paths+=("src/app/pages")
[[ -d src/app/components ]] && paths+=("src/app/components")
if (( ${#paths[@]} )); then
  while IFS= read -r file; do
    [[ "$file" == *.component.ts ]] && continue
    [[ "$file" == *-seo.service.ts ]] && continue
    [[ "$file" == *-seo.service.component.ts ]] && continue
    mv "$file" "${file%.ts}.component.ts"
  done < <(find "${paths[@]}" -type f -name '*.ts' ! -name '*-seo.service.ts' ! -name '*-seo.service.component.ts' 2>/dev/null)

  while IFS= read -r serviceFile; do
    newPath="${serviceFile%.service.component.ts}.service.ts"
    mv "$serviceFile" "$newPath"
  done < <(find "${paths[@]}" -type f -name '*-seo.service.component.ts' 2>/dev/null)
fi

echo "==> Re-normalizing templates/styles to *.component.html/*.component.css (and updating templateUrl/styleUrl)"
node - <<'NODE'
const fs = require('fs');
const path = require('path');

const bases = ['src/app/pages', 'src/app/components'];

function safeRename(oldPath, newPath) {
  if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) return;
  fs.renameSync(oldPath, newPath);
}

for (const baseDir of bases) {
  if (!fs.existsSync(baseDir)) continue;

  for (const entry of fs.readdirSync(baseDir)) {
    const dir = path.join(baseDir, entry);
    if (!fs.statSync(dir).isDirectory()) continue;

    const tsFile = fs.readdirSync(dir).find(f => f.endsWith('.component.ts'));
    if (!tsFile) continue;

    const slug = path.basename(tsFile, '.component.ts');

    // also normalize nested "components/*" directories (page-local components)
    const nested = path.join(dir, 'components');
    const dirsToNormalize = [dir];
    if (fs.existsSync(nested)) {
      for (const sub of fs.readdirSync(nested)) {
        const subdir = path.join(nested, sub);
        if (fs.statSync(subdir).isDirectory()) dirsToNormalize.push(subdir);
      }
    }

    for (const targetDir of dirsToNormalize) {
      const ts = fs.readdirSync(targetDir).find(f => f.endsWith('.component.ts'));
      if (!ts) continue;
      const sslug = path.basename(ts, '.component.ts');

      const legacyHtml = path.join(targetDir, `${sslug}.html`);
      const legacyCss  = path.join(targetDir, `${sslug}.css`);
      const compHtml   = path.join(targetDir, `${sslug}.component.html`);
      const compCss    = path.join(targetDir, `${sslug}.component.css`);

      safeRename(legacyHtml, compHtml);
      safeRename(legacyCss, compCss);

      const tsPath = path.join(targetDir, ts);
      let source = fs.readFileSync(tsPath, 'utf8');

      source = source.replace(/templateUrl:\s*['"]\.\/([^'"]+)\.html['"]/g, (m, name) => {
        const cand = path.join(targetDir, `${name}.component.html`);
        if (fs.existsSync(cand)) return `templateUrl: './${name}.component.html'`;
        return m;
      });

      source = source.replace(/styleUrl:\s*['"]\.\/([^'"]+)\.css['"]/g, (m, name) => {
        const cand = path.join(targetDir, `${name}.component.css`);
        if (fs.existsSync(cand)) return `styleUrl: './${name}.component.css'`;
        return m;
      });

      source = source.replace(/styleUrls:\s*\[([^\]]*)\]/g, (m) => {
        return m.replace(/['"]\.\/([^'"]+)\.css['"]/g, (mm, name) => {
          const cand = path.join(targetDir, `${name}.component.css`);
          if (fs.existsSync(cand)) return `'./${name}.component.css'`;
          return mm;
        });
      });

      fs.writeFileSync(tsPath, source);
    }
  }
}
NODE

echo "==> Renaming ALL generated component classes to *Component (recursive)"
node - <<'NODE'
const fs = require('fs');
const path = require('path');

const root = path.join('src', 'app');

const toPascal = (str) =>
  str
    .split(/[-_]/g)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith('.component.ts')) out.push(full);
  }
  return out;
}

const files = walk(root);

for (const filePath of files) {
  if (filePath.endsWith('-seo.service.ts') || filePath.endsWith('-seo.service.component.ts')) {
    continue;
  }
  let source = fs.readFileSync(filePath, 'utf8');
  const baseName = path.basename(filePath, '.component.ts'); // e.g. hero-about
  const desiredClass = `${toPascal(baseName)}Component`;

  // Replace any export class X with desired (keep decorators, etc.)
  if (!/export class\s+/.test(source)) continue;
  source = source.replace(/export class\s+[A-Za-z0-9_]+/g, `export class ${desiredClass}`);
  fs.writeFileSync(filePath, source);
}
NODE

echo "==> Skipping app-shell global rendering (globals are injected per page template)"

echo "==> Renaming generated component classes to *Component"
node - <<'NODE'
const fs = require('fs');
const path = require('path');

const targets = ['src/app/pages', 'src/app/components'];
const toPascal = (str) =>
  str
    .split(/[-_]/g)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

for (const baseDir of targets) {
  if (!fs.existsSync(baseDir)) continue;
  for (const entry of fs.readdirSync(baseDir)) {
    const full = path.join(baseDir, entry);
    if (!fs.statSync(full).isDirectory()) continue;
    const tsFile = fs.readdirSync(full).find((f) => f.endsWith('.component.ts'));
    if (!tsFile) continue;
    const filePath = path.join(full, tsFile);
    let source = fs.readFileSync(filePath, 'utf8');
    const baseName = path.basename(tsFile, '.component.ts');
    const desiredClass = `${toPascal(baseName)}Component`;
    source = source.replace(/export class [A-Za-z0-9_]+/, `export class ${desiredClass}`);
    fs.writeFileSync(filePath, source);
  }
}
NODE

if [[ -f scripts/inject-ui-templates.mjs ]]; then
  echo "==> Injecting selected UI templates"
  UI_TEMPLATE_LIBRARY_ROOT="${TEMPLATE_LIBRARY_ROOT}" node scripts/inject-ui-templates.mjs
fi

echo "==> Writing canonical router config to src/app/app.routes.ts (home + selected)"
# Send slug list to node
export PAGE_SLUGS_LIST="${(j: :)PAGE_SLUGS}"
export PAGE_SLUGS_JSON="$(python3 - <<'PY'
import json, os
pages=os.environ.get("PAGE_SLUGS_LIST","").split()
print(json.dumps(pages))
PY
)"

node - <<'NODE'
const fs = require('fs');

const pages = JSON.parse(process.env.PAGE_SLUGS_JSON || '[]');
const toPascal = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');

let out = `import { Routes } from '@angular/router';\n\nexport const routes: Routes = [\n`;
out += `  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },\n`;

for (const p of pages) {
  out += `  { path: '${p}', loadComponent: () => import('./pages/${p}/${p}.component').then(m => m.${toPascal(p)}Component) },\n`;
}

out += `  { path: '**', redirectTo: '' },\n`;
out += `];\n`;

fs.writeFileSync('src/app/app.routes.ts', out);
NODE


echo "==> Configuring PrimeNG theme provider (Aura) in src/app/app.config.ts"
cat > src/app/app.config.ts <<APPCONFIG
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';

const primaryPalette = {
$PRIMARY_PALETTE_BLOCK
} as const;

const surfaceTokens = {
$SURFACE_CONFIG_BLOCK
} as const;

const neonTheme = {
  ...Aura,
  semantic: {
    ...Aura.semantic,
    primary: {
      ...(Aura.semantic?.primary ?? {}),
      ...primaryPalette,
    },
    colorScheme: {
      ...Aura.semantic?.colorScheme,
      light: {
        ...Aura.semantic?.colorScheme?.light,
        primary: {
          ...Aura.semantic?.colorScheme?.light?.primary,
          color: primaryPalette[500],
          hoverColor: primaryPalette[600],
          activeColor: primaryPalette[700],
          contrastColor: '$PRIMARY_CONTRAST_COLOR',
        },
        surface: {
          ...Aura.semantic?.colorScheme?.light?.surface,
          ...surfaceTokens,
        },
      },
      dark: {
        ...Aura.semantic?.colorScheme?.dark,
        primary: {
          ...Aura.semantic?.colorScheme?.dark?.primary,
          color: primaryPalette[500],
          hoverColor: primaryPalette[600],
          activeColor: primaryPalette[700],
          contrastColor: '$PRIMARY_CONTRAST_COLOR',
        },
        surface: {
          ...Aura.semantic?.colorScheme?.dark?.surface,
          ...surfaceTokens,
        },
      },
    },
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: neonTheme,
      },
    }),
  ],
};
APPCONFIG

cat > src/app/app.config.server.ts <<'SERVERCFG'
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
SERVERCFG


echo "==> Enforcing angular.json assets/styles entries (PrimeIcons + Aura + assets + styles.css)"
node - <<'NODE'
const fs = require('fs');

const p = 'angular.json';
const j = JSON.parse(fs.readFileSync(p, 'utf8'));

const projectName =
  j.defaultProject ||
  Object.keys(j.projects || {})[0];

if (!projectName) {
  console.error('Could not determine Angular project name in angular.json');
  process.exit(1);
}

const buildOptions = j.projects[projectName]?.architect?.build?.options;
if (!buildOptions) {
  console.error('Could not locate build options at projects[project].architect.build.options');
  process.exit(1);
}

buildOptions.assets = buildOptions.assets || [];
buildOptions.styles = buildOptions.styles || [];

// Remove PrimeNG base stylesheet entries (PrimeNG + Prime UIX does not require primeng.min.css, and it may be blocked by package exports in Angular builders)
buildOptions.styles = buildOptions.styles.filter(s => !String(s).includes('primeng/resources/primeng') && !String(s).includes('node_modules/primeng/resources/primeng'));
buildOptions.scripts = buildOptions.scripts || [];

const ensure = (arr, val) => { if (!arr.includes(val)) arr.push(val); };
const removeValue = (arr, val) => {
  let idx = arr.indexOf(val);
  while (idx !== -1) {
    arr.splice(idx, 1);
    idx = arr.indexOf(val);
  }
};
const ensureAfter = (arr, val, afterVal) => {
  if (!val) return;
  removeValue(arr, val);
  const afterIdx = arr.indexOf(afterVal);
  if (afterIdx === -1) {
    arr.push(val);
  } else {
    arr.splice(afterIdx + 1, 0, val);
  }
};

ensure(buildOptions.assets, 'src/favicon.ico');
ensure(buildOptions.assets, 'src/assets');
ensure(buildOptions.assets, 'src/robots.txt');
ensure(buildOptions.assets, 'src/sitemap.xml');

ensure(buildOptions.styles, 'src/styles.css');
ensure(buildOptions.styles, 'node_modules/primeicons/primeicons.css');
ensure(buildOptions.styles, 'src/prime-theme.css');

const tokensCss = 'src/styles/primeng-tokens.css';
const includeTokens =
  process.env.ENABLE_PRIMENG_TOKEN_CSS === 'true' ||
  fs.existsSync(tokensCss);
if (includeTokens) {
  ensureAfter(buildOptions.styles, tokensCss, 'src/prime-theme.css');
} else {
  removeValue(buildOptions.styles, tokensCss);
}


const testOptions = j.projects[projectName]?.architect?.test?.options;
if (testOptions) {
  testOptions.assets = testOptions.assets || [];
  testOptions.styles = testOptions.styles || [];
  testOptions.scripts = testOptions.scripts || [];

  ensure(testOptions.assets, 'src/favicon.ico');
  ensure(testOptions.assets, 'src/assets');
  ensure(testOptions.assets, 'src/robots.txt');
  ensure(testOptions.assets, 'src/sitemap.xml');

  ensure(testOptions.styles, 'src/styles.css');
  ensure(testOptions.styles, 'node_modules/primeicons/primeicons.css');
  ensure(testOptions.styles, 'src/prime-theme.css');
  if (includeTokens) {
    ensureAfter(testOptions.styles, tokensCss, 'src/prime-theme.css');
  } else {
    removeValue(testOptions.styles, tokensCss);
  }
}

fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n');
console.log(`Updated angular.json for project: ${projectName}`);
NODE

echo "==> Overwriting site-header with approved nav (brand title = app name; routes = selected pages)"
# Build nav <li> list based on selected pages + labels
# Build nav <li> list based on selected pages (NO Home link; brand/logo is the Home link)
# Build nav <li> list based on selected pages (NO Home link; brand/logo is the Home link)
NAV_LIS=""
for i in {1..${#PAGE_SLUGS[@]}}; do
  s="${PAGE_SLUGS[$i]}"
  l="${PAGE_LABELS[$i]}"
  [[ "$s" == "home" ]] && continue

  NAV_LIS="${NAV_LIS}
            <li><a routerLink=\"/${s}\" class=\"flex px-0 lg:px-6 py-2 items-center lg:text-primary-contrast font-medium transition-colors duration-150\">${l}</a></li>"
done

cat > src/app/components/site-header/site-header.component.ts <<HEADER
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [CommonModule, RouterModule, StyleClassModule],
  template: \`
    <div class="resize-container-3 bg-surface-50 dark:bg-surface-950">
      <div class="bg-primary py-4 px-12 shadow flex items-center justify-between relative lg:static">
        <div class="flex items-center gap-4 py-2">
          <a routerLink="/" class="flex items-center gap-4 no-underline">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.84219 2.87829C5.69766 3.67858 4.6627 4.62478 3.76426 5.68992C7.4357 5.34906 12.1001 5.90564 17.5155 8.61335C23.2984 11.5047 27.955 11.6025 31.1958 10.9773C30.9017 10.087 30.5315 9.23135 30.093 8.41791C26.3832 8.80919 21.6272 8.29127 16.0845 5.51998C12.5648 3.76014 9.46221 3.03521 6.84219 2.87829ZM27.9259 5.33332C24.9962 2.06 20.7387 0 16 0C14.6084 0 13.2581 0.177686 11.9709 0.511584C13.7143 0.987269 15.5663 1.68319 17.5155 2.65781C21.5736 4.68682 25.0771 5.34013 27.9259 5.33332ZM31.8887 14.1025C27.9735 14.8756 22.567 14.7168 16.0845 11.4755C10.024 8.44527 5.20035 8.48343 1.94712 9.20639C1.7792 9.24367 1.61523 9.28287 1.45522 9.32367C1.0293 10.25 0.689308 11.2241 0.445362 12.2356C0.705909 12.166 0.975145 12.0998 1.25293 12.0381C5.19966 11.161 10.7761 11.1991 17.5155 14.5689C23.5761 17.5991 28.3997 17.561 31.6529 16.838C31.7644 16.8133 31.8742 16.7877 31.9822 16.7613C31.9941 16.509 32 16.2552 32 16C32 15.358 31.9622 14.7248 31.8887 14.1025ZM31.4598 20.1378C27.5826 20.8157 22.3336 20.5555 16.0845 17.431C10.024 14.4008 5.20035 14.439 1.94712 15.1619C1.225 15.3223 0.575392 15.5178 0.002344 15.7241C0.000781601 15.8158 0 15.9078 0 16C0 24.8366 7.16344 32 16 32C23.4057 32 29.6362 26.9687 31.4598 20.1378Z"
                class="fill-primary-contrast"
              />
            </svg>
            <span class="text-xl font-medium text-primary-contrast whitespace-nowrap">__APP_TITLE__</span>
          </a>
        </div>

        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-3"
          [hideOnResize]="true"
          class="cursor-pointer block lg:hidden text-primary-contrast mt-1"
        >
          <i class="pi pi-bars text-2xl!"></i>
        </a>

        <div
          class="items-center grow justify-between hidden lg:flex absolute lg:static w-full lg:bg-transparent lg:dark:bg-transparent bg-surface-0 dark:bg-surface-900 left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none"
        >
          <ul class="list-none p-0 py-4 lg:py-0 m-0 flex grow lg:items-center lg:justify-end text-surface-900 dark:text-surface-0 select-none flex-col lg:flex-row cursor-pointer">
${NAV_LIS}
          </ul>
        </div>
      </div>
    </div>
  \`
})
export class SiteHeaderComponent {}
HEADER

# Replace header title placeholder with the repo/app name
APP_TITLE="$APP_NAME" node - <<'NODE'
const fs = require('fs');
const p = 'src/app/components/site-header/site-header.component.ts';
let s = fs.readFileSync(p, 'utf8');
s = s.replaceAll('__APP_TITLE__', process.env.APP_TITLE || '');
fs.writeFileSync(p, s);
NODE

echo "==> Writing app shell to include site-header + router-outlet"
# Keep both app.html and app.component.html in sync
cat > src/app/app.component.html <<'HTML'
<app-site-header></app-site-header>
<router-outlet></router-outlet>
HTML

cat > src/app/app.html <<'HTML'
<app-site-header></app-site-header>
<router-outlet></router-outlet>
HTML

cat > src/app/app.component.ts <<'APP'
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './components/site-header/site-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
APP

# Ensure style files exist
if [[ ! -f src/app/app.component.css ]]; then
  : > src/app/app.component.css
fi
if [[ ! -f src/app/app.css ]]; then
  : > src/app/app.css
fi


echo "==> App shell will be finalized after global component wiring (skipping default overwrite here)"
# (app.component.ts is written later by the global positioning step)
cat > src/main.ts <<'MAIN'
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
MAIN

cat > src/main.server.ts <<'MAINSERVER'
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
MAINSERVER

cat > src/app/app.spec.ts <<'SPEC'
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
SPEC

# ----------------------------
# Style reference support
# ----------------------------
echo "==> Writing style reference docs for Codex"
mkdir -p docs

# Build pages list string for docs (use labels)
PAGES_LINE="Home"
for l in "${PAGE_LABELS[@]}"; do
  PAGES_LINE+=", ${l}"
done

cat > docs/style-reference.md <<EOF
# Style Reference

Target site to mimic (layout/feel only; do not copy assets or wording):
${STYLE_URL:-"(none provided)"}

Rules:
- Mimic spacing, typography scale, section rhythm, and component density
- Do NOT copy logos, icons, images, or text
- Keep required routes/pages: ${PAGES_LINE}
- Use PrimeNG (Aura) + Tailwind for implementation
EOF

cat > docs/codex-prompt.md <<EOF
You are implementing the UI for this Angular prerendered client site.

Reference style URL:
${STYLE_URL:-"(none provided)"}

Task:
- Use the reference URL for layout/spacing/typography inspiration (no copying assets/copy).
- Implement a cohesive theme using PrimeNG (Aura) + Tailwind.
- Update these pages: ${PAGES_LINE}.
- Ensure all routes are linked from the header nav and router works.
- Keep pages in src/app/pages and reusable UI in src/app/components.
- Keep global styles/assets registered in angular.json.

Deliver:
- Updated page templates (sections + PrimeNG components + Tailwind wrappers)
- Any new components created under app/components
- Any required updates to styles.css/tailwind config
EOF

# ----------------------------
# Firebase Hosting + public/ build enforcement
# ----------------------------
echo "==> Writing firebase.json (Hosting public/ + router rewrites)"
cat > firebase.json <<'FIREBASE'
{
  "hosting": {
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
FIREBASE

echo "==> Creating scripts/build-static.mjs (copy dist/<project>/browser -> public/)"
mkdir -p scripts
cat > scripts/build-static.mjs <<'BUILD'
import fs from 'node:fs';
import path from 'node:path';

const angularJson = JSON.parse(fs.readFileSync('angular.json', 'utf8'));
const projectName = angularJson.defaultProject ?? Object.keys(angularJson.projects ?? {})[0];

if (!projectName) {
  console.error('Could not determine project name from angular.json');
  process.exit(1);
}

const distBrowser = path.join('dist', projectName, 'browser');
if (!fs.existsSync(distBrowser)) {
  console.error(`Expected build output not found at: ${distBrowser}`);
  console.error('Run: npm run build');
  process.exit(1);
}

fs.rmSync('public', { recursive: true, force: true });
fs.mkdirSync('public', { recursive: true });
fs.cpSync(distBrowser, 'public', { recursive: true });

console.log(`Copied ${distBrowser} -> public/`);
BUILD

echo "==> Adding npm scripts: build:static and deploy"
node - <<'NODE'
const fs = require('fs');

const p = 'package.json';
const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));

pkg.scripts = pkg.scripts || {};
pkg.scripts["build:static"] = "npm run build && node scripts/build-static.mjs";
pkg.scripts["deploy"] = "npm run build:static && firebase deploy";

fs.writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
NODE

echo "==> Creating a minimal README.md"
cat > README.md <<EOF
# ${APP_NAME}

Style reference:
${STYLE_URL:-"(none provided)"}

Pages:
- Home
$(for l in "${PAGE_LABELS[@]}"; do echo "- ${l}"; done)

Components:
- Site Header
$(for l in "${COMPONENT_LABELS[@]}"; do echo "- ${l}"; done)

Static client site standard:
- Angular (latest) + standalone + prerender (SSR-capable build)
- PrimeNG + PrimeIcons + Tailwind
- Prime theme: Aura (generated to src/prime-theme.css)
- Pages: src/app/pages
- UI components: src/app/components (includes approved site-header)
- Router wired for all pages
- angular.json includes assets + global styles
- Firebase Hosting uses public/ (via build:static copy)

## Dev
npm install
npm start

## Build + copy to public/
npm run build:static

## Deploy (requires firebase-tools + firebase init)
npm run deploy

## Codex
See:
- docs/style-reference.md
- docs/codex-prompt.md
EOF

if [[ "$WITH_FIREBASE" == "--firebase" ]]; then
  if command -v firebase >/dev/null; then
    echo "==> Firebase CLI detected. Running firebase init (interactive)."
    echo "Tip: choose Hosting, and use 'public' when prompted (your standard)."
    firebase init
  else
    echo "==> Firebase CLI not found. Install with: npm i -g firebase-tools"
  fi
fi

echo ""
echo "✅ Bootstrap complete."
echo "Next:"
echo "1) (Optional) firebase init --hosting (if not already done)"
echo "2) npm run build:static"
echo "3) firebase deploy (or npm run deploy)"
