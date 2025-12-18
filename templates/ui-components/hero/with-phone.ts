import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20 overflow-hidden">
      <div class="flex flex-wrap">
        <article class="w-full mt-20 lg:mt-0 lg:mb-0 lg:w-8/12 flex flex-col order-1 lg:order-0 justify-center items-center lg:items-start">
          <span class="text-primary font-semibold text-lg mb-2 leading-normal">CATCH YOUR NOTIFICATIONS</span>
          <h2 class="font-bold text-4xl md:text-6xl mt-0 mb-6 leading-tight">
            Develop amazing <br />
            communication.
          </h2>
          <div class="flex gap-4">
            <button pButton type="button" class="z-20">
              <span pButtonLabel>Get Started</span>
              <i pButtonIcon class="pi pi-arrow-right"></i>
            </button>
            <button pButton type="button" outlined class="z-20">
              <span pButtonLabel>Documentation</span>
            </button>
          </div>
        </article>
        <div class="w-full lg:w-4/12 relative flex justify-center items-center bg-primary-50 dark:bg-primary/20 px-20 py-12 rounded-3xl">
          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-12.png" alt="Hero illustration" />

          <div class="absolute bottom-8 right-[50%] lg:right-[40%] xl:right-1/2 hidden sm:flex flex-col gap-4 z-20">
            <div class="flex items-center w-72 md:w-80 lg:w-96 rounded-xl gap-3 lg:gap-4 px-4 lg:px-6 py-3 lg:py-4 backdrop-blur-[20px] bg-white/50">
              <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-13.png" class="rounded-full" alt="Avatar" />
              <div class="flex flex-col justify-center w-full">
                <p class="m-0 font-semibold text-xs lg:text-sm line-height-2 text-black/60">OLYMPIA</p>
                <p class="m-0 font-medium text-xs lg:text-sm line-height-2 text-black/80">Your stocks <span class="text-indigo-500">getting up</span></p>
              </div>
              <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-14.png" class="rounded-full" alt="Avatar" />
            </div>

            <div class="flex items-center w-72 md:w-80 lg:w-96 rounded-xl gap-3 lg:gap-4 px-4 lg:px-6 py-3 lg:py-4 backdrop-blur-[20px] bg-white/50">
              <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-15.png" alt="Avatar" class="rounded-full" />
              <div class="flex flex-col justify-center w-full">
                <p class="m-0 font-semibold text-xs lg:text-sm line-height-2 text-black/60">OLYMPIA</p>
                <p class="m-0 font-medium text-xs lg:text-sm line-height-2 text-black/80">Anastasia sent you a message</p>
              </div>
            </div>

            <div class="flex items-center w-72 md:w-80 lg:w-96 rounded-xl gap-3 lg:gap-4 px-4 lg:px-6 py-3 lg:py-4 backdrop-blur-[20px] bg-white/50">
              <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-13.png" alt="Avatar" class="rounded-full" />
              <div class="flex flex-col justify-center w-full">
                <p class="m-0 font-semibold text-xs lg:text-sm line-height-2 text-black/60">OLYMPIA</p>
                <p class="m-0 font-medium text-xs lg:text-sm line-height-2 text-black/80">Your revenue <span class="text-red-500">getting low</span></p>
              </div>
              <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/hero-16.png" alt="Avatar" class="rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
