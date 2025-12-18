import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 lg:px-20 py-20">
      <div class="flex flex-col justify-center items-center gap-12">
        <div class="self-stretch flex flex-col gap-4">
          <div class="text-4xl text-surface-900 dark:text-surface-0 font-bold leading-tight">Recent articles</div>
          <div class="text-lg text-surface-600 dark:text-surface-200 font-normal leading-normal">
            Excepteur sint occaecat cupidatat non proident.<br />
            Sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          @for (article of articles; track article.title; let index = $index) {
            <div class="flex flex-col gap-6">
              <div class="flex flex-col gap-4">
                <div class="h-[3px] w-full bg-primary rounded"></div>
                <div class="flex flex-col gap-2">
                  <div class="text-primary text-lg font-medium leading-tight">
                    {{ article.category }}
                  </div>
                  <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-normal">
                    {{ article.title }}
                  </div>
                </div>
              </div>
              <div class="text-surface-600 dark:text-surface-200 text-base leading-normal">
                {{ article.description }}
              </div>
              <div class="flex items-start gap-4">
                <p-avatar [image]="article.author.image" shape="circle" class="w-12! h-12!" />
                <div class="flex-1 flex flex-col gap-2">
                  <div class="text-surface-900 dark:text-surface-0 text-base font-medium leading-tight">
                    {{ article.author.name }}
                  </div>
                  <div class="text-surface-500 dark:text-surface-300 text-base leading-tight">
                    {{ article.date }}
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
  articles = [
    {
      category: 'Animals',
      title: "Why Earth's most beloved creatures are headed toward extinction",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Theresa Webb',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png',
      },
      date: 'Feb 7, 2025',
    },
    {
      category: 'Oxygen',
      title: 'Only one-third of tropical rainforests remain intact, study says',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Darrell Steward',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
      },
      date: 'Feb 21, 2025',
    },
    {
      category: 'Nature',
      title: 'Does planting a tree really offset your carbon footprint?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: {
        name: 'Kristin Watson',
        image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png',
      },
      date: 'Mar 3, 2025',
    },
  ];
}
