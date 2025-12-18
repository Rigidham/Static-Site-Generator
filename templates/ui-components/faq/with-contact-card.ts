import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-12 lg:p-20">
      <div class="flex flex-col items-center gap-8">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Frequently Asked Questions</h1>
          <p class="text-base text-surface-700 dark:text-surface-0/70 leading-normal text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="w-full">
          <p-accordion expandIcon="pi pi-chevron-down" collapseIcon="pi pi-chevron-up" class="space-y-0!">
            @for (item of faqs; track item.title; let index = $index) {
              <p-accordion-panel [value]="index.toString()" class="border-b! border-surface-200! dark:border-surface-700!">
                <p-accordion-header class="bg-transparent! px-4! py-4! text-base! font-semibold! text-surface-900! dark:text-surface-0! leading-tight!">
                  {{ item.title }}
                </p-accordion-header>
                <p-accordion-content>
                  <p class="px-4! pb-4! text-base text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                </p-accordion-content>
              </p-accordion-panel>
            }
          </p-accordion>
        </div>

        <div class="w-full flex flex-col items-center gap-8 p-8 bg-surface-50 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-xl">
          <div class="flex -space-x-4">
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png"
              alt="Avatar"
              class="w-14 h-14 rounded-full border-2 border-surface-50 dark:border-surface-900"
            />
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png"
              alt="Avatar"
              class="w-14 h-14 rounded-full border-2 border-surface-50 dark:border-surface-900"
            />
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png"
              alt="Avatar"
              class="w-14 h-14 rounded-full border-2 border-surface-50 dark:border-surface-900"
            />
          </div>

          <div class="flex flex-col items-center gap-2">
            <h2 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">Still Have Questions?</h2>
            <p class="text-base text-surface-700 dark:text-surface-0/70 leading-normal">
              Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.
            </p>
          </div>

          <button pButton severity="primary">
            <i pButtonIcon class="pi pi-address-book"></i>
            <span pButtonLabel>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .p-accordioncontent-content {
        background-color: transparent !important;
        padding-bottom: 0 !important;
        padding-inline: 0 !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class __CLASS_NAME__ {
  faqs = [
    {
      title: 'How do I become a webmaster?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'How do you know if something is true?',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: "What are the implications of Occam's razor principle?",
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
}
