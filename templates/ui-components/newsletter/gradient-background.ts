import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="py-12 px-4 md:px-6 rounded-xl bg-linear-to-t from-primary-600 to-primary-500 shadow-lg text-center">
        <div class="flex flex-col items-center justify-center gap-4">
          <div class="text-surface-0 font-bold text-2xl lg:text-4xl leading-tight">Stay in touch with us</div>
          <span class="block text-primary-100 font-medium text-lg lg:text-xl leading-normal">
            Subscribe for updates to ensure that you don't miss any important news from us.
          </span>
        </div>
        <div
          class="mt-8 mb-4 relative sm:w-80 mx-auto rounded-full gap-1 pr-1 pl-2 py-1 bg-primary-600 flex items-center justify-between shadow-inner border border-primary-500"
        >
          <input
            pInputText
            [(ngModel)]="email"
            type="text"
            placeholder="Enter your email"
            class="flex-1 w-full h-full bg-transparent! outline-hidden! ring-0! border-0! focus:ring-0! text-primary-50! placeholder:text-primary-100! shadow-none!"
          />
          <button pButton [rounded]="true" class="px-5! text-primary-50!">
            <span pButtonLabel>Join</span>
          </button>
        </div>
        <span class="text-primary-100 flex items-center gap-1 w-full justify-center">
          <span class="leading-normal">We ensure to protect your privacy.</span>
          <a class="cursor-pointer text-primary-0 dark:text-primary-900 hover:underline leading-normal">Privacy Policy</a>
        </span>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  email: string = '';
}
