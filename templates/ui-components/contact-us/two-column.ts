import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-50 dark:bg-surface-900 py-16">
      <div class="max-w-5xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
        <div>
          <p class="text-primary font-semibold uppercase tracking-widest">Contact</p>
          <h2 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 mb-4">
            Let’s start a conversation
          </h2>
          <p class="text-surface-600 dark:text-surface-300 mb-6">
            Quod temporibus aspernatur perferendis harum numquam doloremque incidunt omnis.
          </p>
          <div class="space-y-3 text-sm">
            <p class="font-semibold text-surface-900 dark:text-surface-0">hello@example.com</p>
            <p class="text-surface-600 dark:text-surface-300">(123) 456-7890</p>
            <p class="text-surface-600 dark:text-surface-300">123 Market Street, Suite 400</p>
          </div>
        </div>
        <form class="bg-surface-0 dark:bg-surface-950 rounded-2xl shadow-lg p-6 space-y-4">
          <input type="text" placeholder="Full name" class="w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-transparent px-4 py-3" />
          <input type="email" placeholder="Email" class="w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-transparent px-4 py-3" />
          <textarea rows="4" placeholder="How can we help?" class="w-full rounded-xl border border-surface-200 dark:border-surface-700 bg-transparent px-4 py-3"></textarea>
          <button pButton label="Send message" class="w-full"></button>
        </form>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
