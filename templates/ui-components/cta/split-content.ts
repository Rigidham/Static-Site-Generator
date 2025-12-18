import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col lg:flex-row items-center justify-between">
        <div class="text-center lg:text-left lg:pr-20">
          <div class="text-primary font-medium mb-4 text-lg leading-normal">TAKE THE NEXT STEP</div>
          <div class="text-surface-900 dark:text-surface-0 font-bold text-5xl mb-8 leading-tight">Get Started with PrimeBlocks</div>
          <span class="inline-flex items-center bg-primary-50 dark:bg-primary-500/20 px-3 py-2 mr-2 mb-2 lg:mb-0 border border-primary-200 dark:border-primary-700 rounded-full">
            <i class="pi pi-check text-base! leading-none! text-primary mr-2"></i>
            <span class="text-surface-700 dark:text-surface-200 font-medium text-base leading-normal">1 Month Free Trial</span>
          </span>
          <span class="inline-flex items-center bg-primary-50 dark:bg-primary-500/20 px-3 py-2 border border-primary-200 dark:border-primary-700 rounded-full">
            <i class="pi pi-check text-base! leading-none! text-primary mr-2"></i>
            <span class="text-surface-700 dark:text-surface-200 font-medium text-base leading-normal">No Credit Card Required</span>
          </span>
        </div>
        <div class="mt-8 lg:mt-0 flex flex-wrap lg:flex-nowrap gap-4">
          <button pButton [rounded]="true" class="px-3! py-2! text-base! font-medium! bg-primary! border-primary! hover:bg-primary-600! hover:border-primary-600!">
            <span pButtonLabel>Get Started</span>
          </button>
          <button pButton [rounded]="true" [outlined]="true">
            <span pButtonLabel>Request a Demo</span>
            <i pButtonIcon class="pi pi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
