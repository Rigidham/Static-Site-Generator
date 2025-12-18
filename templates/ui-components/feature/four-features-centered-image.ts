import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950">
      <div class="flex flex-col items-center gap-4 mb-16">
        <h3 class="text-5xl leading-tight font-bold text-surface-900 dark:text-surface-0 text-center">
          <span>One Product, </span>
          <span class="text-primary-600">Many Solutions</span>
        </h3>
        <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 text-center max-w-[61.43rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer.
        </p>
      </div>
      <div class="flex flex-col gap-16">
        <div class="flex flex-col md:flex-row gap-16">
          <div class="flex flex-col justify-between flex-1 items-center md:items-end">
            <div class="w-full md:max-w-md rounded-xl flex flex-col items-center md:items-end gap-8 p-4 pl-0">
              <div class="flex items-center justify-center">
                <i class="pi pi-microchip text-2xl! text-primary-500"></i>
              </div>
              <div class="flex flex-col items-center md:items-end gap-3 w-full">
                <h5 class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0 text-center md:text-right">Built for Developers</h5>
                <p class="text-base leading-normal text-surface-500 dark:text-surface-400 text-center md:text-right">
                  Gravida arcu ac tortor dignissim convallis aenean et tortor. Quisque id diam vel quam elementum pulvinar etiam non quam.
                </p>
              </div>
            </div>
            <div class="w-full md:max-w-md rounded-xl flex flex-col items-center md:items-end gap-8 p-4 pl-0">
              <div class="flex items-center justify-center">
                <i class="pi pi-lock text-2xl! text-primary-500"></i>
              </div>
              <div class="flex flex-col items-center md:items-end gap-3 w-full">
                <h5 class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0 text-center md:text-right">End-to-End Encryption</h5>
                <p class="text-base leading-normal text-surface-500 dark:text-surface-400 text-center md:text-right">
                  Turpis tincidunt id aliquet risus feugiat. Elit ut aliquam purus sit. Mi bibendum neque egestas congue.
                </p>
              </div>
            </div>
          </div>

          <div class="hidden @[1024px]:block w-3/12 h-[28.29rem] shrink-0">
            <img
              class="w-full h-full object-cover rounded-xl"
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/middle-column.jpg"
              alt="Feature image"
            />
          </div>

          <div class="flex flex-col justify-between flex-1 items-center md:items-start">
            <div class="w-full md:max-w-md rounded-xl flex flex-col items-center md:items-start gap-8 p-4 pl-0">
              <div class="flex items-center justify-center">
                <i class="pi pi-thumbs-up text-2xl! text-primary-500"></i>
              </div>
              <div class="flex flex-col items-center md:items-start gap-3 w-full">
                <h5 class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0 text-center md:text-left">Easy to Use</h5>
                <p class="text-base leading-normal text-surface-500 dark:text-surface-400 text-center md:text-left">
                  Neque volutpat ac tincidunt vitae semper quis lectus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.
                </p>
              </div>
            </div>
            <div class="w-full md:max-w-md rounded-xl flex flex-col items-center md:items-start gap-8 p-4 pl-0">
              <div class="flex items-center justify-center">
                <i class="pi pi-shield text-2xl! text-primary-500"></i>
              </div>
              <div class="flex flex-col items-center md:items-start gap-3 w-full">
                <h5 class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0 text-center md:text-left">Trusted Security</h5>
                <p class="text-base leading-normal text-surface-500 dark:text-surface-400 text-center md:text-left">
                  Ut pharetra sit amet aliquam id diam maecenas. Semper viverra nam libero justo laoreet sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="@[1024px]:hidden w-full md:w-[26.57rem] h-[28.29rem] mx-auto">
          <img
            class="w-full h-full object-cover rounded-xl"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/middle-column.jpg"
            alt="Feature image"
          />
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
