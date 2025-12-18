import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20">
      <div class="flex flex-col lg:flex-row items-center gap-20">
        <div class="w-full lg:w-1/2">
          <img
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/featureImage.jpg"
            alt="Image"
            class="w-full rounded-3xl object-cover"
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col gap-8">
          <div class="flex flex-col gap-4">
            <div class="px-4 py-2 bg-primary-50 dark:bg-primary-400/30 rounded-full border border-primary-100 dark:border-primary-400 flex items-center gap-2 w-fit">
              <i class="pi pi-star-fill text-primary-700 dark:text-primary-200 text-base!"></i>
              <span class="text-primary-700 dark:text-primary-200 font-medium leading-normal">Open Source API</span>
            </div>
            <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-0 leading-normal">Redefine Possible</h2>
            <p class="text-lg text-surface-500 dark:text-surface-400 leading-normal">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4 p-2">
              <i class="pi pi-check-circle text-primary-500 dark:text-primary-400 text-xl!"></i>
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 dark:text-surface-0 font-medium leading-normal">Simple to Use</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-2">
              <i class="pi pi-check-circle text-primary-500 dark:text-primary-400 text-xl!"></i>
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 dark:text-surface-0 font-medium leading-normal">Personalized Design</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">Eu turpis egestas pretium aenean pharetra.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-2">
              <i class="pi pi-check-circle text-primary-500 dark:text-primary-400 text-xl!"></i>
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 dark:text-surface-0 font-medium leading-normal">Status Notifications</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">Tortor dignissim convallis aenean et tortor at risus viverra.</p>
              </div>
            </div>
            <div class="flex items-center gap-4 p-2">
              <i class="pi pi-check-circle text-primary-500 dark:text-primary-400 text-xl!"></i>
              <div class="flex flex-col gap-1">
                <h3 class="text-base text-surface-900 dark:text-surface-0 font-medium leading-normal">Interactive Templates</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">Risus nec feugiat in fermentum posuere urna nec.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
