import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-16">
      <div class="text-center mb-12">
        <div class="font-bold text-surface-900 dark:text-surface-0 text-4xl leading-tight">Who we are</div>
        <div class="text-surface-600 dark:text-surface-200 text-xl leading-normal mt-3.5">Faucibus ornare suspendisse sed nisi. Nisl rhoncus mattis rhoncus urna neque viverra justo nec.</div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
        @for (member of teamMembers; track member.name) {
          <div class="relative group h-77 rounded-2xl">
            <img [src]="member.image" [alt]="member.name" class="w-full h-full object-cover rounded-2xl group-hover:grayscale transition-all" />
            <div
              class="absolute inset-0 p-8 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all rounded-2xl bg-[linear-gradient(0deg,rgba(0,0,0,0.70)_0%,rgba(0,0,0,0.70)_100%),linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.00)_100%)]"
            >
              <div class="flex flex-col gap-2">
                <h4 class="text-xl text-white font-medium leading-normal">{{ member.name }}</h4>
                <span class="text-white/70 text-base font-medium leading-tight">{{ member.role }}</span>
              </div>
              <p class="text-white text-sm leading-normal flex-1">{{ member.bio }}</p>
              <ul class="flex items-center gap-4">
                @for (icon of member.socials; track icon) {
                  <li>
                    <div class="w-6 h-6">
                      <i [ngClass]="'pi pi-' + icon + ' text-white! text-xl! cursor-pointer'"></i>
                    </div>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  teamMembers = [
    {
      name: 'Kristin Watson',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-5.png',
      bio: 'Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit massa enim nec dui nunc mattis enim ut tellus.',
      socials: ['instagram', 'facebook'],
    },
    {
      name: 'Theresa Webb',
      role: 'Product Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-6.png',
      bio: 'Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit massa enim nec dui nunc mattis enim ut tellus.',
      socials: ['instagram', 'facebook'],
    },
    {
      name: 'Esther Howard',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-7.png',
      bio: 'Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit massa enim nec dui nunc mattis enim ut tellus.',
      socials: ['instagram', 'facebook'],
    },
    {
      name: 'Darlene Robertson',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-8.png',
      bio: 'Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit massa enim nec dui nunc mattis enim ut tellus.',
      socials: ['instagram', 'facebook'],
    },
  ];
}
