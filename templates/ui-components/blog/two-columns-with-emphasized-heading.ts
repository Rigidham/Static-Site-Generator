import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Blog {
  image: string;
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 lg:px-20 py-20">
      <div class="w-full flex items-start lg:flex-row flex-col gap-12">
        <div class="lg:w-1/3">
          <h1 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Recent News</h1>
          <p class="mt-4 text-surface-600 dark:text-surface-200 text-lg leading-normal">Stay updated with the latest discoveries, innovations, and explorations in space science.</p>
        </div>
        <div class="flex-1 flex flex-col gap-8">
          @for (item of blogs; track item.title; let index = $index) {
            <div class="flex items-strt md:flex-row flex-col gap-6">
              <div class="w-full md:w-56 h-60 md:h-44 overflow-hidden rounded-xl">
                <img class="w-full h-full object-cover" [src]="item.image" [alt]="item.title" />
              </div>
              <div class="md:flex-1">
                <div class="py-1 px-2 rounded-md bg-surface-100 dark:bg-surface-800 w-fit">
                  <span class="text-surface-600 dark:text-surface-200 text-sm">{{ item.date }}</span>
                </div>
                <h4 class="mt-4 text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ item.title }}</h4>
                <p class="mt-2 text-lg text-surface-600 dark:text-surface-200 leading-normal">{{ item.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  blogs: Blog[] = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-1.jpg',
      date: 'Nov 8.2024',
      title: 'Undiscovered Galaxies & Life Possibilities',
      description: 'New observations with advanced telescopes are uncovering conditions that may support life in the cosmos. The findings are intriguing scientists worldwide.',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-2.jpg',
      date: 'Oct 29.2024',
      title: 'Moon Colonization Efforts',
      description: 'Scientists have initiated new projects to establish sustainable living infrastructure on the lunar surface. What will the first Moon colony look like?',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/emphasized-heading-blog-3.jpg',
      date: 'Oct 29.2024',
      title: 'Black Holes & Time Warping',
      description: "The phenomenon of light bending and time warping around black holes remains one of the universe's greatest mysteries. Can we ever unravel it?",
    },
  ];
}
