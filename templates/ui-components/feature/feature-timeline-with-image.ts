import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 xl:px-20 py-20">
      <div class="flex flex-col-reverse md:flex-row gap-20 items-start">
        <div class="flex-1 flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Easy to Use</h2>
            <p class="text-surface-600 dark:text-surface-0/70 leading-tight">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
          </div>

          <div class="flex flex-col">
            <div class="flex gap-4 relative h-[100px]">
              <div class="flex flex-col items-center h-full">
                <div class="w-10 h-10 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-full flex items-center justify-center">
                  <i class="pi pi-image text-surface-600 dark:text-surface-0/70 text-xl!"></i>
                </div>
                <div class="flex-1 w-px bg-surface-200 dark:bg-surface-700"></div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-medium text-surface-900 dark:text-surface-0 leading-tight">Create a wireframe</div>
                <span class="leading-normal text-surface-500 dark:text-surface-400">
                  Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin. Eu mi bibendum neque egestas congue quisque egestas diam.
                </span>
              </div>
            </div>

            <div class="flex gap-4 relative h-[100px]">
              <div class="flex flex-col items-center h-full">
                <div class="w-10 h-10 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-full flex items-center justify-center">
                  <i class="pi pi-microchip-ai text-surface-600 dark:text-surface-0/70 text-xl!"></i>
                </div>
                <div class="flex-1 w-px bg-surface-200 dark:bg-surface-700"></div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-medium text-surface-900 dark:text-surface-0 leading-tight">Artificial Intelligence</div>
                <span class="leading-normal text-surface-500 dark:text-surface-400">
                  Erat pellentesque adipiscing commodo elit at imperdiet dui. Morbi tristique senectus et netus et malesuada fames.
                </span>
              </div>
            </div>

            <div class="flex gap-4 relative h-[100px]">
              <div class="flex flex-col items-center">
                <div class="w-10 h-10 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-full flex items-center justify-center">
                  <i class="pi pi-globe text-surface-600 dark:text-surface-0/70 text-xl!"></i>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <div class="font-medium text-surface-900 dark:text-surface-0 leading-tight">Deploy to Production</div>
                <span class="leading-normal text-surface-500 dark:text-surface-400">
                  Adipiscing at in tellus integer. Lorem donec massa sapien faucibus et molestie ac feugiat.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <img
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/featureImage-2.jpg"
            alt="Image"
            class="w-full rounded-xl object-cover dark:brightness-[0.76] dark:hue-rotate-35 dark:saturate-[1.8] dark:contrast-[1.4]"
          />
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
