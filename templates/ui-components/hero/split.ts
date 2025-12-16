import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 py-16">
      <div class="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <p class="text-primary font-semibold uppercase tracking-widest">New</p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-surface-900 dark:text-surface-0 mb-4">
            Build momentum faster
          </h1>
          <p class="text-lg text-surface-600 dark:text-surface-300 mb-6">
            Sint reiciendis, impedit adipisci nam itaque esse rem cum quam tenetur veniam.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <button pButton label="Launch project"></button>
            <button pButton label="See case study" [text]="true"></button>
          </div>
        </div>
        <div class="bg-gradient-to-br from-primary/10 to-surface-200 dark:from-primary/20 dark:to-surface-800 rounded-3xl p-1">
          <div class="bg-surface-0 dark:bg-surface-900 rounded-2xl p-6 h-full">
            <div class="aspect-video rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-500">
              Media placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
