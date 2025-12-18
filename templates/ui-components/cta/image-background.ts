import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-900">
      <div class="flex relative w-full justify-between overflow-hidden">
        <div class="w-1/2 relative md:flex hidden">
          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/cta-imgbg.png" alt="Image Background" class="absolute inset-0 w-full h-full object-cover" />
          <span class="absolute inset-0 bg-linear-to-l from-surface-900 to-transparent"></span>
        </div>
        <div class="w-full md:w-1/2 flex gap-4 items-center justify-center p-12 lg:p-20">
          <div class="flex flex-col gap-4 max-w-xl">
            <div class="flex flex-col gap-1">
              <div class="text-surface-0 font-bold text-4xl leading-tight">Ready to build beyond your expectations?</div>
            </div>
            <div class="text-surface-400 text-lg leading-normal">Vestibulum sed arcu non odio euismod lacinia at quis risus. Massa massa ultricies mi quis.</div>
            <button pButton severity="contrast" class="w-fit">
              <span pButtonLabel>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
