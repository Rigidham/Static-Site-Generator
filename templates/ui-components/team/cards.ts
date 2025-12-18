import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col gap-8">
        <div class "flex flex-col gap-4 text-center">
          <h2 class="text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Meet the People</h2>
          <p class="text-xl text-surface-600 dark:text-surface-200 leading-normal">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div class="flex justify-center flex-col lg:flex-row gap-8 lg:gap-12">
          @for (member of teamMembers; track member.name) {
            <div class="bg-surface-0 dark:bg-surface-900 rounded-2xl shadow-sm p-6 flex flex-col gap-4">
              <img [src]="member.image" [alt]="member.name" class="w-full rounded-2xl" />
              <div class="flex justify-between items-center gap-6">
                <div class="flex flex-col gap-2">
                  <h4 class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ member.name }}</h4>
                  <span class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ member.role }}</span>
                </div>
                <div class="flex gap-2">
                  @for (icon of member.socials; track icon) {
                    <button pButton [rounded]="true" [outlined]="true" severity="secondary">
                      <i pButtonIcon [ngClass]="'pi pi-' + icon"></i>
                    </button>
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
      name: 'Claire Davies',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-f-1.jpg',
      socials: ['twitter', 'github'],
    },
    {
      name: 'Albert Flores',
      role: 'Team Leader',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-m-1.jpg',
      socials: ['twitter', 'github'],
    },
    {
      name: 'Eleanor Pena',
      role: 'Product Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-f-2.jpg',
      socials: ['twitter', 'github'],
    },
  ];
}
