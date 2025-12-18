import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 lg:px-20 py-20 flex flex-col justify-center items-center gap-12">
      <div class="text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight text-center">Featured Articles</div>

      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (item of blogs; track item.title; let index = $index) {
          <div class="bg-surface-0 dark:bg-surface-900 rounded-2xl shadow-sm flex flex-col gap-4 p-2">
            <img [src]="item.cover" [alt]="item.title" class="w-full aspect-video rounded-lg object-cover" />
            <div class="p-6 flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <span class="text-primary font-medium leading-tight">
                    {{ item.category }}
                  </span>
                  <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-normal">
                    {{ item.title }}
                  </div>
                </div>
                <div class="text-surface-700 dark:text-surface-200 text-base leading-normal">{{ item.description }}</div>
              </div>
              <div class="flex items-start gap-4">
                <p-avatar [image]="item.author.image" shape="circle" class="w-12! h-12!" />
                <div class="flex-1 flex flex-col gap-2">
                  <div class="font-medium text-surface-900 dark:text-surface-0 leading-tight">
                    {{ item.author.name }}
                  </div>
                  <div class="text-surface-600 dark:text-surface-200 text-sm leading-tight">
                    {{ item.date }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  blogs = [
    {
      category: 'Crime',
      color: 'blue',
      title: 'Fugitive flamingo spotted in Florida',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-1.jpg',
      author: {
        name: 'Anna Lane',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png',
      },
      date: 'Apr 5, 202X',
    },
    {
      category: 'Wildlife',
      color: 'pink',
      title: 'To the Ends of the Earth',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-2.jpg',
      author: {
        name: 'Arlene McCoy',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
      },
      date: 'Apr 5, 202X',
    },
    {
      category: 'Marine',
      color: 'orange',
      title: "'Real and imminent' extinction risk",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      cover: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-3.jpg',
      author: {
        name: 'Floyd Miles',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png',
      },
      date: 'Apr 5, 202X',
    },
  ];
}
