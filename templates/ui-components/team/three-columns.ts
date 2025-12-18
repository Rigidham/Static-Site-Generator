import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex xl:flex-row flex-col gap-6">
        <div class="w-full xl:w-168">
          <div class="flex flex-col gap-4">
            <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Meet our team</h2>
            <p class="text-xl leading-normal text-surface-600 dark:text-surface-300">Ac odio tempor orci dapibus ultrices in iaculis nunc. Semper eget duis at tellus at urna condimentum.</p>
          </div>
        </div>
      </div>

      <div class="flex mt-14 gap-17.5 xl:flex-row flex-col">
        @for (member of teamMembers; track member.name) {
          <div class="flex-1 flex flex-col gap-2">
            <div class="flex items-center gap-6">
              <img class="w-16 h-16 object-cover rounded-full" [src]="member.image" [alt]="member.name" />
              <div class="flex-1 flex flex-col gap-2">
                <h4 class="text-xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ member.name }}</h4>
                <span class="text-surface-600 dark:text-surface-300 leading-tight">{{ member.role }}</span>
              </div>
            </div>
            <div class="pl-21.25 flex flex-col gap-4">
              <p class="text-base leading-normal text-surface-500 dark:text-surface-400">{{ member.bio }}</p>
              <div class="flex items-start gap-2">
                @for (icon of member.socials; track icon) {
                  <a href="#" class="rounded-[1.125rem] px-4 py-2 border border-surface-200 dark:border-surface-800 hover:bg-surface-50 dark:hover:bg-surface-800 flex items-start">
                    <i [ngClass]="'pi pi-' + icon + ' text-xl! leading-none! text-surface-900 dark:text-surface-400'"></i>
                  </a>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  teamMembers: any[] = [
    {
      name: 'Jane Cooper',
      role: 'Product Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-12.png',
      bio: 'Eget nunc lobortis mattis aliquam faucibus purus in massa tempor.',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Helena Larsen',
      role: 'Product Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-10.png',
      bio: 'Adipiscing commodo elit at imperdiet dui accumsan sit amet.',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Aleena Jones',
      role: 'Product Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-16.png',
      bio: 'Duis ut diam quam nulla porttitor massa id neque aliquam.',
      socials: ['twitter', 'github', 'facebook'],
    },
  ];
}
