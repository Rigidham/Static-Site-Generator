import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 md:px-12 lg:px-20 py-20">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        <div class="w-full lg:w-1/2">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <div class="text-primary-500 dark:text-primary-400 text-xl leading-tight">All-in-One</div>
              <div class="text-surface-900 dark:text-surface-0 text-[2rem] leading-tight font-bold">Mobile Experience</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col shadow-sm border border-surface-100 dark:border-surface-800 rounded-lg">
                <div class="p-2 bg-surface-50 dark:bg-surface-900 rounded-t-lg border-b border-surface-100 dark:border-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Fully Managed</span>
                </div>
                <div class="p-2 leading-normal">
                  <p class="text-surface-500 dark:text-surface-400">Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
              </div>
              <div class="flex flex-col shadow-sm border border-surface-100 dark:border-surface-800 rounded-lg">
                <div class="p-2 bg-surface-50 dark:bg-surface-900 rounded-t-lg border-b border-surface-100 dark:border-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Fully Secure</span>
                </div>
                <div class="p-2 leading-normal">
                  <p class="text-surface-500 dark:text-surface-400">Eu turpis egestas pretium aenean pharetra.</p>
                </div>
              </div>
              <div class="flex flex-col shadow-sm border border-surface-100 dark:border-surface-800 rounded-lg">
                <div class="p-2 bg-surface-50 dark:bg-surface-900 rounded-t-lg border-b border-surface-100 dark:border-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Unlimited & Free</span>
                </div>
                <div class="p-2 leading-normal">
                  <p class="text-surface-500 dark:text-surface-400">Tortor dignissim convallis aenean et tortor at risus viverra.</p>
                </div>
              </div>
              <div class="flex flex-col shadow-sm border border-surface-100 dark:border-surface-800 rounded-lg">
                <div class="p-2 bg-surface-50 dark:bg-surface-900 rounded-t-lg border-b border-surface-100 dark:border-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Daily Spending</span>
                </div>
                <div class="p-2 leading-normal">
                  <p class="text-surface-500 dark:text-surface-400">Risus nec feugiat in fermentum posuere urna nec.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2">
          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/FeatureGrid.jpg" alt="Image" class="w-full rounded-3xl object-cover" />
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
