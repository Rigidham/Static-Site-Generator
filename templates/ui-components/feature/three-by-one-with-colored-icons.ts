import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-linear-to-t from-primary-500/10 from-20% to-transparent">
      <div class="flex flex-col gap-11 pt-20">
        <div class="flex flex-col gap-2 pl-6 md:pl-12 lg:pl-20">
          <h3 class="text-primary-600 dark:text-primary-300 text-xl font-medium leading-tight">ALL-IN-ONE</h3>
          <h2 class="text-surface-900 dark:text-surface-0 text-3xl font-bold leading-tight">Focus on the work that matters</h2>
          <p class="text-surface-500 dark:text-surface-400 leading-tight">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
        </div>

        <div class="px-6 md:px-12 lg:px-20 pb-20 pt-11 flex flex-col md:flex-row gap-6">
          <div class="w-full md:w-1/3 shadow-sm p-5 bg-surface-0 dark:bg-surface-950 text-center rounded-3xl flex flex-col items-center gap-6">
            <div class="rounded-full bg-primary-50 dark:bg-primary-400/20 p-6 text-primary-600 dark:text-primary-200 inline-flex justify-center items-center">
              <i class="pi pi-heart text-4xl!"></i>
            </div>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Simpler Interface</div>
            <div class="text-surface-500 dark:text-surface-400 leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            <button pButton pRipple [text]="true" class="font-medium text-primary-500!">
              <span pButtonLabel>Learn More</span>
            </button>
          </div>
          <div class="w-full md:w-1/3 shadow-sm p-5 bg-surface-0 dark:bg-surface-950 text-center rounded-3xl flex flex-col items-center gap-6">
            <div class="rounded-full bg-primary-50 dark:bg-primary-400/20 p-6 text-primary-600 dark:text-primary-200 inline-flex justify-center items-center">
              <i class="pi pi-wifi text-4xl!"></i>
            </div>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Extensive Connectivity</div>
            <div class="text-surface-500 dark:text-surface-400 leading-normal">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
            <button pButton pRipple [text]="true" class="font-medium text-primary-500!">
              <span pButtonLabel>Learn More</span>
            </button>
          </div>
          <div class="w-full md:w-1/3 shadow-sm p-5 bg-surface-0 dark:bg-surface-950 text-center rounded-3xl flex flex-col items-center gap-6">
            <div class="rounded-full bg-primary-50 dark:bg-primary-400/20 p-6 text-primary-600 dark:text-primary-200 inline-flex justify-center items-center">
              <i class="pi pi-lock text-4xl!"></i>
            </div>
            <div class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">Magical Privacy</div>
            <div class="text-surface-500 dark:text-surface-400 leading-normal">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
            <button pButton pRipple [text]="true" class="font-medium text-primary-500!">
              <span pButtonLabel>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
