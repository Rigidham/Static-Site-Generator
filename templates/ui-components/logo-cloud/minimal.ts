import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-surface-50 dark:bg-surface-900">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-center text-sm uppercase tracking-[0.3em] text-surface-500 mb-6">Trusted by teams like</p>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-surface-500 dark:text-surface-300 text-sm">
          <span>Nordic</span>
          <span>Pulse</span>
          <span>Gauge</span>
          <span>Atlas</span>
          <span>Linearity</span>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
