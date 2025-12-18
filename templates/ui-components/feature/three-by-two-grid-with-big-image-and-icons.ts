import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950 overflow-hidden">
      <div class="flex flex-col items-center gap-4 mb-12">
        <h2 class="text-5xl leading-tight font-bold text-surface-900 dark:text-surface-0 text-center">One Product, Many Solutions</h2>
        <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 text-center max-w-[59.71rem]">
          Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
        </p>
      </div>
      <div class="relative flex flex-col items-center justify-end">
        <div class="relative z-0">
          <img
            class="block dark:hidden w-full max-w-[83.43rem] lg:h-208 object-cover rounded-2xl border border-surface-100 dark:border-surface-800 z-0"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/mail.jpg"
            alt="Feature image light"
          />
          <img
            class="hidden dark:block w-full max-w-[83.43rem] lg:h-208 object-cover rounded-2xl border border-surface-100 dark:border-surface-800 z-0"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/mail-dark.jpg"
            alt="Feature image dark"
          />
          <div class="w-full h-64 absolute bottom-0 bg-linear-to-t from-surface-0 via-surface-0/60 to-transparent dark:from-surface-950 dark:via-surface-950/60 z-10"></div>
        </div>

        <div class="flex flex-col gap-6 z-20 w-full max-w-[83.43rem]">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-microchip text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">Built for Developers</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-thumbs-up text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">Easy to Use</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
              </div>
            </div>
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-lock text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">End-to-End Encryption</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
              </div>
            </div>
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-globe text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">Fast & Global Support</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-github text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">Open Source</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div class="flex gap-4 bg-surface-0 dark:bg-surface-950 p-4 rounded-md">
              <i class="pi pi-shield text-xl! leading-normal! text-primary-500"></i>
              <div class="flex flex-col gap-2">
                <h5 class="text-lg leading-tight font-medium text-surface-900 dark:text-surface-0">Trusted Security</h5>
                <p class="text-base leading-normal text-surface-600 dark:text-surface-400">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
