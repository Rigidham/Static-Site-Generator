import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex lg:flex-row flex-col-reverse items-center gap-8 bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950 overflow-hidden">
      <div class="flex-1 flex flex-col gap-4">
        <h3 class="text-surface-900 dark:text-surface-0 text-5xl font-semibold leading-tight">Data Transformation</h3>
        <p class="text-surface-600 dark:text-surface-400 text-lg leading-normal mb-12">
          Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur. Auctor elit sed vulputate mi sit amet mauris commodo quis. Pulvinar neque laoreet suspendisse interdum consectetur.
        </p>
        <div class="flex gap-10 items-start mb-14">
          <div class="flex-1 flex flex-col gap-2 items-start">
            <h5 class="text-surface-900 dark:text-surface-0 text-xl font-semibold leading-tight">Built for Developers</h5>
            <p class="text-surface-600 dark:text-surface-400 leading-normal mb-1">Auctor elit sed vulputate mi sit amet mauris commodo quis.</p>
            <a class="text-primary text-base leading-normal font-medium flex items-center gap-2 hover:text-primary-emphasis cursor-pointer py-2">
              <span class="flex-1">Learn More</span>
              <i class="pi pi-arrow-right"></i>
            </a>
          </div>
          <div class="flex-1 flex flex-col gap-2 items-start">
            <h5 class="text-surface-900 dark:text-surface-0 text-xl font-semibold leading-tight">Easy to Use</h5>
            <p class="text-surface-600 dark:text-surface-400 leading-normal mb-1">Convallis posuere morbi leo urna molestie at elementum.</p>
            <a class="text-primary text-base leading-normal font-medium flex items-center gap-2 hover:text-primary-emphasis cursor-pointer py-2">
              <span class="flex-1">Learn More</span>
              <i class="pi pi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 w-full h-104 lg:h-144 xl:h-114">
        <img class="w-full h-full object-cover rounded-xl" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/ipad.jpg" alt="Feature image" />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
