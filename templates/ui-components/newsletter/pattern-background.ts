import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, DividerModule],
  template: `
    <div class="px-8 lg:px-20 py-20 flex items-center justify-center">
      <div class="w-full rounded-[2.85rem] border border-surface">
        <div class="relative bg-primary-600 px-12 pb-96 pt-20 md:py-20 md:p-20 shadow-xl rounded-[2.85rem] w-full overflow-hidden">
          <div class="relative z-20">
            <h1 class="text-3xl lg:text-6xl text-surface-0 font-semibold">Get our weekly<br />updates and free stuff!</h1>
            <p class="text-white/70 max-w-xl mt-4">
              Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Enim sed faucibus turpis in. Ullamcorper eget nulla facilisi etiam dignissim.
            </p>
            <div class="flex items-center gap-4 p-1 pl-4 max-w-md bg-[rgba(255,255,255,0.12)] backdrop-blur-[3px] border border-[rgba(255,255,255,0.16)] rounded-full mt-8">
              <input placeholder="Email address" class="bg-transparent outline-hidden border-none flex-1 w-full text-white placeholder:text-white/70" />
              <button class="py-2 px-3 bg-surface-0 rounded-full text-surface-950 font-medium hover:opacity-75 transition-all cursor-pointer">Subscribe</button>
            </div>
          </div>
          <div
            class="absolute inset-0 bg-[linear-gradient(-20deg,rgba(21,133,98,0.00)_36.92%,var(--p-primary-700)_49.35%)] md:bg-[linear-gradient(283deg,rgba(21,133,98,0.00)_36.92%,var(--p-primary-700)_49.35%)] z-10 bg-blend-overlay"
          ></div>
          <img
            class="h-[21.6rem] w-auto absolute right-0 bottom-0 z-0 max-w-none"
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/newsletter/pattern-bg-pt.png"
          />
        </div>
        <div class="py-12 px-12 flex lg:flex-row flex-col lg:gap-4 gap-8 items-start justify-between">
          @for (item of newsletterData; track item.label; let index = $index) {
            <div class="flex flex-col gap-0.5 flex-1 max-w-88">
              <span class="text-medium text-surface-500 upperase">{{ item.label }}</span>
              <a class="text-semibold text-lg text-surface-950 dark:text-surface-0 hover:underline transition-all cursor-pointer">{{ item.title }}</a>
              <div class="flex items-center text-surface-400 dark:text-surface-600 text-sm">
                <span>{{ item.date }}</span>
                <p-divider layout="vertical"></p-divider>
                <span>{{ item.readingTime }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  newsletterData: any[] = [
    {
      label: 'DESIGN TEAM',
      title: 'How We Designed a Great Website with Artificial Intelligence Tools',
      date: 'Nov 14',
      readingTime: '6 min read',
    },
    {
      label: 'DEVELOPMENT TEAM',
      title: '10 JavaScript Frameworks You Should Know in 2024',
      date: 'Nov 14',
      readingTime: '7 min read',
    },
    {
      label: 'MARKETING TEAM',
      title: 'The Future of Minimalist Design in Digital Marketing',
      date: 'Nov 14',
      readingTime: '5 min read',
    },
  ];
}
