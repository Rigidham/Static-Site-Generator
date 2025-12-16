import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-surface-0 dark:bg-surface-950">
      <div class="max-w-3xl mx-auto px-6">
        <div class="bg-surface-900 text-surface-100 rounded-3xl p-8 shadow-2xl">
          <p class="text-sm uppercase tracking-widest text-primary-200 mb-4">Testimonial</p>
          <p class="text-2xl font-serif leading-relaxed">
            “Maxime laborum eveniet quidem possimus, amet praesentium illo adipisci ipsam similique.”
          </p>
          <div class="mt-6">
            <p class="font-semibold">Rae Chen</p>
            <p class="text-sm text-surface-300">Head of Experience, Lumen</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
