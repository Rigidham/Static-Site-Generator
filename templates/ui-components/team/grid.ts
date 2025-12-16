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
          <p class="text-primary font-semibold uppercase tracking-widest">Team</p>
          <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0">Meet the crew</h2>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="bg-surface-0 dark:bg-surface-950 rounded-2xl p-6 flex gap-4 items-center">
            <div class="h-16 w-16 rounded-full bg-surface-200 dark:bg-surface-800"></div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Kameron Drake</p>
              <p class="text-sm text-surface-500">Product Lead</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 rounded-2xl p-6 flex gap-4 items-center">
            <div class="h-16 w-16 rounded-full bg-surface-200 dark:bg-surface-800"></div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Valeria Nunez</p>
              <p class="text-sm text-surface-500">Design Director</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 rounded-2xl p-6 flex gap-4 items-center">
            <div class="h-16 w-16 rounded-full bg-surface-200 dark:bg-surface-800"></div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Owen Castillo</p>
              <p class="text-sm text-surface-500">Engineering</p>
            </div>
          </div>
          <div class="bg-surface-0 dark:bg-surface-950 rounded-2xl p-6 flex gap-4 items-center">
            <div class="h-16 w-16 rounded-full bg-surface-200 dark:bg-surface-800"></div>
            <div>
              <p class="font-semibold text-surface-900 dark:text-surface-0">Sophia Diaz</p>
              <p class="text-sm text-surface-500">Research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
