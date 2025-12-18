import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="rounded-2xl p-12 shadow flex flex-col md:flex-row md:items-center justify-between bg-linear-to-r from-primary-600 to-primary-500/50">
        <div class="pr-12 flex flex-col gap-4">
          <div class="text-primary-200 font-medium text-lg leading-tight">TAKE THE NEXT STEP</div>
          <div class="text-surface-0 font-medium text-4xl leading-tight">Empower your customer experience</div>
        </div>
        <div class="mt-6 md:mt-0 md:w-auto w-full">
          <button pButton severity="contrast" [rounded]="true" class="w-fit shrink-0">
            <span pButtonLabel>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
