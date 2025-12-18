import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-14">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Our team</h2>
          <p class="max-w-168 text-xl text-surface-600 dark:text-surface-300 leading-normal text-center">Enim ut tellus elementum sagittis vitae et. Augue neque gravida in fermentum et.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          @for (member of teamMembers; track member.name) {
            <div class="group relative w-full md:w-[19.35714rem] h-100 cursor-pointer overflow-hidden rounded-xl">
              <img class="w-full h-full object-cover" [src]="member.image" [alt]="member.name" />

              <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div
                class="absolute z-20 p-2 right-4 md:-right-16 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-300 top-4 flex flex-col gap-6 rounded-lg bg-white/20 backdrop-blur-[5px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.05)_inset]"
              >
                @for (icon of member.socials; track icon) {
                  <a class="flex items-center justify-center cursor-pointer">
                    <i [ngClass]="'pi pi-' + icon + ' text-xl! leading-none! text-white'"></i>
                  </a>
                }
              </div>

              <div class="absolute z-20 opacity-0 group-hover:opacity-100 bottom-4 md:-bottom-16 group-hover:bottom-4 transition-all duration-300 left-4 right-4">
                <h4 class="text-xl font-semibold text-white leading-tight">{{ member.name }}</h4>
                <span class="text-white/70 leading-tight">{{ member.role }}</span>
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
      name: 'Mysha Feeney',
      role: 'Scrum Master',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-9.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Helena Larsen',
      role: 'President of Sales',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-10.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Jane Cooper',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-12.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Mysha Feeney',
      role: 'Scrum Master',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-21.jpg',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Albert Flores',
      role: 'Web Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-13.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Leona Gunn',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-14.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Aleena Jones',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-16.png',
      socials: ['discord', 'linkedin', 'twitter'],
    },
    {
      name: 'Aleena Jones',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-22.jpg',
      socials: ['discord', 'linkedin', 'twitter'],
    },
  ];
}
