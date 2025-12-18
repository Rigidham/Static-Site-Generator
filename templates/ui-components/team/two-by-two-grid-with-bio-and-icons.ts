import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-17.5">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Our team</h2>
          <p class="max-w-168 text-xl text-surface-600 dark:text-surface-300 leading-normal text-center">
            Diam quis enim lobortis scelerisque fermentum dui faucibus. Adipiscing bibendum est ultricies integer quis auctor elit sed.
          </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-14 w-fit mx-auto">
          @for (member of teamMembers; track member.name) {
            <div class="flex sm:flex-row flex-col gap-8 items-start sm:items-center">
              <div class="w-full sm:w-62 h-[16.85714rem] rounded-2xl bg-surface-200 dark:bg-surface-800" [style]="'background: url(' + member.image + ') center/cover no-repeat'"></div>
              <div class="flex-1 flex flex-col gap-6">
                <div class="flex flex-col gap-2">
                  <h4 class="text-xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ member.name }}</h4>
                  <span class="text-surface-600 dark:text-surface-300 leading-tight">{{ member.role }}</span>
                </div>
                <p class="text-base text-surface-600 dark:text-surface-300 leading-normal">{{ member.bio }}</p>
                <div class="flex items-center gap-2">
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
    </div>
  `,
})
export class __CLASS_NAME__ {
  teamMembers: any[] = [
    {
      name: 'Jacob Jones',
      role: 'Web Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-17.jpg',
      bio: 'Enim ut tellus elementum sagittis vitae et. Augue neque gravida in fermentum et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Jenny Wilson',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-18.jpg',
      bio: 'Enim ut tellus elementum sagittis vitae et. Augue neque gravida in fermentum et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Cameron Williamson',
      role: 'CEO',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-19.jpg',
      bio: 'Enim ut tellus elementum sagittis vitae et. Augue neque gravida in fermentum et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
      socials: ['twitter', 'github', 'facebook'],
    },
    {
      name: 'Robert Fox',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-20.jpg',
      bio: 'Enim ut tellus elementum sagittis vitae et. Augue neque gravida in fermentum et. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.',
      socials: ['twitter', 'github', 'facebook'],
    },
  ];
}
