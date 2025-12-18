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
    <div class="relative p-8 md:p-12 lg:p-20 overflow-hidden bg-no-repeat! bg-cover! bg-center" [style]="backgroundStyle">
      <div class="text-center my-12 relative">
        <div class="text-4xl md:text-5xl font-bold mb-1 text-white leading-tight">Bring Out The Best</div>
        <div class="text-4xl md:text-5xl text-primary-400 font-bold mb-6 leading-tight">In Your Code</div>
        <p class="mt-0 mb-4 leading-normal text-center mx-auto text-primary-100 max-w-xl text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 sm:px-0 py-4 sm:py-0">
          <input
            pInputText
            type="text"
            class="bg-transparent! border-white/70! p-3! rounded-full! h-12! w-full! sm:w-auto! text-surface-0/80! placeholder:text-surface-0/60!"
            size="30"
            placeholder="Enter your email"
            [(ngModel)]="email"
          />
          <button pButton rounded class="h-12! w-full! sm:w-auto!">
            <span pButtonLabel>Notify Me</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  email = '';

  backgroundStyle = {
    background: `linear-gradient(0deg, color-mix(in srgb, var(--p-surface-950) 50%, transparent) 0%, transparent 100%),
      linear-gradient(0deg, var(--p-primary-500) 0%, var(--p-primary-500) 100%),
      linear-gradient(0deg, color-mix(in srgb, var(--p-primary-800) 60%, transparent) 0%, color-mix(in srgb, var(--p-primary-800) 60%, transparent) 100%),
      url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/bw-hero-bg.jpg') center/cover no-repeat`,
    backgroundBlendMode: 'normal, multiply, lighten, normal',
  };
}
