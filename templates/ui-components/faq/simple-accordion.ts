import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-12 lg:p-20">
      <div class="flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Frequently Asked Questions</h1>
          <p class="text-base text-surface-700 dark:text-surface-0/70 leading-normal text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="w-full p-8 border border-surface-200 dark:border-surface-700 rounded-xl">
          <p-accordion value="0" expandIcon="pi pi-chevron-down" collapseIcon="pi pi-chevron-up" class="space-y-0!">
            @for (item of faqs; track item.title; let index = $index) {
              <p-accordion-panel [value]="index.toString()" class="border-b! border-surface-200! dark:border-surface-700!">
                <p-accordion-header class="bg-transparent! px-0! py-6! text-base! font-semibold! text-surface-900! dark:text-surface-0! leading-tight!">
                  {{ item.title }}
                </p-accordion-header>
                <p-accordion-content>
                  <p class="px-0! pb-6! text-base text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                </p-accordion-content>
              </p-accordion-panel>
            }
          </p-accordion>
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
      description: 'Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
    },
    {
      title: 'What is an easy way to make a website?',
      description: 'In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.',
    },
    {
      title: 'How do you know if something is true?',
      description:
        'Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.',
    },
  ];
}
