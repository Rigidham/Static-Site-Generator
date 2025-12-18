import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section
      class="bg-center bg-cover bg-no-repeat z-10 [background:linear-gradient(color-mix(in_srgb,var(--p-primary-50)_60%,transparent),color-mix(in_srgb,var(--p-primary-50)_60%,transparent)),url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-sparkles.jpg')_bottom/cover_no-repeat] dark:[background:linear-gradient(color-mix(in_srgb,var(--p-primary-800)_80%,transparent),color-mix(in_srgb,var(--p-primary-900)_80%,transparent)),url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-sparkles.jpg')_bottom/cover_no-repeat]"
    >
      <div class="p-20 pb-0 flex flex-col items-center relative overflow-hidden">
        <div class="flex flex-col items-center z-20 gap-2">
          <span class="text-center font-semibold leading-normal text-primary-600 dark:text-primary-300">MULTIPLY YOUR DEVELOPMENT SPEED</span>
          <h3 class="text-center font-bold text-3xl md:text-5xl text-black/80 dark:text-white/80 mt-0 mb-6 leading-tight">
            Start your business with <br />
            <span class="bg-linear-to-r from-primary-700 to-primary-300 dark:from-primary-400 dark:to-primary-200 bg-clip-text text-transparent leading-tight">PrimeBlocks</span>
          </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-4">
          <button pButton type="button" rounded class="z-20">
            <span pButtonLabel>Get Started</span>
          </button>
          <button pButton type="button" rounded text class="z-20">
            <span pButtonLabel>Documentation</span>
          </button>
        </div>
        <div class="w-full grow flex items-start justify-center mt-12">
          <div class="overflow-hidden w-full aspect-720/395 max-w-[900px] rounded-t-3xl shadow-2xl border border-b-0 border-primary-100 dark:border-primary-400/30">
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-3d-light.jpg"
              alt="Hero product"
              class="block w-full h-full object-cover object-top rounded-t-3xl dark:hidden"
            />
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-3d-dark.jpg"
              alt="Hero product dark"
              class="hidden w-full h-full object-cover object-top rounded-t-3xl dark:block"
            />
          </div>
        </div>
        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-5.png" alt="Emoji" class="hidden xl:block absolute z-10 xl:z-30 top-[66%] left-[73.5%]" />
        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-6.png" alt="Emoji" class="hidden xl:block absolute z-10 xl:z-30 top-[70%] right-[77%]" />
        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-7.png" alt="Emoji" class="hidden xl:block absolute z-10 xl:z-30 top-[22%] left-[70%]" />
        <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-8.png" alt="Emoji" class="hidden xl:block absolute z-10 xl:z-30 top-[35%] left-[19%]" />
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
