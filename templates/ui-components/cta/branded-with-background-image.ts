import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div
      class="relative lg:p-20 p-12 text-surface-0 dark:text-surface-900 overflow-hidden"
      style="
        background:
          linear-gradient(90deg, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.9) 68.93%),
          url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/cta-8.jpg') lightgray 20% / cover no-repeat;
      "
    >
      <div class="text-center relative">
        <div class="text-5xl mb-8 text-surface-0 flex justify-center flex-wrap">
          <div class="font-bold">Discover&nbsp;</div>
          Elegancy
        </div>
        <div class="text-xl text-surface-0/70 leading-normal text-center mx-auto mb-8 max-w-lg">
          Blandit massa enim nec dui nunc mattis. Nisi lacus sed viverра tellus in hac habitasse platea. Accumsan tortor posuere ac ut consequat semper viverра nam.
        </div>
        <div class="flex flex-wrap items-center justify-center gap-6">
          <button pButton [rounded]="true" [raised]="true">
            <span pButtonLabel>Learn More</span>
          </button>
          <button pButton [rounded]="true" [raised]="true" [outlined]="true">
            <span pButtonLabel>Live Demo</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
