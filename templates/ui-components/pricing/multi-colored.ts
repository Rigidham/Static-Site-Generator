import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, ToggleSwitchModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-6 md:p-12 lg:p-20">
      <div class="flex flex-col gap-12 items-center justify-center">
        <div class="flex flex-col gap-6 items-center justify-center">
          <div class="flex flex-col gap-4 items-center justify-center">
            <div class="text-primary-500 dark:text-primary-400 text-xl lg:text-2xl text-center leading-tight">Save up to 25% today!</div>
            <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-5xl text-center leading-tight">Pricing Plans</div>
          </div>

          <div class="flex gap-4 items-center justify-center">
            <span [ngClass]="[checked ? 'text-surface-500 dark:text-surface-400' : 'font-medium text-surface-900 dark:text-surface-0']">Monthly</span>
            <p-toggleswitch [(ngModel)]="checked"></p-toggleswitch>
            <span [ngClass]="[!checked ? 'text-surface-500 dark:text-surface-400' : 'font-medium text-surface-900 dark:text-surface-0']">Yearly</span>
          </div>
        </div>

        <div class="mt-10 flex flex-col lg:flex-row justify-center gap-10 mx-auto">
          <div class="flex-1 w-full max-w-104 bg-surface-50 dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-800">
            <div class="px-6 pt-8 pb-4 border-b border-surface-200 dark:border-surface-700 text-center">
              <div class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight mb-2">Basic</div>
              <div class="flex items-center justify-center gap-2">
                <span class="text-4xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ !checked ? '$10' : '$100' }}</span>
                <span class="text-xl text-surface-500 dark:text-surface-400">/{{ checked ? 'year' : 'month' }}</span>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-6">
              <span class="text-lg text-surface-600 dark:text-surface-400 leading-normal">Subtitle of the plan maybe two lines even though lines of things.</span>
              <ul class="list-none p-0 m-0 flex flex-col gap-2">
                @for (feature of features; track feature) {
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-surface-500 dark:bg-surface-400"></span>
                    <span class="text-surface-700 dark:text-surface-200">{{ feature }}</span>
                  </li>
                }
              </ul>
              <button pButton class="w-full">
                <span pButtonLabel>Buy Now</span>
              </button>
            </div>
          </div>

          <div class="flex-1 w-full max-w-104 bg-surface-900 dark:bg-surface-800 rounded-2xl relative">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-contrast text-sm font-semibold px-2 py-1 rounded-3xl">MOST POPULAR</div>
            <div class="px-6 pt-8 pb-4 border-b border-surface-700 text-center">
              <div class="text-xl font-medium text-surface-0 leading-tight mb-2">Premium</div>
              <div class="flex items-center justify-center gap-2">
                <span class="text-4xl font-semibold text-surface-0 leading-tight">{{ !checked ? '$20' : '$200' }}</span>
                <span class="text-xl text-surface-400">/{{ checked ? 'year' : 'month' }}</span>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-6">
              <span class="text-lg text-surface-400 leading-normal">Subtitle of the plan maybe two lines even though lines of things.</span>
              <ul class="list-none p-0 m-0 flex flex-col gap-2">
                @for (feature of features; track feature) {
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-surface-400"></span>
                    <span class="text-surface-0">{{ feature }}</span>
                  </li>
                }
              </ul>
              <button pButton class="w-full">
                <span pButtonLabel>Buy Now</span>
              </button>
            </div>
          </div>

          <div class="flex-1 w-full max-w-104 bg-primary-800 dark:bg-primary-700 rounded-2xl">
            <div class="px-6 pt-8 pb-4 border-b border-primary-700/30 dark:border-primary-600 text-center">
              <div class="text-xl font-medium text-surface-0 leading-tight mb-2">Enterprise</div>
              <div class="flex items-center justify-center gap-2">
                <span class="text-4xl font-semibold text-surface-0 leading-tight">{{ !checked ? '$900' : '$9000' }}</span>
                <span class="text-xl text-primary-200">/{{ checked ? 'year' : 'month' }}</span>
              </div>
            </div>
            <div class="p-6 flex flex-col gap-6">
              <span class="text-lg text-primary-200 leading-normal">Subtitle of the plan maybe two lines even though lines of things.</span>
              <ul class="list-none p-0 m-0 flex flex-col gap-2">
                @for (feature of features; track feature) {
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-primary-200"></span>
                    <span class="text-surface-0">{{ feature }}</span>
                  </li>
                }
              </ul>
              <button pButton class="w-full">
                <span pButtonLabel>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  checked: boolean = false;
  features: string[] = ['Arcu vitae elementum', 'Dui faucibus in ornare', 'Morbi tincidunt augue', 'Duis ultricies lacus sed'];
}
