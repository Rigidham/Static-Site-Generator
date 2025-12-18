import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div
        style="background: radial-gradient(1130.92% 141.42% at 100% 0%, color-mix(in srgb, var(--p-primary-color), transparent 40%) 0%, var(--p-surface-950) 100%), #18181b"
        class="flex flex-wrap relative overflow-hidden rounded-2xl"
      >
        <div class="px-12 py-20">
          <span class="uppercase text-lg text-primary-300 font-bold">BE ONE OF THE FIRSTS</span>
          <div class="text-surface-0 text-4xl font-medium mt-4 mb-8 leading-tight">Join the waitlist today!</div>
          <button pButton type="button" [rounded]="true" class="px-3! py-2! text-base! font-medium!">
            <span pButtonLabel>Reserve Your Username</span>
          </button>
        </div>

        <img
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/mockup.png"
          alt="Image"
          class="static lg:absolute block mx-auto h-80 sm:h-[28.57rem] sm:-top-8 inset-0 sm:inset-auto sm:-right-4"
        />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
