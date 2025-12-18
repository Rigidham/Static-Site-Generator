import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-hidden bg-surface-900 flex gap-14 flex-col lg:flex-row px-6 py-20 md:px-12 lg:px-20">
      <div class="lg:flex-1">
        <h2 class="text-5xl font-bold text-surface-0 leading-tight">Get Instant News Updates, Subscribe Now!</h2>
        <p class="text-xl text-surface-500 mt-4 leading-normal">
          Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
        </p>
        <div class="w-full h-px bg-surface-700 my-8"></div>
        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-4">
            <span class="mt-1">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.25 5.43796L10.5 0.384766L1.75002 5.43796M19.25 5.43796L10.5 10.4911M19.25 5.43796L19.25 7.29966L15.7037 9.34765M10.5 20.5975L19.25 15.5443L19.25 11.479M10.5 20.5975L1.75002 15.5443V11.479M10.5 20.5975V16.5322M1.75002 5.43796L10.5 10.4911M1.75002 5.43796L1.75 7.29966L5.29625 9.34765M10.5 10.4911L10.5 12.3529M10.5 12.3529L13.965 10.3948M10.5 12.3529L7.05253 10.3948M10.5 16.5322L19.25 11.479M10.5 16.5322L1.75002 11.479M19.25 11.479L15.7037 9.34765M1.75002 11.479L5.29625 9.34765M5.29625 9.34765L7.05253 10.3948M15.7037 9.34765L13.965 10.3948M13.965 10.3948L15.7037 11.479L10.5 14.4805L5.29625 11.479L7.05253 10.3948"
                  stroke="white"
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div>
              <h5 class="font-medium text-xl text-surface-0 leading-tight">Network Configuration</h5>
              <p class="text-base text-surface-500 mt-2 leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span class="mt-1">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.7588 2.30312L10.4143 0.44511L6.9956 2.37744M13.7588 2.30312L10.34 4.23546M13.7588 2.30312L13.7588 6.40045L12.198 7.2826M10.34 4.23546L6.9956 2.37744M10.34 4.23546L10.34 12.3364M6.9956 2.37744L6.9956 8.30657L8.63065 9.21493M10.34 12.3364L12.198 13.3686M10.34 12.3364L8.63065 13.3026M8.63065 9.21493L5.28623 7.35692L1.86749 9.28925M8.63065 9.21493L5.21191 11.1473M8.63065 9.21493L8.63065 13.3026M5.21191 11.1473L1.86749 9.28925M5.21191 11.1473L5.28623 17.0929M1.86749 9.28925L1.86749 15.1606L5.28623 17.0929M13.7588 14.2316L10.2657 16.1267M13.7588 14.2316L12.198 13.3686M13.7588 14.2316L12.198 15.0783L10.2657 16.1267M13.7588 14.2316L13.7588 18.2077M13.7588 14.2316L13.7588 16.0153M10.2657 16.1267L6.92128 14.2687M10.2657 16.1267L10.2657 20.2515M6.92128 14.2687L8.63065 13.3026M6.92128 14.2687L6.92128 16.1267M18.9612 7.20828L15.6168 5.35027L12.198 7.2826M18.9612 7.20828L15.5425 9.14061M18.9612 7.20828L18.9612 15.1606L15.5425 17.0929M15.5425 9.14061L12.198 7.2826M15.5425 9.14061L15.5425 17.0929M12.198 7.2826L12.198 13.3686M15.5425 17.0929L13.7588 16.0153M13.7588 16.0153L13.7588 18.2077M13.7588 18.2077L10.2657 20.2515M10.2657 20.2515L6.92128 18.2077L6.92128 16.1267M5.28623 17.0929L6.92128 16.1267"
                  stroke="white"
                  stroke-width="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div>
              <h5 class="font-medium text-xl text-surface-0 leading-tight">TCP/IP Protocols</h5>
              <p class="text-base text-surface-500 mt-2 leading-normal">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <button class="text-surface-900 text-base font-medium px-6 py-3 bg-surface-0 rounded-full hover:bg-surface-200 ring-0 focus:ring-2 ring-transparent focus:ring-surface-0/40 transition-all">
              Get Started
            </button>
            <button
              class="text-surface-0 text-base flex items-center gap-3 px-6 py-3 bg-transparent rounded-full border border-surface-800 hover:bg-surface-800 ring-0 focus:ring-2 ring-transparent focus:ring-surface-0/40 transition-all cursor-pointer"
            >
              <span class="flex-1 font-medium">Learn More</span>
              <i class="pi pi-arrow-right text-base! leading-none!"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 relative h-[28.57rem] flex justify-center">
        <img
          class="border border-surface-700 w-full lg:w-160 absolute lg:-right-32 xl:-right-24 max-w-none rounded-lg shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.20),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.12)]"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/block-13-image.jfif"
          alt="Image"
        />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
