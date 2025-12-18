import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="relative p-20 overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-full"
        style="
          background:
            radial-gradient(67.46% 67.46% at 50% 50%, color-mix(in srgb, var(--p-surface-950) 60%, transparent) 0%, rgba(0, 0, 0, 0) 100%),
            url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/heroWithImage-bg.jpg') lightgray 50% / cover no-repeat;
        "
      ></div>

      <div class="text-center my-12 relative">
        <div class="text-6xl text-white font-bold mb-1 leading-tight">The Platform For</div>
        <div class="text-6xl text-primary-400 font-bold mb-6 leading-tight">Today's Generation</div>
        <p class="mt-0 mb-6 leading-normal text-center mx-auto text-white max-w-2xl text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button pButton type="button">
          <span pButtonLabel>Learn More</span>
        </button>

        <p class="mt-6 mb-6 leading-normal text-white">Available for MacOS, Web and Google accounts only</p>
        <div class="flex justify-center items-center gap-8">
          <a href="https://www.apple.com" class="text-white">
            <i class="pi pi-apple text-4xl!"></i>
          </a>
          <a href="https://play.google.com" class="text-white">
            <i class="pi pi-android text-4xl!"></i>
          </a>
          <a href="https://www.facebook.com" class="text-white">
            <i class="pi pi-facebook text-4xl!"></i>
          </a>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
