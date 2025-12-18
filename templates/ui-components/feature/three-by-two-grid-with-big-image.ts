import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative bg-surface-0 px-20 py-20 dark:bg-surface-950 overflow-hidden">
      <div class="flex flex-col items-center">
        <div class="relative">
          <img
            class="w-full max-w-[83.43rem] md:h-[39.71rem] h-80 object-cover rounded-xl z-0"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/asset-circuit.jpg"
            alt="Feature image"
          />
          <div
            class="absolute w-[93.71rem] md:h-[59.86rem] h-[37.36rem] left-1/2 -translate-x-1/2 top-12 md:top-[12.71rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,var(--p-surface-0)_39.69%,var(--p-surface-0)_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,var(--p-surface-950)_39.69%,var(--p-surface-950)_100%)] z-10"
          ></div>
        </div>

        <div class="flex flex-col gap-12 z-20 w-full">
          <div class="flex flex-col items-center gap-4 max-w-[83.43rem] mx-auto text-center">
            <h2 class="text-5xl leading-tight font-bold text-surface-900 dark:text-surface-0">
              <span>One Product, </span>
              <span class="bg-linear-to-r from-[#7f030d] via-[#d2897f] to-[#206bac] bg-clip-text text-transparent">Many Solutions</span>
            </h2>
            <p class="text-xl leading-normal text-surface-600 dark:text-surface-400 max-w-5xl text-center">
              Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
            </p>
          </div>

          <div class="max-w-[83.43rem] mx-auto flex flex-col gap-6">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Built for Developers</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Easy to Use</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
              </div>
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">End-to-End Encryption</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
              </div>
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Fast & Global Support</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Open Source</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class="flex flex-col justify-center gap-2 bg-surface-0 dark:bg-surface-950 p-4 border-t border-surface">
                <h5 class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Trusted Security</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
