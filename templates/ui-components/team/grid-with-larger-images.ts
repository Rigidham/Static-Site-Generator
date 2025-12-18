import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight text-center">The Team</h2>
          <p class="text-xl text-surface-600 dark:text-surface-200 leading-normal text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="grid grid-cols-12 gap-8 md:gap-12">
          @for (member of teamMembers; track member.name) {
            <div class="col-span-12 md:col-span-4 text-center flex flex-col items-center gap-4">
              <img [src]="member.image" [alt]="member.name" class="w-40 h-40 object-cover rounded-full" />
              <div class="flex flex-col items-center gap-2">
                <h4 class="text-xl text-surface-900 dark:text-surface-0 font-medium leading-tight">{{ member.name }}</h4>
                <span class="text-xl text-surface-500 dark:text-surface-400 leading-tight">{{ member.role }}</span>
              </div>
              <div class="flex items-center gap-4">
                @for (icon of member.socials; track icon) {
                  <a class="text-surface-600 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer">
                    <i [ngClass]="'pi pi-' + icon + ' text-xl! leading-none!'"></i>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  teamMembers: any[] = [
    {
      name: 'Annette Black',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-f-1.png',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Leslie Alexander',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-f-2.png',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Ralph Edward',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-m-1.png',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Robert Fox',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-m-2.png',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Albert Flores',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-m-3.png',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Esther Howard',
      role: 'Project Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle-big/avatar-f-3.png',
      socials: ['twitter', 'github', 'facebook'],
    },
  ];
}
