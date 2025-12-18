import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-12 lg:p-20">
      <div class="flex flex-col gap-12">
        <h1 class="text-2xl font-bold text-surface-900 dark:text-surface-0 leading-tight text-center">Frequently Asked Questions</h1>

        <div class="flex flex-col">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @for (item of faqs; track item.title) {
              <div class="flex flex-col gap-2 p-2">
                <div class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">
                  {{ item.title }}
                </div>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">
                  {{ item.description }}
                </p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
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
    {
      title: 'What is the difference between intuition and an educated guess?',
      description: 'Ultrices gravida dictum fusce ut placerat orci. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.',
    },
    {
      title: "What are the implications of Occam's razor principle?",
      description: 'Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis. Ut placerat orci nulla pellentesque dignissim enim.',
    },
  ];
}
