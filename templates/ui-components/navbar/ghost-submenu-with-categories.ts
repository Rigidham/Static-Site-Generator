import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

interface Category {
  title: string;
  to: string;
}

interface SubMenuItem {
  label: string;
  description: string;
  icon: string;
  to: string;
  categories?: Category[];
}

interface NavItem {
  label: string;
  to?: string;
  subMenu?: SubMenuItem[];
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-8 min-h-screen h-full w-full bg-surface-0 dark:bg-surface-950">
      <nav class="relative w-full flex items-center px-8 lg:px-20 gap-6 py-6 lg:py-0" (mouseleave)="closeMenu()">
        <a href="#" class="relative z-20 flex items-center gap-4">
          <svg class="fill-surface-900 dark:fill-surface-0" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5443_6140)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.3612 10.2246C22.3185 10.1961 22.2755 10.1679 22.2324 10.1402C19.9097 8.64667 17.5 6.51142 17.5 3.75V0C20.9611 0 24.3446 1.02636 27.2225 2.94928C30.1004 4.8722 32.3433 7.60533 33.6679 10.803C34.9924 14.0007 35.339 17.5194 34.6637 20.9141C33.9885 24.3087 32.3218 27.427 29.8743 29.8743C27.427 32.3218 24.3087 33.9885 20.9141 34.6637C17.5194 35.339 14.0007 34.9924 10.803 33.6679C7.60533 32.3433 4.8722 30.1004 2.94928 27.2225C1.02636 24.3446 0 20.9611 0 17.5H3.75C6.51142 17.5 8.64667 19.9097 10.1402 22.2324C10.1679 22.2755 10.1961 22.3185 10.2246 22.3612C11.1861 23.8002 12.5527 24.9217 14.1516 25.584C15.7504 26.2462 17.5097 26.4195 19.207 26.0818C20.9044 25.7442 22.4634 24.9109 23.6872 23.6872C24.9109 22.4634 25.7442 20.9044 26.0818 19.207C26.4195 17.5097 26.2462 15.7504 25.584 14.1516C24.9217 12.5527 23.8002 11.1861 22.3612 10.2246Z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.75 3.35672e-06C9.19771 3.59593e-06 8.7559 0.449155 8.69291 0.997837C8.60035 1.80427 8.39582 2.59555 8.08395 3.34848C7.64421 4.41008 6.9997 5.37467 6.18718 6.18719C5.37467 6.99971 4.41008 7.64422 3.34848 8.08395C2.59554 8.39582 1.80427 8.60035 0.997834 8.69292C0.449152 8.7559 3.62901e-07 9.19772 3.3876e-07 9.75L0 17.5C2.29813 17.5 4.57376 17.0474 6.69697 16.1679C8.82017 15.2884 10.7494 13.9994 12.3743 12.3743C13.9994 10.7494 15.2884 8.82018 16.1679 6.69696C17.0474 4.57376 17.5 2.29813 17.5 0L9.75 3.35672e-06Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_5443_6140">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div class="text-surface-900 dark:text-surface-0 text-lg font-semibold">BriteMank</div>
        </a>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-8"
          [hideOnResize]="true"
          class="relative z-20 cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-0 ml-auto"
        >
          <i class="pi pi-bars text-3xl"></i>
        </a>
        <div
          class="border-b border-surface lg:border-0 animate-fadein absolute lg:static bg-surface-50 dark:bg-surface-900 lg:bg-transparent lg:dark:bg-transparent w-full top-full left-0 right-0 shadow-md lg:shadow-none z-20 lg:z-auto pt-0 lg:py-0 hidden lg:flex flex-1 items-center"
        >
          <ul
            class="lg:mt-0 border-surface lg:border-0 select-none relative flex-1 flex lg:flex-row flex-col lg:mb-0 mb-4 lg:items-center gap-2 lg:gap-8 p-4"
            (mouseleave)="hoveredItem.set(null)"
          >
            @for (item of navs; track item.label; let index = $index) {
              <li (mouseenter)="setActiveItem(item)" (click)="setActiveItem(item)">
                @if (item?.subMenu) {
                  <a
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    [ngClass]="{
                      'group relative cursor-pointer lg:border-b px-4 py-2 lg:p-4 transition-all flex items-center justify-between gap-2': true,
                      'border-primary': activeItem()?.label === item.label,
                      'border-transparent': activeItem()?.label !== item.label
                    }"
                    (click)="toggleMobileMenu(index)"
                  >
                    <span class="text-base leading-tight font-medium">{{ item.label }}</span>
                    <i
                      [ngClass]="{
                        'pi pi-angle-down text-base! leading-none! lg:transition-transform lg:duration-200': true,
                        'rotate-180': openMobileMenus().has(index),
                        'lg:rotate-0': true,
                        'lg:rotate-180': activeItem()?.label === item.label
                      }"
                    ></i>
                    <span
                      [ngClass]="{
                        'hidden lg:block absolute top-full left-1/2 -translate-x-1/2 transition-all border-l-4 border-l-transparent border-r-4 border-transparent border-t-4 border-t-primary': true,
                        'opacity-100': activeItem()?.label === item.label,
                        'opacity-0': activeItem()?.label !== item.label
                      }"
                    ></span>
                  </a>
                } @else {
                  <a class="py-2 px-4 lg:p-4 transition-all flex text-base leading-tight font-medium" [href]="item.to">{{ item.label }}</a>
                }
                @if (item?.subMenu) {
                  <div class="lg:hidden pl-6 lg:pl-12 hidden animate-fadein">
                    <ul class="flex flex-col gap-3">
                      @for (subItem of item.subMenu; track subItem.label; let j = $index) {
                        <li class="px-4">
                          <a
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            leaveToClass="hidden"
                            [hideOnOutsideClick]="true"
                            class="flex items-center cursor-pointer justify-between w-full py-2 text-surface-700 dark:text-surface-200"
                            (click)="toggleSubMenu(index + '-' + j); selectedCategory = j"
                          >
                            <div class="flex items-center gap-4 cursor-pointer">
                              <i [class]="subItem.icon" class="text-lg!"></i>
                              <div class="flex flex-col">
                                <span class="text-base font-medium leading-tight">{{ subItem.label }}</span>
                                <span class="text-sm leading-tight text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                              </div>
                            </div>
                            @if (subItem.categories) {
                              <i [ngClass]="{ 'pi pi-angle-down text-base!': true, 'rotate-180': openSubMenus().has(index + '-' + j) }"></i>
                            }
                          </a>
                          @if (subItem.categories) {
                            <div class="hidden animate-fadein">
                              <div class="pl-10 py-3">
                                <div class="text-base font-medium leading-tight text-surface-900 dark:text-surface-0 mb-2">Categories</div>
                                <ul class="flex flex-col gap-2">
                                  @for (category of subItem.categories; track category.title; let k = $index) {
                                    <li>
                                      <a [href]="category.to" class="text-sm leading-tight text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-0">
                                        {{ category.title }}
                                      </a>
                                    </li>
                                  }
                                </ul>
                              </div>
                            </div>
                          }
                        </li>
                      }
                    </ul>
                  </div>
                }
              </li>
            }
            @if (activeItem()?.subMenu) {
              <div
                [ngClass]="{
                  'lg:block hidden animate-fadein animate-duration-150 max-w-lg w-full absolute top-full p-3 rounded-2xl overflow-hidden bg-surface-100 dark:bg-surface-900 transition-all': true,
                  'opacity-100 visible z-99': activeItem(),
                  'opacity-0 invisible z-[-99]': !activeItem()
                }"
              >
                <div class="flex gap-4">
                  <ul class="flex-1 flex flex-col rounded-lg overflow-hidden">
                    @for (subItem of activeItem()?.subMenu; track subItem.label; let j = $index) {
                      <li>
                        <a
                          [href]="subItem.to"
                          [ngClass]="{
                            'flex items-center gap-4 w-full p-4 transition-all': true,
                            'bg-surface-100 dark:bg-surface-900': selectedCategory === j,
                            'bg-surface-0 dark:bg-surface-950 hover:bg-surface-100 dark:hover:bg-surface-900': selectedCategory !== j,
                            'rounded-t-md': selectedCategory !== null && j === selectedCategory + 1,
                            'rounded-b-md': selectedCategory !== null && (j === selectedCategory - 1 || (j === (activeItem()?.subMenu?.length || 0) - 1 && j !== selectedCategory))
                          }"
                          (mouseenter)="selectedCategory = j"
                        >
                          <span class="w-10 h-10 rounded-md border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center">
                            <i [class]="subItem.icon" class="text-lg!"></i>
                          </span>
                          <span>
                            <h4 class="text-base font-medium leading-tight text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                            <span class="text-sm leading-tight text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                          </span>
                        </a>
                      </li>
                    }
                  </ul>
                  @if (activeItem()?.subMenu?.[selectedCategory || 0]?.categories) {
                    <div class="flex flex-col p-4 w-44">
                      <div class="text-base font-medium leading-tight text-surface-900 dark:text-surface-0">Categories</div>
                      <ul class="flex flex-col mt-4 gap-2.5">
                        @for (category of activeItem()?.subMenu?.[selectedCategory || 0]?.categories; track category.title; let k = $index) {
                          <li>
                            <a [href]="category.to" class="text-sm leading-tight text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-surface-0">{{ category.title }}</a>
                          </li>
                        }
                      </ul>
                    </div>
                  }
                </div>
              </div>
            }
          </ul>
          <div class="border-t border-surface-200 dark:border-surface-700 mt-4 lg:mt-0 lg:border-0">
            <div class="flex items-center justify-between lg:justify-center gap-6 px-8 lg:px-0 py-4">
              <button pButton [text]="true">
                <span pButtonLabel>Login</span>
              </button>
              <button pButton>
                <span pButtonLabel>Register</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export class __CLASS_NAME__ {
  hoveredItem = signal<NavItem | null>(null);
  selectedItem = signal<NavItem | null>(null);
  selectedCategory: number | null = 0;
  openSubMenus = signal<Set<string>>(new Set());
  openMobileMenus = signal<Set<number>>(new Set());

  activeItem = computed(() => this.hoveredItem() || this.selectedItem());

  navs: NavItem[] = [
    {
      label: 'Product',
      to: '',
    },
    {
      label: 'Corporate',
      subMenu: [
        {
          label: 'Features',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-list',
          to: '#',
          categories: [
            { title: 'Consectetur', to: '#' },
            { title: 'Donec', to: '#' },
            { title: 'Vestibulum', to: '#' },
            { title: 'Mauris', to: '#' },
            { title: 'Senectus', to: '#' },
            { title: 'Scelerisque', to: '#' },
            { title: 'Tempus', to: '#' },
          ],
        },
        {
          label: 'Solutions',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-shield',
          to: '#',
        },
        {
          label: 'Customers',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-users',
          to: '#',
          categories: [
            { title: 'Consectetur', to: '#' },
            { title: 'Donec', to: '#' },
            { title: 'Scelerisque', to: '#' },
            { title: 'Tempus', to: '#' },
          ],
        },
        {
          label: 'Integration',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-table',
          to: '#',
        },
      ],
    },
    {
      label: 'Resources',
      to: '',
    },
    {
      label: 'Pricing',
      to: '',
    },
  ];

  setActiveItem(item: NavItem): void {
    if (item?.subMenu) {
      this.hoveredItem.set(item);
      this.selectedItem.set(item);
    } else {
      this.hoveredItem.set(null);
      this.selectedItem.set(null);
    }
  }

  closeMenu(): void {
    this.hoveredItem.set(null);
    this.selectedItem.set(null);
  }

  toggleSubMenu(key: string): void {
    const currentSet = new Set(this.openSubMenus());
    if (currentSet.has(key)) {
      currentSet.delete(key);
    } else {
      currentSet.add(key);
    }
    this.openSubMenus.set(currentSet);
  }

  toggleMobileMenu(index: number): void {
    const currentSet = new Set(this.openMobileMenus());
    if (currentSet.has(index)) {
      currentSet.delete(index);
    } else {
      currentSet.add(index);
    }
    this.openMobileMenus.set(currentSet);
  }
}
