import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-900 px-8 py-20 md:px-12 lg:px-20">
      <div class="flex gap-8 justify-between md:items-center flex-col-reverse md:flex-row">
        <div class="pr-0 lg:pr-12 flex flex-col gap-6 max-w-2xl w-full">
          <div class="font-bold text-surface-0 text-4xl leading-tight">Enhanced User Experience</div>
          <div class="text-surface-400 leading-normal text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          <div class="flex flex-wrap lg:flex-nowrap gap-4">
            <button pButton [rounded]="true" class="w-fit shrink-0">
              <span pButtonLabel>Learn More</span>
            </button>
            <button pButton [text]="true" [rounded]="true" class="w-fit shrink-0 hover:bg-primary-400/10!">
              <span pButtonLabel>Contact Sales</span>
            </button>
          </div>
        </div>
        <div class="relative w-full flex md:justify-end items-center">
          <div class="absolute rotate-6 w-92 h-92 bg-primary-600 rounded-2xl z-10"></div>
          <div class="z-20 w-92 h-92 relative">
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/data-analyst.png"
              alt="Data Analyst"
              class="w-full h-full min-w-92 min-h-92 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
