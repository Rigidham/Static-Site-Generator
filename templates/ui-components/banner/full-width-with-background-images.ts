import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pb-20 bg-surface-0 dark:bg-surface-950">
      <div class="py-4 bg-surface-950 w-full relative">
        <img
          class="absolute h-full w-auto hidden md:block md:-left-48 lg:left-0 inset-y-0"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/banner/banner-shapes.png"
          alt="Background Images"
        />
        <p class="text-center text-surface-0 px-4">This announcement bar can be used to inform vistors of something important.</p>
        <img
          class="absolute h-full w-auto hidden md:block md:-right-48 lg:right-0 inset-y-0 scale-x-[-1]"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/banner/banner-shapes.png"
          alt="Background Images"
        />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
