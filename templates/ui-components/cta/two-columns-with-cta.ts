import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex lg:flex-row flex-col gap-16 xl:gap-32 py-16 px-8 lg:p-8 xl:p-12 bg-primary-50 dark:bg-primary-800 rounded-2xl text-center lg:text-left">
        <div class="flex-1 flex flex-col justify-center">
          <h2 class="text-3xl block text-primary-900 dark:text-primary-50 font-bold mb-4 leading-tight">Get Deals and Updates</h2>
          <p class="block text-lg text-primary-600 dark:text-primary-400 font-medium mb-8 leading-normal">We promise for not sending spam emails. It'll only good emails.</p>
          <div class="bg-surface-0/90 dark:bg-surface-800/90 w-full border border-primary-100 dark:border-primary-700 rounded-full pl-4 py-2 pr-2 flex items-center gap-4">
            <input
              class="flex-1 w-full bg-transparent outline-hidden text-surface-900 dark:text-surface-0 placeholder:text-surface-600 dark:placeholder:text-surface-400 text-base border-none"
              placeholder="Email"
            />
            <button pButton [rounded]="true" class="w-fit shrink-0 px-3! py-2! text-base! font-medium!">
              <span pButtonLabel>Subscribe</span>
            </button>
          </div>
        </div>
        <div class="relative flex-1 rounded-3xl overflow-hidden bg-surface-900">
          <div class="relative z-20 p-8">
            <div class="text-primary-500 font-bold text-base mb-4 leading-tight">Exclusive Peak Club</div>
            <p class="text-surface-0 text-xl font-medium block mb-8 leading-normal">Join Exlusive Peak Club for free shipping, premium service and deals.</p>
            <button pButton [rounded]="true" class="w-fit shrink-0">
              <span pButtonLabel>Get Your Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
