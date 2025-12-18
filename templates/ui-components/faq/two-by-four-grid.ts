import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-6 lg:p-20">
      <div class="flex flex-col gap-8 lg:gap-10">
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">Frequently Asked Questions</h1>
          <p class="text-base text-surface-700 dark:text-surface-0/70 leading-tight">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="flex flex-col gap-8 lg:gap-10">
          @for (row of [1, 2, 3, 4]; track row) {
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
              @for (item of faqs.slice((row - 1) * 2, row * 2); track item.title) {
                <div class="flex flex-col gap-4">
                  <h2 class="text-lg font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ item.title }}</h2>
                  <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                </div>
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
      title: 'Sapien eget mi proin sed.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut faucibus pulvinar elementum integer.',
    },
    {
      title: 'Ultrices gravida dictum fusce ut placerat.',
      description:
        'Neque volutpat ac tincidunt vitae semper quis lectus. Pulvinar neque laoreet suspendisse interdum consectetur. Risus feugiat in ante metus dictum. Placerat in egestas erat imperdiet.',
    },
    {
      title: 'Adipiscing tristique risus nec feugiat in fermentum.',
      description:
        'Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Cras sed felis eget velit aliquet sagittis id consectetur purus. Est sit amet facilisis magna etiam tempor orci eu.',
    },
    {
      title: 'Nunc sed blandit libero volutpat.',
      description:
        'Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur. Auctor elit sed vulputate mi sit amet mauris commodo quis. Pulvinar neque laoreet suspendisse interdum consectetur.',
    },
    {
      title: 'Praesent tristique magna sit amet purus gravida quis.',
      description:
        'Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.',
    },
    {
      title: 'Nulla pharetra diam sit amet nisl suscipit adipiscing.',
      description:
        'Faucibus purus in massa tempor nec. Aenean sed adipiscing diam donec adipiscing tristique. Ac placerat vestibulum lectus mauris ultrices eros. Convallis posuere morbi leo urna molestie at elementum.',
    },
    {
      title: 'Gravida quis blandit turpis cursus.',
      description:
        'Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum faucibus. Non diam phasellus vestibulum lorem.',
    },
    {
      title: 'Aliquet sagittis id consectetur purus ut faucibus.',
      description:
        'Magna eget est lorem ipsum dolor. Malesuada fames ac turpis egestas maecenas pharetra convallis. Leo vel fringilla est ullamcorper eget nulla facilisi. Ultrices eros in cursus turpis massa tincidunt dui ut. Ultricies mi eget mauris pharetra et ultrices.',
    },
  ];
}
