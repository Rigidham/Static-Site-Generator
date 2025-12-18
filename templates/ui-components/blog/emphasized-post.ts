import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 lg:px-20 py-20 flex flex-col justify-center items-center gap-12">
      <div class="self-stretch text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight">Recent Posts</div>

      <div class="self-stretch flex lg:flex-row flex-col">
        <div class="flex-1 p-8 flex flex-col gap-8">
          <img [src]="mainPost.image" [alt]="mainPost.title" class="w-full h-48 rounded-xl object-cover" />
          <div class="flex flex-col gap-2">
            <div class="text-surface-500 dark:text-surface-400 text-sm font-medium leading-normal">{{ mainPost.date }}</div>
            <div class="text-surface-700 dark:text-surface-200 text-lg font-medium leading-tight">{{ mainPost.author }}</div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight">{{ mainPost.title }}</div>
            <div class="text-surface-700 dark:text-surface-200 text-base leading-normal">{{ mainPost.description }}</div>
          </div>
        </div>

        <div class="flex-1 flex flex-col">
          @for (post of sidePosts; track post.title; let index = $index) {
            <div class="flex-1 p-8 flex gap-6 sm:flex-row flex-col md:min-w-144">
              <img [src]="post.image" [alt]="post.title" class="w-64 rounded-xl object-cover" />
              <div class="flex-1 flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                  <div class="text-surface-500 dark:text-surface-400 text-sm font-medium leading-normal">{{ post.date }}</div>
                  <div class="text-surface-700 dark:text-surface-200 text-lg font-medium leading-tight">{{ post.author }}</div>
                </div>
                <div class="flex flex-col gap-4">
                  <div class="text-surface-900 dark:text-surface-0 text-3xl font-bold leading-tight">{{ post.title }}</div>
                  <div class="text-surface-700 dark:text-surface-200 leading-normal">{{ post.description }}</div>
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
  mainPost = {
    title: 'A Window to Swiss Innovation',
    description: 'Set in the heart of Switzerland, this architectural marvel bridges modern design and lush surroundings.',
    author: 'Darrell Steward',
    date: '7 October',
    image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-emphasized-1.jpg',
  };

  sidePosts = [
    {
      title: 'A Stage by the Sea',
      description: 'This architectural icon transforms shoreline into a cultural haven.',
      author: 'Bessie Cooper',
      date: '8 October',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-emphasized-2.jpg',
    },
    {
      title: 'Symbol of Freedom',
      description: 'Bathed in twilight glow, this iconic figure welcomes travelers.',
      author: 'Jane Cooper',
      date: '12 November',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-emphasized-3.jpg',
    },
  ];
}
