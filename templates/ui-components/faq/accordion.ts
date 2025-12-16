import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-surface-0 dark:bg-surface-950">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-10">
          <p class="text-primary font-semibold uppercase tracking-widest">FAQ</p>
          <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0">Questions, answered</h2>
        </div>
        <div class="space-y-4">
          <details class="border border-surface-200 dark:border-surface-700 rounded-2xl px-6 py-4" open>
            <summary class="font-semibold cursor-pointer text-surface-900 dark:text-surface-0">How quickly can we start?</summary>
            <p class="mt-3 text-surface-600 dark:text-surface-300 text-sm">
              Perferendis, laborum. Consequatur ad cumque in, sequi incidunt quia optio commodi.
            </p>
          </details>
          <details class="border border-surface-200 dark:border-surface-700 rounded-2xl px-6 py-4">
            <summary class="font-semibold cursor-pointer text-surface-900 dark:text-surface-0">Do you handle strategy?</summary>
            <p class="mt-3 text-surface-600 dark:text-surface-300 text-sm">
              Quas aliquid natus, expedita cupiditate consequuntur, molestias sed voluptas officiis.
            </p>
          </details>
          <details class="border border-surface-200 dark:border-surface-700 rounded-2xl px-6 py-4">
            <summary class="font-semibold cursor-pointer text-surface-900 dark:text-surface-0">Can we add custom tooling?</summary>
            <p class="mt-3 text-surface-600 dark:text-surface-300 text-sm">
              Temporibus autem nulla, adipisci, officia, id exercitationem asperiores dolorem.
            </p>
          </details>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
