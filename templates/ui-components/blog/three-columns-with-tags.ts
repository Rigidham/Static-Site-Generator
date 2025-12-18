import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Article {
  type: string;
  readTime: string;
  title: string;
  tags: string[];
  image: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 px-6 lg:px-20 py-20">
      <div class="flex flex-col justify-center items-center gap-12">
        <h1 class="self-stretch text-center text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight">Just Released</h1>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (item of articles; track item.title; let index = $index) {
            <div class="bg-surface-0 dark:bg-surface-800 rounded-2xl shadow-sm flex flex-col gap-4 p-2">
              <div class="p-6 flex flex-col gap-4">
                <div class="flex flex-col gap-6">
                  <div class="flex justify-between items-center">
                    <div class="flex-1 text-surface-400 dark:text-surface-500 text-base font-medium leading-tight">{{ item.type }}</div>
                    <div class="flex items-center gap-2">
                      <i class="pi pi-hourglass text-surface-400 dark:text-surface-500"></i>
                      <div class="text-surface-400 dark:text-surface-500 text-base leading-tight">{{ item.readTime }}</div>
                    </div>
                  </div>
                  <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-normal">
                    {{ item.title }}
                  </div>
                </div>
                <div class="flex flex-wrap items-start gap-2">
                  @for (tag of item.tags; track tag; let tagIndex = $index) {
                    <div class="px-2 py-1 bg-surface-100 dark:bg-surface-700 rounded-md flex items-center">
                      <div class="text-surface-600 dark:text-surface-200 text-sm font-bold leading-normal">{{ tag }}</div>
                    </div>
                  }
                </div>
              </div>
              <img [src]="item.image" [alt]="item.title" class="w-full aspect-video rounded-lg object-cover" />
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  articles: Article[] = [
    {
      type: 'Article',
      readTime: '13 min',
      title: 'It is time to travel consciously and celebrate our diverse heritage',
      tags: ['Cultural Insight', 'Sustainable Travel'],
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-6.png',
    },
    {
      type: 'Article',
      readTime: '13 min',
      title: 'It is time to discover hidden wonders and support local communities',
      tags: ['Local Places', 'Scenic Routes'],
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-7.png',
    },
    {
      type: 'News',
      readTime: '7 min',
      title: 'Expanding travel corridors invites cultural exchange on a global scale',
      tags: ['Global Update', 'Future Travel'],
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-8.png',
    },
  ];
}
