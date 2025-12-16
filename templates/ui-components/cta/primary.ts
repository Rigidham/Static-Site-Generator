import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-primary text-primary-contrast rounded-3xl px-8 py-12 max-w-5xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div>
          <p class="uppercase tracking-widest text-primary-200 text-xs mb-2">Ready</p>
          <h2 class="text-3xl font-semibold mb-2">Launch your next milestone</h2>
          <p class="text-primary-100/80 text-sm">
            Voluptatibus at nisi distinctio numquam quisquam consequuntur qui tempore.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-3 w-full lg:w-auto">
          <button pButton label="Get started" severity="contrast" class="w-full lg:w-auto"></button>
          <button pButton label="Talk to sales" [text]="true" class="w-full lg:w-auto text-primary-contrast!"></button>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
