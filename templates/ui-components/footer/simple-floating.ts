import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="p-10 lg:p-12 bg-surface-0 dark:bg-surface-800 shadow-md border border-surface-100 dark:border-surface-800 rounded-4xl">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-0 gap-8">
          <div class="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 42 42" fill="none">
              <path d="M21 0C9.40201 0 0 9.40201 0 21C11.598 21 21 11.598 21 0Z" class="fill-surface-900 dark:fill-surface-0" />
              <path d="M21 42C32.598 42 42 32.598 42 21C30.402 21 21 30.402 21 42Z" class="fill-surface-900 dark:fill-surface-0" />
              <path d="M21 0C32.598 0 42 9.40201 42 21C30.402 21 21 11.598 21 0Z" class="fill-surface-900 dark:fill-surface-0" />
              <path d="M21 42C9.40201 42 -1.01393e-06 32.598 0 21C11.598 21 21 30.402 21 42Z" class="fill-surface-900 dark:fill-surface-0" />
            </svg>
            <span class="text-surface-900 dark:text-surface-0 text-lg font-semibold leading-tight">Streamlinz</span>
          </div>
          <div>
            <ul class="flex flex-col md:flex-row md:items-center gap-8">
              @for (item of navLinks; track item) {
                <li>
                  <a class="text-surface-900 dark:text-surface-0 hover:text-surface-700 dark:hover:text-surface-400 transition-colors cursor-pointer text-lg font-medium leading-tight">{{ item }}</a>
                </li>
              }
            </ul>
          </div>
        </div>
        <div class="h-px my-10 md:my-12 w-full bg-surface-100 dark:bg-surface-700"></div>
        <div class="flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-6">
          <div class="flex-1 text-surface-600 dark:text-surface-400 leading-tight">All rights reserved</div>
          <div class="flex-1 flex items-center md:justify-end gap-4">
            @for (icon of socialIcons; track icon) {
              <a class="w-9 h-9 flex items-center justify-center border border-surface-100 dark:border-surface-800 rounded-full hover:bg-surface-50 dark:hover:bg-surface-800 transition-colors cursor-pointer">
                <i [ngClass]="['pi', 'pi-' + icon, 'text-surface-700', 'dark:text-surface-0']"></i>
              </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  navLinks = ['Home', 'About', 'Product', 'Contact'];
  socialIcons = ['discord', 'twitter', 'youtube'];
}
