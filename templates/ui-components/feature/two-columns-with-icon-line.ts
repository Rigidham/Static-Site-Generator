import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 flex lg:flex-row flex-col gap-12 justify-center items-center">
      <div class="flex-1">
        <h2 class="text-5xl leading-tight font-bold flex flex-col mb-4">
          <span class="text-surface-900 dark:text-surface-0">One Product, </span>
          <span class="text-primary-600">Many Solutions</span>
        </h2>
        <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 mb-8 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementun.
        </p>
        <button pButton outlined>
          <span pButtonLabel>Learn More</span>
        </button>
      </div>
      <div class="flex-1 flex flex-col">
        <div class="flex gap-6">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl border border-surface-200 dark:border-surface-700">
              <span><i class="pi pi-desktop text-base! leading-none! text-primary"></i></span>
            </div>
            <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          </div>
          <div>
            <h5 class="text-lg leading-tight font-semibold mb-2 text-surface-900 dark:text-surface-200">Built for Developers</h5>
            <p class="leading-normal text-sm text-surface-600 dark:text-surface-400 max-w-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center w-14 h-14">
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          <div class="w-3 h-3 border border-surface-200 rounded-sm dark:border-surface-700"></div>
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl border border-surface-200 dark:border-surface-700">
              <span><i class="pi pi-lock text-base! leading-none! text-primary"></i></span>
            </div>
            <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          </div>
          <div>
            <h5 class="text-lg leading-tight font-semibold mb-2 text-surface-900 dark:text-surface-200">End-to-End Encryption</h5>
            <p class="leading-normal text-sm text-surface-600 dark:text-surface-400 max-w-lg">
              Sagittis orci a scelerisque purus semper eget. Nascetur ridiculus mus mauris vitae ultricies.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center w-14 h-14">
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          <div class="w-3 h-3 border border-surface-200 rounded-sm dark:border-surface-700"></div>
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl border border-surface-200 dark:border-surface-700">
              <span><i class="pi pi-thumbs-up text-base! leading-none! text-primary"></i></span>
            </div>
            <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          </div>
          <div>
            <h5 class="text-lg leading-tight font-semibold mb-2 text-surface-900 dark:text-surface-200">Easy to Use</h5>
            <p class="leading-normal text-sm text-surface-600 dark:text-surface-400 max-w-lg">
              Et odio pellentesque diam volutpat. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center w-14 h-14">
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
          <div class="w-3 h-3 border border-surface-200 rounded-sm dark:border-surface-700"></div>
          <div class="w-px flex-1 bg-surface-200 dark:bg-surface-700"></div>
        </div>
        <div class="flex gap-6">
          <div class="flex flex-col items-center">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl border border-surface-200 dark:border-surface-700">
              <span><i class="pi pi-shield text-base! leading-none! text-primary"></i></span>
            </div>
          </div>
          <div>
            <h5 class="text-lg leading-tight font-semibold mb-2 text-surface-900 dark:text-surface-200">Trusted Security</h5>
            <p class="leading-normal text-sm text-surface-600 dark:text-surface-400 max-w-lg">
              Velit laoreet id donec ultrices tincidunt arcu non. Eleifend quam adipiscing vitae proin sagittis nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
