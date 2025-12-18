import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, InputGroupModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full lg:w-6/12 p-4 pr-8 max-w-2xl flex flex-col gap-12">
          <div class="gap-6 flex flex-col">
            <span class="text-primary font-bold block uppercase leading-tight">SUPERCHARGE YOUR PRODUCT</span>
            <div class="font-bold text-surface-900 dark:text-surface-0 text-5xl leading-tight max-w-xl">Take Control of Your Marketing Strategy</div>
            <p class="mt-0 text-surface-600 dark:text-surface-400 leading-normal text-xl">
              Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. In ante metus dictum at tempor commodo ullamcorper a lacus.
            </p>
          </div>

          <p-inputgroup class="relative rounded-full max-w-full md:max-w-xl">
            <input pInputText type="text" placeholder="Email" class="bg-white/90 text-black/90 px-6! border-surface-200! dark:border-surface-700! rounded-full! py-4! pr-32!" [(ngModel)]="email" />
            <button pButton type="button" rounded class="absolute! z-10! h-[calc(100%-14px)]! top-1/2! -translate-y-1/2! right-3! rounded-full!">
              <span pButtonLabel>Join Now</span>
            </button>
          </p-inputgroup>
        </div>
        <div class="w-full lg:w-1/2 p-6 lg:p-16 lg:py-28 flex items-center justify-center bg-primary-50 dark:bg-primary-400/20 lg:mt-0 rounded-3xl h-full">
          <div class="relative w-full pb-[56.25%] h-0">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-2xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dTkwgK67ZJo?si=4fH9r2r9rHGaNaFn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  email = '';
}
