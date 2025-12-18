import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-hidden bg-surface-0 dark:bg-surface-950 flex gap-8 flex-col lg:flex-row px-6 py-20 md:px-12 lg:px-20">
      <div class="relative overflow-hidden p-12 xl:p-20 flex lg:flex-row flex-col gap-8 bg-primary-950 w-full rounded-2xl lg:min-h-176">
        <svg
          width="784"
          height="338"
          viewBox="0 0 784 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute bottom-0 -left-60 w-full mix-blend-plus-lighter"
        >
          <g style="mix-blend-mode:plus-lighter" filter="url(#filter0_f)">
            <path
              d="M-42.6028 105.166L108.138 233.969C139.254 260.557 179.464 274.128 220.457 271.877L690.249 246.08"
              class="stroke-primary-800"
              stroke-width="33"
            />
          </g>
          <g style="mix-blend-mode:plus-lighter" filter="url(#filter1_f)">
            <path
              d="M-76.8425 153.518L73.8979 282.32C105.015 308.908 145.225 322.479 186.217 320.228L656.009 294.431"
              class="stroke-primary-800"
              stroke-width="33"
            />
          </g>
          <g style="mix-blend-mode:plus-lighter" filter="url(#filter2_f)">
            <path
              d="M-79.4968 201.451L71.2436 330.254C102.36 356.842 142.57 370.413 183.563 368.162L653.355 342.365"
              class="stroke-primary-800"
              stroke-width="33"
            />
          </g>
          <g style="mix-blend-mode:plus-lighter" filter="url(#filter3_f)">
            <path
              d="M-87.1516 249.385L63.5888 378.187C94.7057 404.776 134.915 418.347 175.908 416.096L645.7 390.298"
              class="stroke-primary-800"
              stroke-width="33"
            />
          </g>
          <defs>
            <filter id="filter0_f" x="-145.365" y="0.604492" width="928.434" height="380.009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="46" result="effect1_foregroundBlur" />
            </filter>
            <filter id="filter1_f" x="-147.605" y="80.9561" width="864.434" height="316.009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur" />
            </filter>
            <filter id="filter2_f" x="-150.259" y="128.89" width="864.434" height="316.009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur" />
            </filter>
            <filter id="filter3_f" x="-157.914" y="176.823" width="864.434" height="316.009" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </svg>

        <div class="flex flex-col gap-3 lg:flex-row w-full">
          <div class="xl:w-1/2 relative z-10 lg:min-h-[28.57rem]">
            <h2 class="text-4xl md:text-5xl font-bold text-surface-0 max-w-[85%] leading-tight">Now, It's Time to Take Action!</h2>
            <p class="mt-4 mb-6 text-xl leading-normal text-white/70 max-w-xl">
              Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
            </p>
            <div class="flex items-center gap-4 flex-col sm:flex-row w-full max-w-xl">
              <button class="text-surface-900 text-base font-medium px-6 py-3 bg-surface-0 rounded-full hover:bg-surface-200 ring-0 focus:ring-2 ring-transparent focus:ring-surface-0/40 transition-all sm:w-auto w-full cursor-pointer">
                Get Started
              </button>
              <button class="text-surface-0 text-base flex items-center gap-3 px-6 py-3 bg-transparent rounded-full border border-surface-0/25 hover:bg-surface-0/10 ring-0 focus:ring-2 ring-transparent focus:ring-surface-0/40 transition-all sm:w-auto w-full cursor-pointer">
                <span class="flex-1 font-medium">Learn More</span>
                <i class="pi pi-arrow-right text-base! leading-none!"></i>
              </button>
            </div>
          </div>
          <div class="lg:flex hidden lg:w-1/2 absolute -bottom-52 xl:bottom-12 -right-4 md:-right-16 xl:-right-48 h-[28.57rem] justify-end">
            <img
              class="max-w-none absolute -top-5 right-7 w-[22.86rem] sm:w-[42.86rem] xl:w-200"
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/block-14-grid.png"
              alt="Grid"
            />
            <img
              class="border border-surface-0/10 w-[22.86rem] sm:w-[42.86rem] xl:w-200 absolute top-0 -right-0 max-w-none rounded-lg"
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/block-13-image.jfif"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
