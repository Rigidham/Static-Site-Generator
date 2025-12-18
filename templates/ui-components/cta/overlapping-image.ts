import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 flex flex-col md:flex-row px-6 py-20 md:px-12 lg:px-20 items-center">
      <div class="relative w-full flex justify-center items-center">
        <img
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/cta-building.png"
          class="h-[28.57rem] rounded-2xl hidden md:block grayscale shadow-lg -rotate-3 z-10"
        />
        <div class="bg-primary-600 md:rounded-l-none rounded-3xl p-8 lg:p-12 relative -left-4">
          <img
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/cta-building.png"
            class="w-full h-[28.57rem] object-cover rounded-2xl block md:hidden mx-auto mb-8 grayscale"
          />
          <div class="md:pl-4 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <div class="text-primary-200 text-4xl font-semibold leading-tight">Supercharge your workflow</div>
              <p class="text-primary-50 mt-0 text-lg leading-normal">
                Dui vivamus arcu felis bibendum ut tristique et egestas. Eget mi proin sed libero enim sed. Blandit massa enim nec dui nunc mattis. Nisi lacus sed viverra tellus in hac habitasse platea. Accumsan tortor posuere ac ut consequat semper
                viverra nam.
              </p>
            </div>

            <button pButton type="button" severity="contrast" class="w-fit shrink-0">
              <span pButtonLabel>Start Free Trial</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
