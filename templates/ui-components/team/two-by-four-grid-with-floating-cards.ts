import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-100 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-17.5">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-[3.28125rem] font-semibold text-surface-900 dark:text-surface-0 leading-tight text-center md:text-left">Company Leadership</h2>
          <p class="max-w-168 text-xl text-surface-600 dark:text-surface-300 leading-normal text-center">
            Diam quis enim lobortis scelerisque fermentum dui faucibus. Adipiscing bibendum est ultricies integer quis auctor elit sed.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-336 mx-auto">
          @for (member of teams; track member.name; let index = $index) {
            <div class="h-100 rounded-3xl relative bg-surface-200 dark:bg-surface-800">
              <img class="w-full h-full object-cover rounded-3xl" [style]="'object-position: ' + (member.imagePosition || 'center')" [src]="member.image" [alt]="member.name" />
              <div class="absolute -bottom-px inset-x-0 bg-surface-0 dark:bg-surface-950 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] rounded-3xl">
                <div class="px-5 py-5 flex flex-col gap-3">
                  <div class="flex flex-col gap-2">
                    <h4 class="text-xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ member.name }}</h4>
                    <span class="text-surface-600 dark:text-surface-500 leading-tight">{{ member.job }}</span>
                  </div>
                  <div class="h-px bg-surface-200 dark:bg-surface-800"></div>
                  <div class="flex items-center gap-2">
                    @for (social of getSocialLinks(member.socials); track social.key) {
                      <a [href]="social.url" class="flex items-center justify-center">
                        <i [ngClass]="'pi pi-' + social.key + ' text-xl! leading-none! text-surface-600 dark:text-surface-400'"></i>
                      </a>
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
  teams: any[] = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-17.jpg',
      name: 'Jacob Jones',
      job: 'Web Designer',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-18.jpg',
      name: 'Jenny Wilson',
      job: 'Team Leader',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-19.jpg',
      name: 'Cameron Williamson',
      job: 'CFO',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-20.jpg',
      name: 'Robert Fox',
      job: 'Software Developer',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-16.png',
      name: 'Sophia Perez',
      job: 'Content Strategist',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-12.png',
      name: 'Emma Thompson',
      job: 'UX/UI Designer',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-13.png',
      name: 'Ethan Brown',
      job: 'Software Developer',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-21.jpg',
      name: 'Lucas Martin',
      job: 'CEO',
      socials: {
        twitter: '#',
        github: '#',
        facebook: '#',
      },
    },
  ];

  getSocialLinks(socials: any): { key: string; url: string }[] {
    return Object.keys(socials).map((key) => ({
      key,
      url: socials[key],
    }));
  }
}
