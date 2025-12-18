import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-14">
        <div class="flex flex-col items-center gap-8">
          <div class="flex flex-col items-center gap-2">
            <h2 class="text-4xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Meet the team</h2>
            <p class="max-w-168 text-xl text-surface-600 dark:text-surface-300 leading-normal text-center">
              Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl vel pretium lectus quam id leo in. Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
            </p>
          </div>
          <button pButton [rounded]="true" [outlined]="true" severity="secondary" iconPos="right">
            <span pButtonLabel>All Team</span>
            <i pButtonIcon class="pi pi-arrow-right"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-10">
          @for (member of teamMembers; track member.name) {
            <div class="flex flex-col gap-4">
              <div class="relative w-full md:w-[19.35714rem] h-100">
                <img class="w-full h-full object-cover rounded-2xl" [src]="member.image" [alt]="member.name" />
                <div
                  class="absolute w-fit inset-x-4 bottom-4 p-2 flex items-center gap-6 rounded-lg bg-white/20 shadow-[0px_0px_30px_0px_rgba(255,255,255,0.2),inset_0px_0px_50px_0px_rgba(0,0,0,0.05)] backdrop-blur-[5px]"
                >
                  @for (icon of member.socials; track icon) {
                    <a class="flex items-center justify-center cursor-pointer">
                      <i [ngClass]="'pi pi-' + icon + ' text-xl! leading-none! text-white'"></i>
                    </a>
                  }
                </div>
              </div>
              <div class="flex flex-col gap-2">
                <h4 class="text-xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ member.name }}</h4>
                <span class="text-surface-600 dark:text-surface-300 leading-tight">{{ member.role }}</span>
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
  ];
}
