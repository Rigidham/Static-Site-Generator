import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-4 pr-0 lg:pr-6">
          <div class="text-surface-900 dark:text-surface-0 text-5xl font-bold mb-4 leading-tight">Meet our team</div>
          <p class="text-surface-700 dark:text-surface-100 text-lg leading-normal">
            Enim diam vulputate ut pharetra sit amet aliquam id. Consequat nisl vel pretium lectus quam id leo in. Nibh sit amet commodo nulla facilisi nullam vehicula. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
          </p>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="grid grid-cols-12 gap-4">
            @for (member of teamMembers; track member.name) {
              <div class="col-span-12 lg:col-span-6 p-4">
                <div class="flex flex-col gap-4">
                  <img [src]="member.image" class="w-full h-64 rounded-2xl object-cover" [alt]="member.name" />
                  <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                      <div class="flex flex-col gap-2">
                        <div class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">{{ member.name }}</div>
                        <span class="leading-normal font-medium text-surface-600 dark:text-surface-200">{{ member.role }}</span>
                      </div>
                      <p class="leading-normal text-surface-700 dark:text-surface-300">{{ member.bio }}</p>
                    </div>
                    <div class="flex items-center gap-4">
                      @for (icon of member.socials; track icon) {
                        <a tabindex="0" class="cursor-pointer">
                          <i [ngClass]="'pi pi-' + icon + ' text-surface-600 dark:text-surface-200 text-2xl!'"></i>
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
    </div>
  `,
})
export class __CLASS_NAME__ {
  teamMembers = [
    {
      name: 'Jacob Jones',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-1.png',
      bio: 'Vulputate ut pharetra sit amet. Netus et malesuada fames ac turpis egestas. Elit eget gravida cum sociis natoque penatibus. Urna id volutpat lacus laoreet non curabitur. In ante metus dictum at.',
      socials: ['instagram', 'github', 'facebook'],
    },
    {
      name: 'Theresa Webb',
      role: 'Project Manager',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-2.png',
      bio: 'Risus feugiat in ante metus dictum. Et egestas quis ipsum suspendisse ultrices. Risus pretium quam vulputate dignissim suspendisse. Justo nec ultrices dui sapien.',
      socials: ['instagram', 'github', 'facebook'],
    },
    {
      name: 'Esther Howard',
      role: 'Software Developer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-3.png',
      bio: 'Donec et odio pellentesque diam volutpat commodo sed egestas. Blandit massa enim nec dui nunc mattis enim ut tellus. Suspendisse faucibus interdum posuere lorem ipsum.',
      socials: ['instagram', 'github', 'facebook'],
    },
    {
      name: 'Darlene Robertson',
      role: 'UI/UX Designer',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/team/team-4.png',
      bio: 'Pretium aenean pharetra magna ac placerat vestibulum. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim.',
      socials: ['instagram', 'github', 'facebook'],
    },
  ];
}
