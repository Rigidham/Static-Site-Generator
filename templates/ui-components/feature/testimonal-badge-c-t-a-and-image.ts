import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="flex flex-col-reverse xl:flex-row items-start gap-8 bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950 overflow-hidden">
      <div class="flex-1 flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <span class="px-3 py-1 w-fit bg-surface-50 dark:bg-surface-800 border border-surface-100 dark:border-surface-700 rounded-full text-sm text-surface-900 dark:text-surface-0 leading-normal">
            New
          </span>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-4">
              <h2 class="text-surface-900 font-semibold text-5xl leading-tight dark:text-surface-0">Innovation and Problem Solving</h2>
              <p class="text-lg leading-normal text-surface-600 dark:text-surface-400">Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button pButton pRipple icon="pi pi-arrow-right" [outlined]="true" [rounded]="true" iconPos="right" class="w-fit">
              <span pButtonLabel>Get Started</span>
            </button>
          </div>
        </div>
        <div class="pl-6 border-l border-surface-200 dark:border-surface-700">
          <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 mb-4">"Ornare massa eget egestas purus viverra accumsan in nisl. Tincidunt vitae semper quis lectus."</p>
          <div class="flex items-center gap-4">
            <img
              class="w-12 h-12 rounded-full object-cover"
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/block-26-avatar.png"
              alt="Avatar"
            />
            <div>
              <h5 class="text-lg font-semibold text-surface-900 dark:text-surface-0 leading-tight">Bessie Cooper</h5>
              <span class="text-sm text-surface-500 dark:text-surface-400 leading-normal">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:flex-1 w-full overflow-hidden rounded-lg shadow-xl max-w-2xl">
        <img
          class="block dark:hidden w-full h-auto rounded-lg"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/mail.jpg"
          alt="Feature image"
        />
        <img
          class="hidden dark:block w-full h-auto rounded-lg"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/mail-dark.jpg"
          alt="Feature image"
        />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
