import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-surface-900">
      <div class="max-w-3xl mx-auto px-6">
        <div class="bg-surface-0 text-surface-900 rounded-3xl p-8 shadow-xl">
          <p class="text-primary font-semibold uppercase tracking-widest">Newsletter</p>
          <h2 class="text-3xl font-semibold mb-2">Stay in the loop</h2>
          <p class="text-surface-500 mb-6">Monthly dispatch with playbooks, updates, and practical tactics.</p>
          <div class="flex flex-col md:flex-row gap-3">
            <input type="email" placeholder="Email" class="flex-1 rounded-2xl border border-surface-200 px-4 py-3" />
            <button class="rounded-2xl bg-primary text-primary-contrast px-6 py-3 font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
