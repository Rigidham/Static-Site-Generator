import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Blog {
  category: string;
  title: string;
  description: string;
  date: string;
  cover: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 lg:px-20 py-20 flex flex-col justify-center items-center gap-12">
      <div class="self-stretch flex flex-col gap-4">
        <div class="self-stretch text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight">From the blog</div>
        <div class="self-stretch text-lg text-surface-600 dark:text-surface-200 font-normal leading-normal">
          Excepteur sint occaecat cupidatat non proident.<br />
          Sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div class="self-stretch flex flex-col gap-8">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          @for (item of blogs; track item.title; let index = $index) {
            <div class="h-auto md:h-[202px] p-2 bg-white dark:bg-surface-900 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4">
              <img [src]="item.cover" [alt]="item.title" class="h-64 md:h-auto w-full md:w-1/2 rounded-lg object-cover" />
              <div class="p-4 flex flex-col gap-4 w-full md:w-1/2">
                <div class="flex flex-col gap-4 flex-1">
                  <div class="self-stretch h-[51px] flex flex-col gap-2">
                    <div class="self-stretch text-primary text-lg font-medium leading-normal">
                      {{ item.category }}
                    </div>
                    <div class="self-stretch text-surface-900 dark:text-surface-0 text-lg font-medium leading-normal">
                      {{ item.title }}
                    </div>
                  </div>
                  <div class="self-stretch text-surface-600 dark:text-surface-200 text-sm leading-normal">
                    {{ item.description }}
                  </div>
                </div>

                <div class="text-surface-500 dark:text-surface-300 text-sm leading-normal">
                  {{ item.date }}
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
  blogs: Blog[] = [
    {
      category: 'Good News',
      title: 'Our Four-Legged Warriors',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '3 days ago',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-4.jpg',
    },
    {
      category: 'Science',
      title: 'Can We Learn From Horses?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '5 days ago',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-5.jpg',
    },
    {
      category: 'Good News',
      title: 'Sky-High Good Vibes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '3 days ago',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-bird.jpg',
    },
    {
      category: 'Science',
      title: 'A Taller Perspective',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '5 days ago',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-giraffe.jpg',
    },
  ];
}
