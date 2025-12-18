import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  template: `
    <section class="relative w-full flex items-center justify-center h-128 overflow-hidden bg-surface-0 dark:bg-surface-950">
      <div class="relative z-50 max-w-2xl px-4 text-center">
        <div class="flex flex-col gap-6">
          <h2 class="text-5xl font-semibold text-surface-900 dark:text-surface-0 text-center leading-tight">Stay informed about<br />the upcoming 50% discount</h2>
          <p class="text-surface-800 dark:text-surface-200 text-center leading-normal">
            Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Enim sed faucibus turpis in. Ullamcorper eget nulla facilisi etiam dignissim.
          </p>
        </div>

        <div class="flex items-center justify-center gap-4 mt-8 max-w-md mx-auto">
          <input pInputText [(ngModel)]="email" placeholder="Email " class="rounded-full! w-full" />
          <button pButton [rounded]="true" class="shrink-0">
            <span pButtonLabel>Subscribe</span>
          </button>
        </div>
      </div>
      <div
        class="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_-6.84%,rgba(255,255,255,0.87)_51.59%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_-6.84%,rgba(0,0,0,0.87)_51.59%,#000_100%)]"
      ></div>
      <div class="absolute inset-0 -top-1 z-0 flex gap-4 overflow-hidden items-center justify-center">
        <div class="flex gap-4 absolute lg:inset-[15%] rotate-[30.665deg] w-[150%]">
          @for (column of [1, 2, 3, 4]; track column) {
            <div class="flex flex-col gap-4 animate-marquee min-h-screen" [ngClass]="column % 2 === 0 ? 'animate-marquee-reverse' : ''">
              @for (i of [1, 2, 3, 4]; track i) {
                <img
                  [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/newsletter/image-' + ((column - 1) * 4 + i) + '.jpg'"
                  [alt]="'Newsletter Image ' + ((column - 1) * 4 + i)"
                  class="shrink-0 h-[378px] w-[265px] rounded-lg object-cover"
                />
              }
              @for (i of [1, 2, 3, 4]; track 'dup-' + i) {
                <img
                  [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/newsletter/image-' + ((column - 1) * 4 + i) + '.jpg'"
                  [alt]="'Newsletter Image ' + ((column - 1) * 4 + i)"
                  class="shrink-0 h-[378px] w-[265px] rounded-lg object-cover"
                />
              }
              @for (i of [1, 2, 3, 4]; track 'dup2-' + i) {
                <img
                  [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/newsletter/image-' + ((column - 1) * 4 + i) + '.jpg'"
                  [alt]="'Newsletter Image ' + ((column - 1) * 4 + i)"
                  class="shrink-0 h-[378px] w-[265px] rounded-lg object-cover"
                />
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .animate-marquee {
        animation: marquee 60s linear infinite;
      }

      .animate-marquee-reverse {
        animation: marquee 60s linear infinite reverse;
      }

      @keyframes marquee {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }
    `,
  ],
})
export class __CLASS_NAME__ {
  email: string = '';
}
