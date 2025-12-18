import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-12 lg:p-20">
      <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Frequently Asked Questions</h1>
          <p class="text-surface-700 dark:text-surface-0/70 leading-normal">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          @for (item of faqs; track item.title; let index = $index) {
            <div class="flex flex-col">
              <div class="flex flex-col lg:flex-row justify-between pb-6 gap-4">
                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight max-w-[467px]">
                  {{ item.title }}
                </div>
                <div class="text-base text-surface-700 dark:text-surface-0/70 leading-normal max-w-[655px]">
                  {{ item.description }}
                </div>
              </div>
              @if (index < faqs.length - 1) {
                <hr class="border-t border-surface-200 dark:border-surface-700" />
              }
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  faqs = [
    {
      title: 'How do I become an expert in web designing?',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: 'What is web traffic?',
      description: 'Sed cras ornare arcu dui. Placerat in egestas erat imperdiet. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
    },
    {
      title: 'How do you know if something is true?',
      description: 'In hac habitasse platea dictumst vestibulum. Duis ultricies lacus sed turpis tincidunt id. Imperdiet proin fermentum leo vel.',
    },
    {
      title: 'What is the difference between intuition and an educated guess?',
      description:
        'Cras ornare arcu dui vivamus arcu felis bibendum ut. Amet purus gravida quis blandit turpis cursus in hac habitasse. Leo in vitae turpis massa sed elementum tempus.',
    },
    {
      title: "What are the implications of Occam's razor principle?",
      description: 'Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.',
    },
  ];
}
