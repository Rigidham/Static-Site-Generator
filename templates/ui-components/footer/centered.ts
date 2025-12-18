import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 flex flex-col items-center gap-8">
      <div class="w-full">
        <div class="h-px w-full bg-surface-200 dark:bg-surface-700"></div>
      </div>

      <div class="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 42 42" fill="none">
          <path d="M21 0C9.40201 0 0 9.40201 0 21C11.598 21 21 11.598 21 0Z" class="fill-primary" />
          <path d="M21 42C32.598 42 42 32.598 42 21C30.402 21 21 30.402 21 42Z" class="fill-primary" />
          <path d="M21 0C32.598 0 42 9.40201 42 21C30.402 21 21 11.598 21 0Z" class="fill-primary" />
          <path d="M21 42C9.40201 42 -1.01393e-06 32.598 0 21C11.598 21 21 30.402 21 42Z" class="fill-primary" />
        </svg>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-y-4 gap-x-8 p-2">
        @for (item of links; track item) {
          <a class="text-surface-700 hover:text-surface-900 dark:text-surface-300 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
            {{ item }}
          </a>
        }
      </div>

      <div class="flex items-center justify-center gap-4">
        @for (icon of socialIcons; track icon) {
          <a
            class="w-[35px] h-[35px] bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 rounded-full border border-surface-50 dark:border-surface-800 transition-colors flex justify-center items-center p-2 cursor-pointer"
          >
            <i [ngClass]="['pi', 'pi-' + icon, 'text-surface-600', 'dark:text-surface-400']"></i>
          </a>
        }
      </div>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a class="text-sm leading-tight text-surface-500 hover:text-surface-900 dark:text-surface-300 dark:hover:text-surface-0 transition-colors cursor-pointer">Privacy Policy</a>
        <a class="text-sm leading-tight text-surface-500 hover:text-surface-900 dark:text-surface-300 dark:hover:text-surface-0 transition-colors cursor-pointer">Terms of Service</a>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  links = ['About Us', 'News', 'Investor Relations', 'Careers', 'Media Kit'];
  socialIcons = ['linkedin', 'instagram', 'github'];
}
