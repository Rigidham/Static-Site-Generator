import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-white dark:bg-zinc-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="max-w-[1168px] mx-auto">
        <div
          class="relative min-h-[800px] md:min-h-[700px] lg:min-h-[552px] overflow-hidden flex flex-col before:content-[''] before:absolute before:inset-0 before:bg-[url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/footer/footer.jpg')] before:bg-cover before:bg-center after:content-[''] after:absolute after:inset-0 after:[background:linear-gradient(180deg,rgba(33,33,33,0.00)_0%,rgba(33,33,33,0.70)_10%,#212121_37%,#212121_100%)] lg:after:[background:linear-gradient(180deg,rgba(33,33,33,0.00)_0%,rgba(33,33,33,0.70)_27%,#212121_37%,#212121_100%)] before:z-0"
        >
          <div class="hidden lg:block z-10">
            <div class="absolute left-0 right-0 top-[212px] flex justify-between">
              <div class="absolute left-[-3px]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[24.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[49.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[74.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute right-[-3px]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
            </div>

            <div class="absolute left-0 right-0 top-[460px] flex justify-between">
              <div class="absolute left-[-3px]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[24.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[49.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute left-[74.7%]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
              <div class="absolute right-[-3px]">
                <div class="w-[8px] h-[8px] bg-zinc-700 rounded-[2px] border border-surface-600"></div>
              </div>
            </div>
          </div>

          <div class="relative flex-1 flex flex-col mt-[100px] md:mt-[150px] lg:mt-[216px] z-20">
            <div class="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              @for (section of sections; track section.title; let index = $index) {
                <div class="p-6 md:p-12 lg:px-20 lg:py-12 border border-zinc-700 lg:first:border-l-0 border-l-0 lg:border-l border-r-0 border-b-0">
                  <div class="flex flex-col gap-4">
                    <h3 class="text-white text-lg font-medium leading-tight">{{ section.title }}</h3>
                    <div class="flex flex-col gap-3">
                      @for (item of section.items; track item) {
                        <a href="#" class="text-surface-400 hover:text-surface-300 transition-colors leading-tight">
                          {{ item }}
                        </a>
                      }
                    </div>
                  </div>
                </div>
              }
            </div>

            <div class="border-t border-zinc-700 py-6 lg:py-8 px-6 md:px-12 lg:px-20">
              <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 lg:justify-between">
                <div class="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="none">
                    <path d="M21 0C9.40201 0 0 9.40201 0 21C11.598 21 21 11.598 21 0Z" class="fill-white" />
                    <path d="M21 42C32.598 42 42 32.598 42 21C30.402 21 21 30.402 21 42Z" class="fill-white" />
                    <path d="M21 0C32.598 0 42 9.40201 42 21C30.402 21 21 11.598 21 0Z" class="fill-white" />
                    <path d="M21 42C9.40201 42 -1.01393e-06 32.598 0 21C11.598 21 21 30.402 21 42Z" class="fill-white" />
                  </svg>
                  <span class="text-white leading-tight">Wavelength</span>
                </div>
                <div class="text-surface-400 leading-tight">© 202X Wavelength Technologies</div>
                <div class="flex gap-4">
                  @for (icon of socialIcons; track icon) {
                    <a
                      href="#"
                      class="w-8 h-8 bg-surface-950 rounded-full border border-zinc-700 backdrop-blur-sm flex items-center justify-center p-2 hover:border-surface-600 transition-colors"
                    >
                      <i [ngClass]="['pi', 'pi-' + icon, 'text-white']"></i>
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  sections = [
    {
      title: 'About Us',
      items: ['News', 'Investor Relations', 'Careers', 'Media Kit'],
    },
    {
      title: 'Resources',
      items: ['Get Started', 'Learn', 'Case Studies'],
    },
    {
      title: 'Community',
      items: ['Discord', 'Events', 'FAQ', 'Blog'],
    },
    {
      title: 'Legal',
      items: ['Brand Policy', 'Privacy Policy', 'Terms of Service'],
    },
  ];

  socialIcons = ['youtube', 'twitter', 'discord'];
}
