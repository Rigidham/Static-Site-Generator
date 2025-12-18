import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 text-surface-800 dark:text-surface-0/70 p-12 lg:p-20">
      <div class="flex lg:flex-row flex-col gap-12">
        <div class="flex flex-col gap-4 max-w-md">
          <h1 class="text-xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Frequently Asked Questions</h1>
          <p class="text-surface-700 dark:text-surface-0/70 leading-normal">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="flex flex-col grow gap-14">
          <div class="flex flex-col gap-4">
            <span class="text-surface-500 dark:text-surface-400 text-lg font-semibold uppercase leading-tight">WEBSITE</span>
            <p-accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="space-y-4!">
              @for (faq of faqs; track faq.title; let index = $index) {
                <p-accordion-panel [value]="index.toString()">
                  <p-accordion-header class="bg-transparent! px-0! text-lg! font-semibold! text-surface-900! dark:text-surface-0! leading-tight!">
                    {{ faq.title }}
                  </p-accordion-header>
                  <p-accordion-content>
                    <p class="px-0! pb-6! text-surface-500 dark:text-surface-400 leading-normal">{{ faq.description }}</p>
                  </p-accordion-content>
                </p-accordion-panel>
              }
            </p-accordion>
          </div>

          <div class="flex flex-col gap-4">
            <span class="text-surface-500 dark:text-surface-400 text-lg font-semibold uppercase leading-tight">DESIGN</span>
            <p-accordion expandIcon="pi pi-plus" collapseIcon="pi pi-minus" class="space-y-4!">
              @for (faq of faqs2; track faq.title; let index = $index) {
                <p-accordion-panel [value]="index.toString()">
                  <p-accordion-header class="bg-transparent! px-0! text-lg! font-semibold! text-surface-900! dark:text-surface-0! leading-tight!">
                    {{ faq.title }}
                  </p-accordion-header>
                  <p-accordion-content>
                    <p class="px-0! pb-6! text-surface-500 dark:text-surface-400 leading-normal">{{ faq.description }}</p>
                  </p-accordion-content>
                </p-accordion-panel>
              }
            </p-accordion>
          </div>
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
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'What is web traffic?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'What is an easy way to make a website?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'How do you know if something is true?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  faqs2 = [
    {
      title: 'How do I become a designer?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'What are the essential design tools?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'What is user experience (UX) design?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'How do I improve my design skills?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
}
