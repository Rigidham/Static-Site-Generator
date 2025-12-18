import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950">
      <div class="py-6 md:py-8 px-6 md:pl-20 md:pr-8 bg-surface-950 flex flex-col lg:flex-row items-center gap-6 lg:gap-0 lg:justify-between border border-surface-800">
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto">
          <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full lg:w-auto">
            <div class="flex items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="none">
                <path d="M21 0C9.40201 0 0 9.40201 0 21C11.598 21 21 11.598 21 0Z" class="fill-surface-0" />
                <path d="M21 42C32.598 42 42 32.598 42 21C30.402 21 21 30.402 21 42Z" class="fill-surface-0" />
                <path d="M21 0C32.598 0 42 9.40201 42 21C30.402 21 21 11.598 21 0Z" class="fill-surface-0" />
                <path d="M21 42C9.40201 42 -1.01393e-06 32.598 0 21C11.598 21 21 30.402 21 42Z" class="fill-surface-0" />
              </svg>
              <span class="text-surface-0 font-medium leading-tight">Wavelength</span>
            </div>
            <div class="hidden lg:block w-px h-8 bg-surface-800"></div>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8">
            @for (item of navLinks; track item) {
              <a class="flex items-center justify-center">
                <span class="text-surface-400 hover:text-surface-300 transition-colors cursor-pointer leading-tight">{{ item }}</span>
              </a>
            }
          </div>
        </div>
        <div class="flex items-center gap-4">
          @for (icon of socialIcons; track icon) {
            <a class="w-8 h-8 bg-surface-950 rounded-full border border-surface-700 flex items-center justify-center hover:border-surface-600 transition-colors cursor-pointer p-2">
              <i [ngClass]="['pi', 'pi-' + icon, 'text-surface-0']"></i>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  navLinks = ['Home', 'About', 'Product', 'Contact'];
  socialIcons = ['youtube', 'instagram', 'discord'];
}
