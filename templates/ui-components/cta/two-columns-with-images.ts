import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col lg:flex-row gap-8">
        <div class="w-full lg:w-6/12 p-10 bg-primary-600 rounded-xl">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-4 grow">
              <div class="text-surface-0 text-4xl font-medium leading-tight">Magna fringilla urna $0 per month</div>
              <p class="leading-normal text-primary-100 text-lg mt-0 mb-6">
                Quisque sagittis purus sit amet volutpat consequat mauris nunc. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.
              </p>
            </div>

            <button pButton type="button" severity="contrast" class="w-fit shrink-0">
              <span pButtonLabel>Try It Free</span>
            </button>
          </div>
        </div>
        <div class="w-full lg:w-6/12 p-10 bg-primary-600 rounded-xl">
          <div class="mb-4 flex flex-wrap gap-4 [&>img]:grayscale">
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-2.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-3.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-4.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-4.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-5.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-5.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-6.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-6.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-7.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-7.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-8.png" class="w-12" />
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-8.png" class="w-12" />
          </div>
          <div class="text-surface-0 text-4xl font-medium mb-4 leading-tight">Join our community</div>
          <p class="leading-normal text-primary-100 text-lg m-0">Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. At ultrices mi tempus imperdiet nulla malesuada.</p>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
