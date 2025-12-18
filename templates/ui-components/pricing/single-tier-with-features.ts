import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-6 md:p-12 lg:p-20">
      <div class="flex flex-col gap-12">
        <div class="w-full mb-10 flex flex-col gap-4">
          <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl lg:text-6xl leading-tight">Pricing</div>
          <div class="text-surface-600 dark:text-surface-400 text-lg lg:text-xl leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        </div>
        <div class="flex lg:flex-row flex-col items-start gap-10 lg:gap-6">
          <div class="flex-1 flex flex-col justify-center h-full gap-4">
            <div class="flex p-4 gap-4">
              <span class="w-11 h-11 inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-3xl">
                <i class="pi pi-users text-xl! leading-normal! text-primary-600 dark:text-primary-400"></i>
              </span>
              <div class="flex-1">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-lg lg:text-xl leading-tight mb-2">Unlimited Users</div>
                <span class="text-surface-600 dark:text-surface-400 leading-normal">
                  Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ornare massa eget egestas purus viverra accumsan.
                </span>
              </div>
            </div>
            <div class="flex p-4 gap-4">
              <span class="w-11 h-11 inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-3xl">
                <i class="pi pi-comments text-xl! leading-normal! text-primary-600 dark:text-primary-400"></i>
              </span>
              <div class="flex-1">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-lg lg:text-xl leading-tight mb-2">Unlimited Inbox</div>
                <span class="text-surface-600 dark:text-surface-400 leading-normal">
                  Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ornare massa eget egestas purus viverra accumsan.
                </span>
              </div>
            </div>
            <div class="flex p-4 gap-4">
              <span class="w-11 h-11 inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-3xl">
                <i class="pi pi-moon text-xl! leading-normal! text-primary-600 dark:text-primary-400"></i>
              </span>
              <div class="flex-1">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-lg lg:text-xl leading-tight mb-2">Dark Mode</div>
                <span class="text-surface-600 dark:text-surface-400 leading-normal">
                  Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ornare massa eget egestas purus viverra accumsan.
                </span>
              </div>
            </div>
          </div>
          <div class="flex-none w-full lg:w-1/2 bg-surface-0 dark:bg-surface-800 p-8 rounded-2xl shadow">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
              <div class="flex-1">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-xl lg:text-2xl leading-tight mb-2">Single Plan</div>
                <div class="text-surface-500 dark:text-surface-400 text-lg lg:text-xl leading-tight">Id diam vel quam elementum.</div>
              </div>
              <div class="flex items-center lg:justify-end gap-2">
                <span class="font-bold text-3xl lg:text-4xl text-surface-900 dark:text-surface-0 leading-tight">$9</span>
                <span class="text-surface-700 dark:text-surface-200 text-xl leading-tight">per month</span>
              </div>
            </div>
            <div class="my-8 h-px w-full bg-surface-200 dark:bg-surface-700"></div>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-lg lg:text-xl leading-tight">Features</div>
            <div class="flex flex-col md:flex-row mt-4">
              <ul class="list-none w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2">
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Arcu vitae elementum</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Imperdiet proin</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Dui faucibus in ornare</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Nisi scelerisque</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Morbi tincidunt augue</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Elit eget gravida</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Duis ultricies lacus sed</span>
                </li>
                <li class="flex items-center gap-2 py-1">
                  <i class="pi pi-check-circle text-primary-500 dark:text-primary-400"></i>
                  <span class="leading-tight text-surface-700 dark:text-surface-200">Viverra vitae congue eu</span>
                </li>
              </ul>
            </div>
            <div class="my-8 h-px w-full bg-surface-200 dark:bg-surface-700"></div>
            <button pButton class="w-full">
              <span pButtonLabel>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
