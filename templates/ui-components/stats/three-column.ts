import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-12 bg-surface-0 dark:bg-surface-950">
      <div class="max-w-4xl mx-auto px-6 grid gap-6 text-center md:grid-cols-3">
        <div>
          <p class="text-4xl font-semibold text-primary">98%</p>
          <p class="text-sm uppercase tracking-widest text-surface-500">Satisfaction</p>
        </div>
        <div>
          <p class="text-4xl font-semibold text-primary">24</p>
          <p class="text-sm uppercase tracking-widest text-surface-500">Launches</p>
        </div>
        <div>
          <p class="text-4xl font-semibold text-primary">4.9/5</p>
          <p class="text-sm uppercase tracking-widest text-surface-500">CSAT</p>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
