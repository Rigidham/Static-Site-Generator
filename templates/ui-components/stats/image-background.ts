import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="">
      <div class="py-10 md:py-16 lg:py-20 px-6 md:px-12 lg:px-[5.14rem] flex flex-col justify-center items-center gap-8 bg-surface-900">
        <div class="flex flex-col gap-4 pb-10">
          <div class="text-primary-400 text-base md:text-xl font-medium leading-tight md:leading-tight text-center">Why Bastion</div>
          <div class="text-surface-0 text-2xl md:text-3xl lg:text-[2.5rem] font-semibold leading-tight lg:leading-tight text-center">Build Secure Onboarding</div>
          <div class="text-surface-400 text-base md:text-xl font-normal leading-normal md:leading-normal text-center max-w-[90%] lg:max-w-none mx-auto">
            Egestas congue quisque egestas diam in arcu. Sapien eget mi proin sed libero enim sed faucibus.
          </div>
        </div>
      </div>

      <div class="px-6 md:px-12 lg:px-[5.14rem] -mt-16 mb-20 md:mb-24 lg:mb-28">
        <div class="relative rounded-4xl md:rounded-[3rem] border border-primary-500/20 shadow-[0px_-10px_20px_0px_color-mix(in_srgb,var(--p-primary-400)_10%,transparent)]">
          <div class="flex flex-col md:flex-row gap-4 md:gap-10 w-full z-10 p-6 md:p-10 bg-surface-900/95 rounded-4xl md:rounded-[3rem] bg-linear-to-t from-primary-600 to-surface-900">
            <div class="flex-1 p-5 md:p-8 bg-surface-900/20 rounded-[1.43rem] md:rounded-4xl flex flex-col items-center gap-2">
              <div class="text-surface-0 text-3xl md:text-[3rem] font-medium leading-tight md:leading-tight text-center">1 min</div>
              <div class="text-surface-0 text-base md:text-xl font-medium leading-tight md:leading-tight text-center">Save Time</div>
              <div class="text-surface-0/70 text-base font-light leading-normal text-center">Get up and run in no time.</div>
            </div>
            <div class="flex-1 p-5 md:p-8 bg-surface-900/20 rounded-[1.43rem] md:rounded-4xl flex flex-col items-center gap-2">
              <div class="text-surface-0 text-3xl md:text-[3rem] font-medium leading-tight md:leading-tight text-center">+200%</div>
              <div class="text-surface-0 text-base md:text-xl font-medium leading-tight md:leading-tight text-center">Conversion Rate</div>
              <div class="text-surface-0/70 text-base font-light leading-normal text-center">Increase rate after switch to Bastion</div>
            </div>
            <div class="flex-1 p-5 md:p-8 bg-surface-900/20 rounded-[1.43rem] md:rounded-4xl flex flex-col items-center gap-2">
              <div class="text-surface-0 text-3xl md:text-[3rem] font-medium leading-tight md:leading-tight text-center">+300K</div>
              <div class="text-surface-0 text-base md:text-xl font-medium leading-tight md:leading-tight text-center">Popular Community</div>
              <div class="text-surface-0/70 text-base font-light leading-normal text-center">You will never walk alone.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
