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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-surface-200 dark:border-surface-700">
        <div>
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-normal mb-5">Company</div>
          <div class="flex flex-col gap-4">
            @for (item of companyLinks; track item) {
              <a class="text-surface-600 dark:text-surface-400 block cursor-pointer leading-tight">{{ item }}</a>
            }
          </div>
        </div>
        <div>
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-normal mb-5">Resources</div>
          <div class="flex flex-col gap-4">
            @for (item of resourceLinks; track item) {
              <a class="text-surface-600 dark:text-surface-400 block cursor-pointer leading-tight">{{ item }}</a>
            }
          </div>
        </div>
        <div>
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-normal mb-5">Community</div>
          <div class="flex flex-col gap-4">
            @for (item of communityLinks; track item) {
              <a class="text-surface-600 dark:text-surface-400 block cursor-pointer leading-tight">{{ item }}</a>
            }
          </div>
        </div>
        <div class="sm:col-span-2 lg:col-span-1">
          <div class="text-surface-600 dark:text-surface-400 leading-normal mb-4">Join our community to get weekly updates and unique gifts every Friday.</div>
          <div class="flex flex-col gap-4">
            <input pInputText [(ngModel)]="email" placeholder="Email" class="px-3! py-2! ! leading-tight! border-slate-300! dark:border-surface-600!" />
            <button pButton class="w-full sm:w-fit" severity="contrast">
              <span pButtonLabel>Join Now</span>
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 mt-12">
        <div class="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="none">
            <path d="M21 0C9.40201 0 0 9.40201 0 21C11.598 21 21 11.598 21 0Z" class="fill-surface-900 dark:fill-surface-0" />
            <path d="M21 42C32.598 42 42 32.598 42 21C30.402 21 21 30.402 21 42Z" class="fill-surface-900 dark:fill-surface-0" />
            <path d="M21 0C32.598 0 42 9.40201 42 21C30.402 21 21 11.598 21 0Z" class="fill-surface-900 dark:fill-surface-0" />
            <path d="M21 42C9.40201 42 -1.01393e-06 32.598 0 21C11.598 21 21 30.402 21 42Z" class="fill-surface-900 dark:fill-surface-0" />
          </svg>
          <span class="text-surface-900 dark:text-surface-0 text-lg leading-tight font-semibold">AlphaHex</span>
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          @for (item of legalLinks; track item) {
            <a class="text-surface-600 dark:text-surface-400 cursor-pointer leading-tight">{{ item }}</a>
          }
        </div>
        <div class="flex items-center gap-6">
          @for (icon of socialIcons; track icon) {
            <div class="w-6 h-6 flex items-center justify-center">
              <i [ngClass]="['pi', 'pi-' + icon, 'text-surface-500', 'dark:text-surface-400', 'cursor-pointer']"></i>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  email = '';
  companyLinks = ['About Us', 'News', 'Investor Relations', 'Careers', 'Media Kit'];
  resourceLinks = ['Get Started', 'Learn', 'Case Studies'];
  communityLinks = ['Discord', 'Events', 'FAQ', 'Blog'];
  legalLinks = ['Brand Policy', 'Privacy Policy', 'Terms of Service'];
  socialIcons = ['twitter', 'facebook', 'github'];
}
