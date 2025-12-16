import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 py-16">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-10">
          <p class="text-primary font-semibold uppercase tracking-widest">Blog</p>
          <h2 class="text-3xl lg:text-4xl font-semibold text-surface-900 dark:text-surface-0">
            Latest thinking from our team
          </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-3">
          <article class="border border-surface-200 dark:border-surface-700 rounded-2xl p-6 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-primary mb-2">Strategy</p>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-3">
              Building cohesive product narratives
            </h3>
            <p class="text-surface-600 dark:text-surface-300 text-sm">
              Voluptates esse, fugit placeat aliquam alias eveniet quisquam amet sit minima.
            </p>
          </article>
          <article class="border border-surface-200 dark:border-surface-700 rounded-2xl p-6 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-primary mb-2">Playbooks</p>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-3">
              Standing up a high-trust process
            </h3>
            <p class="text-surface-600 dark:text-surface-300 text-sm">
              Laboriosam dolores dolorem iste eos possimus asperiores voluptatibus culpa.
            </p>
          </article>
          <article class="border border-surface-200 dark:border-surface-700 rounded-2xl p-6 shadow-sm">
            <p class="text-xs uppercase tracking-widest text-primary mb-2">Culture</p>
            <h3 class="text-xl font-semibold text-surface-900 dark:text-surface-0 mb-3">
              Momentum from small, consistent bets
            </h3>
            <p class="text-surface-600 dark:text-surface-300 text-sm">
              Repellendus veritatis, quibusdam incidunt nemo in distinctio quibusdam suscipit.
            </p>
          </article>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
