import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="py-16 bg-surface-50 dark:bg-surface-900">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-primary font-semibold uppercase tracking-widest">Pricing</p>
        <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-10">Pick the plan that fits</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="bg-surface-0 dark:bg-surface-950 rounded-3xl p-8 border border-surface-200 dark:border-surface-700 shadow-sm">
            <p class="text-sm uppercase tracking-widest text-primary mb-3">Starter</p>
            <h3 class="text-4xl font-bold mb-4">$800</h3>
            <ul class="text-left space-y-2 text-surface-600 dark:text-surface-300 text-sm mb-6">
              <li>Up to 5 screens</li>
              <li>1 design iteration</li>
              <li>Email support</li>
            </ul>
            <button pButton label="Choose starter" class="w-full"></button>
          </div>
          <div class="bg-primary text-primary-contrast rounded-3xl p-8 border border-primary shadow-xl">
            <p class="text-sm uppercase tracking-widest text-primary-200 mb-3">Growth</p>
            <h3 class="text-4xl font-bold mb-4">$2,400</h3>
            <ul class="text-left space-y-2 text-primary-100 text-sm mb-6">
              <li>Unlimited screens</li>
              <li>Priority delivery</li>
              <li>Dedicated PM</li>
            </ul>
            <button pButton label="Choose growth" severity="contrast" class="w-full"></button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
