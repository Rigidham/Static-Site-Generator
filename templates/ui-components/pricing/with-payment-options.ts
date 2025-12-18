import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 p-6 md:p-12 lg:p-20">
      <div class="flex flex-col lg:flex-row items-start gap-10">
        <div class="w-full lg:w-1/2">
          <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl leading-tight mb-4">Pricing</div>
          <div class="text-surface-600 dark:text-surface-400 text-lg lg:text-xl leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        </div>
        <div class="w-full lg:w-1/2 flex flex-col md:flex-row">
          <div class="flex-1">
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Arcu vitae elementum</span>
            </div>
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Dui faucibus in ornare</span>
            </div>
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Morbi tincidunt augue</span>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Duis ultricies lacus sed</span>
            </div>
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Imperdiet proin</span>
            </div>
            <div class="flex items-center gap-2 p-2">
              <i class="pi pi-check text-base! leading-normal! text-primary-500"></i>
              <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Nisi scelerisque</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 mt-10">
        <div class="flex-1 bg-primary text-primary-contrast rounded-2xl p-4 px-5">
          <div class="text-xl font-medium leading-tight mb-7">Free Forever</div>
          <div class="text-4xl font-semibold leading-tight mb-7">Free</div>
          <button type="button" class="w-full rounded-md bg-surface-0 dark:bg-surface-900 text-primary hover:bg-surface-100 dark:hover:bg-surface-700 font-medium p-2 cursor-pointer">Create Account</button>
          <p class="text-sm leading-normal mt-4 text-primary-contrast/80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>
        <div class="flex-1 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 p-4 px-5">
          <div class="text-xl font-medium leading-tight text-surface-900 dark:text-surface-0 mb-7">Monthly</div>
          <div class="flex items-center gap-2 mb-7">
            <span class="text-4xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">$29</span>
            <span class="text-surface-600 dark:text-surface-400 leading-tight">per month</span>
          </div>
          <button pButton iconPos="right" class="w-full">
            <span pButtonLabel>Proceed Monthly</span>
            <i pButtonIcon class="pi pi-arrow-right"></i>
          </button>
          <p class="text-sm leading-normal mt-4 text-surface-600 dark:text-surface-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>
        <div class="flex-1 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 p-4 px-5">
          <div class="flex justify-between items-center mb-7">
            <div class="text-xl font-medium leading-tight text-surface-900 dark:text-surface-0">Yearly</div>
            <span class="bg-primary-100 dark:bg-primary-400/30 text-primary-700 dark:text-primary-100 font-semibold text-sm px-2 py-1 rounded-md">🎉 Save 20%</span>
          </div>
          <div class="flex items-center gap-2 mb-7">
            <span class="text-4xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">$275</span>
            <span class="text-surface-600 dark:text-surface-400 leading-tight">per year</span>
          </div>
          <button pButton iconPos="right" class="w-full">
            <span pButtonLabel>Proceed Yearly</span>
            <i pButtonIcon class="pi pi-arrow-right"></i>
          </button>
          <p class="text-sm leading-normal mt-4 text-surface-600 dark:text-surface-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
