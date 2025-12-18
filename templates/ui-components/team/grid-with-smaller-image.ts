import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4 text-center">
          <h2 class="text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">The Team</h2>
          <p class="text-xl text-surface-600 dark:text-surface-200 leading-normal">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="grid grid-cols-12 gap-6 text-center">
          @for (member of teamMembers; track member.name) {
            <div class="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2">
              <div class="flex flex-col gap-4 items-center">
                <img [src]="member.image" [alt]="member.name" class="w-24 h-24 object-cover rounded-full" />
                <div class="flex flex-col gap-2">
                  <h4 class="text-xl text-surface-900 dark:text-surface-0 font-medium leading-tight">{{ member.name }}</h4>
                  <span class="text-surface-500 dark:text-surface-400 leading-tight">{{ member.role }}</span>
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
      name: 'Savannah Nguyen',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png',
    },
    {
      name: 'Jenny Wilson',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
    },
    {
      name: 'Albert Flores',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
    },
    {
      name: 'Ralph Edwards',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-2.png',
    },
    {
      name: 'Eleanor Pena',
      role: 'Marketing Specialist',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png',
    },
    {
      name: 'Annette Black',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-4.png',
    },
    {
      name: 'Arlene McCoy',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-5.png',
    },
    {
      name: 'James Wilson',
      role: 'Product Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-3.png',
    },
    {
      name: 'Darlene Robertson',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-6.png',
    },
    {
      name: 'Kristin Watson',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-7.png',
    },
    {
      name: 'Floyd Miles',
      role: 'Software Tester',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-4.png',
    },
    {
      name: 'Jane Olivia',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-8.png',
    },
    {
      name: 'Robert Fox',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-5.png',
    },
    {
      name: 'Devon Lane',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-6.png',
    },
    {
      name: 'Jacob Davies',
      role: 'Accountant',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-7.png',
    },
    {
      name: 'Leslie Alexander',
      role: 'Financial Analyst',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-9.png',
    },
    {
      name: 'Guy Hawkins',
      role: 'Marketing Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-8.png',
    },
    {
      name: 'Jane Cooper',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-10.png',
    },
    {
      name: 'Michael Young',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-9.png',
    },
    {
      name: 'Dianne Russell',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-11.png',
    },
    {
      name: 'Oliver Daniels',
      role: 'Marketing Specialist',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-10.png',
    },
    {
      name: 'Josh Alison',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-11.png',
    },
    {
      name: 'Juan Alberto',
      role: 'Financial Planner',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-12.png',
    },
    {
      name: 'Julia Karen',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-12.png',
    },
  ];
}
