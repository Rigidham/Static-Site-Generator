import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-6 md:p-12 lg:p-20">
      <div class="relative rounded-4xl overflow-hidden min-h-136 flex flex-col justify-end">
        <div
          class="absolute inset-0"
          style="
            background:
              linear-gradient(79deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 58.1%),
              linear-gradient(0deg, color-mix(in srgb, var(--p-primary-color), transparent 30%) 0%, color-mix(in srgb, var(--p-primary-color), transparent 30%) 100%),
              url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/testimonial/testimonials-bg.jpg') lightgray 50% / cover no-repeat;
            background-blend-mode: normal, multiply, normal;
          "
        ></div>

        <div class="relative flex flex-col justify-end h-full gap-8 p-8 lg:p-14">
          <div class="flex items-center gap-4">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6502_3013)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.0001 10.5168C22.9165 10.4609 22.832 10.4065 22.7468 10.3536C20.4007 8.89712 18 6.76142 18 4V0C21.56 0 25.0402 1.05568 28.0003 3.03355C30.9604 5.01141 33.2674 7.82263 34.6298 11.1117C35.9922 14.4007 36.3487 18.02 35.6541 21.5116C34.9596 25.0033 33.2453 28.2106 30.7279 30.7279C28.2106 33.2453 25.0033 34.9596 21.5116 35.6541C18.02 36.3487 14.4007 35.9922 11.1117 34.6298C7.82263 33.2674 5.01141 30.9604 3.03355 28.0003C1.05568 25.0402 0 21.56 0 18H4C6.76142 18 8.89712 20.4007 10.3536 22.7468C10.4065 22.832 10.4609 22.9165 10.5168 23.0001C11.5057 24.4802 12.9113 25.6337 14.5559 26.3149C16.2004 26.9961 18.01 27.1743 19.7558 26.827C21.5016 26.4798 23.1052 25.6226 24.364 24.364C25.6226 23.1052 26.4798 21.5016 26.827 19.7558C27.1743 18.01 26.9961 16.2004 26.3149 14.5559C25.6337 12.9113 24.4802 11.5057 23.0001 10.5168Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 3.465e-06C9.44771 3.70421e-06 9.00574 0.449075 8.9445 0.997954C8.85086 1.83725 8.63936 2.66087 8.31492 3.44415C7.86262 4.53608 7.19969 5.52824 6.36396 6.36397C5.52824 7.1997 4.53609 7.86263 3.44415 8.31492C2.66087 8.63937 1.83724 8.85086 0.997951 8.9445C0.449072 9.00574 3.73829e-07 9.44772 3.49688e-07 10L0 18C2.36379 18 4.70444 17.5344 6.88831 16.6298C9.07218 15.7253 11.0565 14.3994 12.7279 12.7279C14.3994 11.0565 15.7252 9.07218 16.6298 6.88831C17.5344 4.70444 18 2.36379 18 0L10 3.465e-06Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_6502_3013">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span class="text-lg font-semibold text-white">BriteMank</span>
          </div>

          <p class="text-2xl lg:text-3xl text-white leading-normal">"Very easy to use. I made back the purchase price in just 48 hours! It's great. It's is both attractive and highly adaptable."</p>

          <div class="flex flex-col gap-2">
            <div class="text-xl font-medium text-white">Esther Howard</div>
            <div class="text-lg text-white/50">Marketing Coordinator</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
