import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center gap-2">
          <div class="text-primary font-semibold text-xl leading-tight">Who We Are</div>
          <h3 class="text-surface-900 dark:text-surface-0 font-semibold text-4xl leading-tight">Meet The Team Behind Bastion</h3>
        </div>
        <p class="text-surface-600 dark:text-surface-300 text-lg leading-normal">Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
        @for (member of teamMembers; track member.name) {
          <div class="relative h-100 rounded-lg overflow-hidden">
            <img class="w-full h-full object-cover" [src]="member.image" [alt]="member.name" />
            <div class="absolute inset-x-4 bottom-4 p-4 rounded-lg bg-white/10 shadow-[0px_0px_30px_0px_rgba(255,255,255,0.2),inset_0px_0px_50px_0px_rgba(0,0,0,0.28)] backdrop-blur-[5px]">
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <h3 class="font-light text-xl leading-tight text-surface-0">{{ member.name }}</h3>
                  <p class="text-sm leading-normal text-surface-0/70">{{ member.role }}</p>
                </div>
                <div class="flex gap-4">
                  @for (icon of member.socials; track icon) {
                    <a href="#" class="text-surface-0 hover:opacity-75 transition-all">
                      <i [ngClass]="'pi pi-' + icon + ' text-xl'"></i>
                    </a>
                  }
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
      socials: ['twitter', 'linkedin'],
    },
    {
      name: 'Brian Bargeman',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-11.png',
      socials: ['discord', 'linkedin'],
    },
    {
      name: 'Ronald Richards',
      role: 'Software Development Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-12.png',
      socials: ['github', 'twitter'],
    },
    {
      name: 'Albert Flores',
      role: 'Web Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-13.png',
      socials: ['twitter', 'github', 'discord', 'linkedin'],
    },
    {
      name: 'Leona Gunn',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-14.png',
      socials: ['twitter', 'github', 'discord', 'linkedin'],
    },
    {
      name: 'David Goodman',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-15.png',
      socials: ['twitter', 'github', 'discord'],
    },
    {
      name: 'Aleena Jones',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-16.png',
      socials: ['twitter', 'github', 'discord', 'linkedin'],
    },
  ];
}
