import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative bg-surface-0 px-20 py-20 dark:bg-surface-950 overflow-hidden">
      <div class="max-w-[61.43rem] flex flex-col gap-4">
        <h3 class="text-5xl leading-tight font-bold text-surface-900 dark:text-surface-0">
          <span>One Product, </span>
          <span class="text-primary-600">Many Solutions</span>
        </h3>
        <p class="text-xl leading-normal text-surface-600 dark:text-surface-400">
          Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur. Auctor elit sed vulputate mi sit amet mauris commodo quis.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row gap-20 mt-14">
        <div class="flex-1">
          <div class="flex flex-col gap-6 mb-7">
            <div class="w-14 h-14 bg-primary-50 dark:bg-primary-400/30 rounded-xl border border-primary-100 dark:border-primary-400/40 flex items-center justify-center">
              <i class="pi pi-desktop text-2xl! text-primary-800 dark:text-primary-300"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="text-xl leading-tight font-semibold text-surface-900 dark:text-surface-0">Built for Developers</h5>
              <p class="text-base leading-normal text-surface-500 dark:text-surface-400">
                Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            @for (item of developerFeatures; track item; let index = $index) {
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full flex items-center justify-center p-0.5 bg-primary-50 dark:bg-primary-400/30">
                  <i class="pi pi-check text-base! text-primary-800 dark:text-primary-300"></i>
                </span>
                <p class="text-lg leading-tight text-surface-700 dark:text-surface-400 flex-1">{{ item }}</p>
              </div>
            }
          </div>
        </div>
        <div class="flex-1">
          <div class="flex flex-col gap-6 mb-7">
            <div class="w-14 h-14 bg-primary-50 dark:bg-primary-400/30 rounded-xl border border-primary-100 dark:border-primary-400/40 flex items-center justify-center">
              <i class="pi pi-lock text-2xl! text-primary-800 dark:text-primary-300"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="text-xl leading-tight font-semibold text-surface-900 dark:text-surface-0">End-to-End Encryption</h5>
              <p class="text-lg leading-normal text-surface-500 dark:text-surface-400">
                Convallis posuere morbi leo urna molestie at elementum. Faucibus et molestie ac feugiat sed lectus vestibulum.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            @for (item of encryptionFeatures; track item; let index = $index) {
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full flex items-center justify-center p-0.5 bg-primary-50 dark:bg-primary-400/30">
                  <i class="pi pi-check text-base! text-primary-800 dark:text-primary-300"></i>
                </span>
                <p class="text-lg leading-tight text-surface-700 dark:text-surface-400 flex-1">{{ item }}</p>
              </div>
            }
          </div>
        </div>
        <div class="flex-1">
          <div class="flex flex-col gap-6 mb-7">
            <div class="w-14 h-14 bg-primary-50 dark:bg-primary-400/30 rounded-xl border border-primary-100 dark:border-primary-400/40 flex items-center justify-center">
              <i class="pi pi-shield text-2xl! text-primary-800 dark:text-primary-300"></i>
            </div>
            <div class="flex flex-col gap-2">
              <h5 class="text-xl leading-tight font-semibold text-surface-900 dark:text-surface-0">Trusted Security</h5>
              <p class="text-lg leading-normal text-surface-500 dark:text-surface-400">
                Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel.
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            @for (item of securityFeatures; track item; let index = $index) {
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full flex items-center justify-center p-0.5 bg-primary-50 dark:bg-primary-400/30">
                  <i class="pi pi-check text-base! text-primary-800 dark:text-primary-300"></i>
                </span>
                <p class="text-lg leading-tight text-surface-700 dark:text-surface-400 flex-1">{{ item }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  developerFeatures = [
    'Ipsum dolor sit amet consectetur.',
    'Aenean sed adipiscing diam donec.',
    'Auctor elit sed vulputate mi sit.',
    'Faucibus et molestie ac feugiat sed.',
    'Orci a scelerisque purus semper eget.',
  ];

  encryptionFeatures = ['Non diam phasellus vestibulum lorem.', 'Magna eget est lorem ipsum dolor.', 'Leo vel fringilla est ullamcorper eget.', 'Placerat in egestas erat imperdiet.'];

  securityFeatures = ['Est lorem ipsum dolor sit amet.', 'Faucibus pulvinar elementum integer.', 'Neque convallis a cras semper auctor.'];
}
