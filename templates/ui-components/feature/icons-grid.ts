import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-surface-50 dark:bg-surface-900">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-10">
          <p class="text-primary font-semibold uppercase tracking-widest">Features</p>
          <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0">What makes us different</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="bg-surface-0 dark:bg-surface-950 p-6 rounded-2xl shadow-sm flex gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">⚡</div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Lightning-fast</p>
              <p class="text-sm text-surface-600 dark:text-surface-300">Architected for speed with zero guesswork.</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 p-6 rounded-2xl shadow-sm flex gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">🎯</div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Precise targeting</p>
              <p class="text-sm text-surface-600 dark:text-surface-300">Aligned to the right audience moments.</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 p-6 rounded-2xl shadow-sm flex gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">🤝</div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Trusted partner</p>
              <p class="text-sm text-surface-600 dark:text-surface-300">Transparent communication and decisions.</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 p-6 rounded-2xl shadow-sm flex gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl">📈</div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Compounding results</p>
              <p class="text-sm text-surface-600 dark:text-surface-300">Measurable lifts across every release.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
