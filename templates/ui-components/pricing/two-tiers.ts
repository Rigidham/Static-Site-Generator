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
    <section class="bg-surface-50 dark:bg-surface-950 relative flex flex-col overflow-hidden justify-center items-center gap-12 px-6 py-20 md:px-12 lg:px-20">
      <header class="flex items-center justify-center flex-col gap-6 z-10">
        <div class="flex flex-col items-center justify-center gap-4">
          <h1 class="m-0 font-semibold text-base leading-tight text-primary-500 uppercase">PRICING</h1>
          <h2 class="m-0 font-bold text-3xl text-center leading-tight text-surface-900 dark:text-surface-0">Find your perfect plan</h2>
          <p class="text-lg text-center leading-tight text-surface-600 dark:text-surface-0/70 mt-0 mb-0">Fringilla ut morbi tincidunt augue interdum velit euismod. Non arcu risus quis varius quam.</p>
        </div>
        <div class="flex gap-2 items-center">
          <p-toggleswitch [(ngModel)]="checked"></p-toggleswitch>
          <label class="font-medium text-base leading-tight text-surface-900 dark:text-surface-0">Switch to Annual Plans</label>
        </div>
      </header>
      <div class="relative w-full">
        <div class="flex flex-col lg:flex-row z-10 relative justify-center gap-8 max-w-6xl mx-auto">
          <article class="p-6 bg-surface-0 flex-1 flex flex-col dark:bg-surface-800 rounded-2xl shadow-sm">
            <div class="flex lg:flex-row flex-col justify-between lg:items-center gap-4">
              <div class="flex-1">
                <h3 class="font-semibold text-lg text-surface-900 dark:text-surface-0 leading-tight">Started Plan</h3>
                <p class="mt-2 leading-tight text-surface-600 dark:text-surface-300">Scelerisque viverra mauris.</p>
              </div>
              <div class="flex items-baseline gap-2 whitespace-nowrap">
                <span class="font-semibold text-lg text-surface-900 dark:text-surface-0 leading-tight">
                  $<span class="text-3xl">{{ checked ? '423' : '20' }}</span>
                </span>
                <span class="text-base text-surface-600 dark:text-surface-300">per {{ checked ? 'year' : 'month' }}</span>
              </div>
            </div>
            <div class="h-px w-full my-6 bg-surface-200 dark:bg-surface-700"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-base text-surface-900 dark:text-surface-0 leading-tight">Started Plan Includes:</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Proin fermentum leo</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Faucibus vitae aliquet nec</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Ullamcorper morbi tincidunt</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Tristique senectus et netus</span>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Adipiscing enim eu turpis</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Elit sed vulputate mi sit</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-px w-full my-6 bg-surface-200 dark:bg-surface-700"></div>
            <button pButton class="px-3 py-2">
              <span pButtonLabel>Get Started</span>
            </button>
          </article>
          <article class="p-6 bg-surface-0 flex-1 flex flex-col dark:bg-surface-800 rounded-2xl shadow-sm">
            <div class="flex lg:flex-row flex-col justify-between lg:items-center gap-4">
              <div class="flex-1">
                <h3 class="font-semibold text-lg text-surface-900 dark:text-surface-0 leading-tight">Professional Plan</h3>
                <p class="mt-2 leading-tight text-surface-600 dark:text-surface-300">Eget mauris pharetra et ultrices.</p>
              </div>
              <div class="flex items-baseline gap-2 whitespace-nowrap">
                <span class="font-semibold text-lg text-surface-900 dark:text-surface-0 leading-tight">
                  $<span class="text-3xl">{{ checked ? '823' : '200' }}</span>
                </span>
                <span class="text-base text-surface-600 dark:text-surface-300">per {{ checked ? 'year' : 'month' }}</span>
              </div>
            </div>
            <div class="h-px w-full my-6 bg-surface-200 dark:bg-surface-700"></div>
            <div class="flex-1">
              <h3 class="font-semibold text-base text-surface-900 dark:text-surface-0 leading-tight">Professional Plan Includes:</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Proin fermentum leo</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Faucibus vitae aliquet nec</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Ullamcorper morbi tincidunt</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Tristique senectus et netus</span>
                  </div>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Adipiscing enim eu turpis</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Elit sed vulputate mi sit</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Velit ut tortor pretium</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="pi pi-check-circle text-lg! text-green-500"></i>
                    <span class="text-surface-600 dark:text-surface-300 leading-normal">Et netus et malesuada</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-px w-full my-6 bg-surface-200 dark:bg-surface-700"></div>
            <button pButton class="px-3 py-2">
              <span pButtonLabel>Get Started</span>
            </button>
          </article>
        </div>
        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rotate-[-30deg] lg:-rotate-6 w-[200%] z-0">
          <div class="h-24 lg:h-16 w-full bg-primary-500 dark:bg-primary-500/90"></div>
          <div class="h-24 lg:h-16 w-full bg-primary-300 dark:bg-primary-700/60"></div>
          <div class="h-24 lg:h-16 w-full bg-primary-100 dark:bg-primary-900/40"></div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  checked: boolean = false;
}
