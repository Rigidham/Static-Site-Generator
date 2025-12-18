import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 py-20 px-6 md:px-12 lg:px-20 flex flex-col gap-8 justify-center items-center relative">
      <div class="flex flex-col gap-2 items-center max-w-3xl mx-auto">
        <h3 class="text-surface-900 dark:text-surface-0 font-bold text-2xl leading-tight text-center">Explore the features</h3>
        <p class="text-surface-600 dark:text-surface-400 text-center leading-tight">
          Libero justo laoreet sit amet cursus sit amet dictum. Auctor neque vitae tempus quam pellentesque nec nam.
        </p>
      </div>

      <div class="mx-auto">
        <div class="xl:hidden flex flex-col gap-12">
          @for (item of timelineItems; track item.id; let index = $index) {
            <div class="grid grid-cols-1 sm:grid-cols-[42px_1fr] gap-4">
              <div class="hidden sm:flex flex-col items-center">
                <div class="w-12 h-12 rounded-2xl border border-surface-200 dark:border-surface-700 flex items-center justify-center px-1 py-2 bg-white dark:bg-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">{{ item.id }}</span>
                </div>
                <div class="w-px bg-surface-200 dark:bg-surface-700 flex-1"></div>
              </div>
              <div class="flex w-full flex-col gap-4">
                <div class="w-full h-52 bg-surface-50 dark:bg-surface-800 rounded-[10px] overflow-hidden flex justify-center items-start shadow-inner relative">
                  <img
                    [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/timeline-' + item.id + '.png'"
                    [alt]="'Image ' + item.id"
                    class="absolute bottom-0 left-1/2 translate-x-[-50%]"
                    [style.width]="item.imageWidth"
                  />
                </div>
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ item.title }}</h4>
                    <p class="text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                  </div>
                  <div class="h-px bg-surface-200 dark:bg-surface-700 w-full"></div>
                  <div class="flex flex-col gap-2">
                    @for (detail of item.details; track detail.title; let detailIndex = $index) {
                      <p class="leading-normal text-surface-900 dark:text-surface-0">
                        <span class="font-medium">{{ detail.title }}</span>
                        <span class="text-surface-600 dark:text-surface-400">{{ detail.text }}</span>
                      </p>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <div class="hidden xl:flex flex-col gap-12">
          @for (item of timelineItems; track item.id; let index = $index) {
            <div class="flex gap-12" [ngClass]="{ 'flex-row-reverse': index % 2 === 0 }">
              <div class="w-127">
                <div class="h-52 bg-surface-50 dark:bg-surface-800 rounded-[10px] overflow-hidden flex justify-center items-start shadow-inner relative">
                  <img
                    [src]="'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/timeline-' + item.id + '.png'"
                    [alt]="'Image ' + item.id"
                    class="absolute bottom-0 left-1/2 translate-x-[-50%]"
                    [style.width]="item.imageWidth"
                  />
                </div>
              </div>
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 rounded-2xl border border-surface-200 dark:border-surface-700 flex items-center justify-center px-1 py-2 bg-white dark:bg-surface-800">
                  <span class="text-surface-900 dark:text-surface-0 font-medium text-xl leading-tight">{{ item.id }}</span>
                </div>
                <div class="w-px bg-surface-200 dark:bg-surface-700 h-[200px]"></div>
              </div>
              <div class="w-127" [ngClass]="{ 'text-right': index % 2 === 0 }">
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <h4 class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">{{ item.title }}</h4>
                    <p class="text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                  </div>
                  <div class="h-px bg-surface-200 dark:bg-surface-700 w-full"></div>
                  <div class="flex flex-col gap-2">
                    @for (detail of item.details; track detail.title; let detailIndex = $index) {
                      <p class="leading-normal text-surface-900 dark:text-surface-0">
                        <span class="font-medium">{{ detail.title }}</span>
                        <span class="text-surface-600 dark:text-surface-400">{{ detail.text }}</span>
                      </p>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  timelineItems = [
    {
      id: 1,
      title: 'Ornare Arcu Odio',
      description: 'Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend.',
      details: [
        {
          title: 'Sed lectus vestibulum ',
          text: 'mattis ullamcorper velit. Laoreet sit amet cursus sit.',
        },
        {
          title: 'Fames ac turpis ',
          text: 'egestas sed tempus urna et. Cursus turpis massa.',
        },
      ],
      imageWidth: '23rem',
    },
    {
      id: 2,
      title: 'A diam maecenas',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      details: [
        {
          title: 'Quis hendrerit dolor ',
          text: 'magna eget est. Pellentesque pulvinar pellentesque.',
        },
        {
          title: 'Lectus urna duis ',
          text: 'convallis convallis tellus id interdum velit laoreet.',
        },
      ],
      imageWidth: '14rem',
    },
    {
      id: 3,
      title: 'Pharetra et ultrices neque',
      description: 'Id interdum velit laoreet id. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet.',
      details: [
        {
          title: 'Egestas dui id ',
          text: 'ornare arcu odio ut. Mi bibendum neque egestas congue.',
        },
        {
          title: 'Sed velit dignissim ',
          text: 'sodales ut eu. Massa placerat duis ultricies lacus.',
        },
      ],
      imageWidth: '25rem',
    },
  ];
}
