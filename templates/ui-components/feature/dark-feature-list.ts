import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="custom-gradient px-8 py-20 md:px-12 lg:px-20 relative">
      <div class="flex items-center gap-6 w-full h-full z-20 relative">
        <div class="flex flex-col items-end gap-8 h-full w-full lg:w-1/2">
          <h2 class="text-primary-400 font-bold text-4xl leading-tight w-full">Manage Your Corporation</h2>

          <div class="flex flex-col gap-6 w-full">
            <div class="flex gap-3 w-full max-w-md">
              <div class="w-[2px] bg-primary-500 dark:bg-primary-400 rounded-full"></div>
              <div class="flex flex-col gap-2 w-full">
                <h3 class="text-surface-0 font-bold text-xl leading-tight">Simpler Interface</h3>
                <p class="text-surface-0/60 leading-normal">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div class="flex gap-3 w-full max-w-md">
              <div class="w-[2px] bg-primary-500 dark:bg-primary-400 rounded-full"></div>
              <div class="flex flex-col gap-2 w-full">
                <h3 class="text-surface-0 font-bold text-xl leading-tight">Extensive Connectivity</h3>
                <p class="text-surface-0/60 leading-normal">
                  Erat pellentesque adipiscing commodo elit at imperdiet dui. Morbi tristique senectus et netus et malesuada fames.
                </p>
              </div>
            </div>
            <div class="flex gap-3 w-full max-w-md">
              <div class="w-[2px] bg-primary-500 dark:bg-primary-400 rounded-full"></div>
              <div class="flex flex-col gap-2 w-full">
                <h3 class="text-surface-0 font-bold text-xl leading-tight">Advanced Security</h3>
                <p class="text-surface-0/60 leading-normal">
                  Adipiscing at in tellus integer. Lorem donec massa sapien faucibus et molestie ac feugiat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden lg:flex w-full md:w-1/2 justify-end items-center">
          <div
            class="w-[27.57rem] h-62 rotate-10 rounded-[1.67rem] border border-surface-0/10 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.2),0px_1px_1px_rgba(255,255,255,0.06)] backdrop-blur-md relative overflow-hidden bg-surface-100/10 before:content-[''] before:absolute before:inset-0 before:bg-[url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/noise.png')] before:bg-center before:bg-size-[150%_150%] before:opacity-10 before:mix-blend-soft-light before:z-1"
          >
            <div class="w-full h-full flex flex-col justify-between p-8 relative z-10">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                  <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.5022 4.72086C10.0631 4.72086 8.63819 4.99445 7.30869 5.52601C5.9792 6.05757 4.77119 6.8367 3.75363 7.8189C2.73608 8.8011 1.92891 9.96714 1.37822 11.2504C0.827522 12.5338 0.544083 13.9092 0.544083 15.2982C0.544083 16.6873 0.827523 18.0627 1.37822 19.346C1.92891 20.6293 2.73608 21.7954 3.75363 22.7776C4.77119 23.7598 5.9792 24.5389 7.3087 25.0705C8.63819 25.602 10.0631 25.8756 11.5022 25.8756L11.5022 4.72086Z"
                      fill="url(#paint0_linear_0_3)"
                      fill-opacity="0.9"
                    />
                    <path
                      d="M11.7991 21.8539C13.2381 21.8539 14.663 21.5803 15.9925 21.0488C17.322 20.5172 18.53 19.7381 19.5476 18.7559C20.5651 17.7737 21.3723 16.6076 21.923 15.3243C22.4737 14.041 22.7571 12.6656 22.7571 11.2765C22.7571 9.88748 22.4737 8.51204 21.923 7.22874C21.3723 5.94543 20.5651 4.77939 19.5476 3.79719C18.53 2.81499 17.322 2.03586 15.9925 1.5043C14.663 0.972735 13.2381 0.699143 11.7991 0.699143L11.7991 21.8539Z"
                      fill="url(#paint1_linear_0_3)"
                      fill-opacity="0.9"
                    />
                    <defs>
                      <linearGradient id="paint0_linear_0_3" x1="-1.27637" y1="1.02774" x2="15.8721" y2="9.48077" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.92" />
                        <stop offset="1" stop-color="white" stop-opacity="0.64" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_0_3" x1="24.5776" y1="25.547" x2="7.42912" y2="17.094" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" stop-opacity="0.92" />
                        <stop offset="1" stop-color="white" stop-opacity="0.64" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span class="text-surface-0 text-xl">PrimeBank</span>
                </div>
                <i class="pi pi-wifi text-surface-0 rotate-90 text-xl! leading-none!"></i>
              </div>
              <div class="flex flex-col gap-1">
                <div class="text-surface-0 leading-normal">1234 0000 0000 0000</div>
                <div class="text-surface-0 font-medium leading-normal">Robert Jonas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute z-0 w-[36.29rem] h-[36.29rem] rounded-full bg-primary-500 opacity-20 right-[-11.86rem] bottom-[-9.21rem]"></div>
    </div>
  `,
  styles: [
    `
      .custom-gradient {
        background: radial-gradient(
            60% 48.71% at 69% 0%,
            color-mix(in srgb, var(--p-primary-500) 70%, transparent) 0%,
            color-mix(in srgb, var(--p-primary-500) 0%, transparent) 100%
          ),
          var(--p-surface-950);
      }
    `,
  ],
})
export class __CLASS_NAME__ {}
