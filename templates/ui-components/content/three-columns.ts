import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950">
      <div
        class="bg-cover bg-center h-[420px] flex flex-col justify-end gap-4"
        style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%), url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-4.png')"
      >
        <div class="px-6 md:px-12 lg:px-20">
          <div class="grid grid-cols-12 gap-8">
            <div class="hidden lg:block col-span-2"></div>

            <div class="col-span-12 lg:col-span-8 py-4 lg:py-8 flex flex-col gap-4">
              <h1 class="text-3xl lg:text-5xl font-bold text-white leading-tight">Create Your Own PrimeBlock with Built-in Dark Mode</h1>
              <p class="text-sm lg:text-base text-white leading-normal">Published May 16, 2025 by Jessica Doe</p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-6 md:px-12 lg:px-20 py-4">
        <div class="grid grid-cols-12 gap-4 lg:gap-8">
          <div class="col-span-12 lg:col-span-2">
            <div class="flex flex-row lg:flex-col justify-start lg:border-r border-surface-200 dark:border-surface-700 p-4 gap-8 lg:gap-4">
              <div class="flex items-center justify-end gap-4">
                <span class="text-surface-900 dark:text-surface-0 font-normal">71</span>
                <i class="pi pi-bookmark text-surface-600 dark:text-surface-400"></i>
              </div>
              <div class="flex items-center justify-end gap-4">
                <span class="text-surface-900 dark:text-surface-0 font-normal">288</span>
                <i class="pi pi-heart text-surface-600 dark:text-surface-400"></i>
              </div>
              <div class="flex items-center justify-end gap-4">
                <span class="text-surface-900 dark:text-surface-0 font-normal">34</span>
                <i class="pi pi-comments text-surface-600 dark:text-surface-400"></i>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-7 flex flex-col gap-8 py-4">
            <div class="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">
              <div class="flex flex-wrap gap-4">
                <span class="bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-0 text-sm font-semibold px-4 py-2 rounded">New</span>
                <span class="bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-0 text-sm font-semibold px-4 py-2 rounded">Technology</span>
                <span class="bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-0 text-sm font-semibold px-4 py-2 rounded">Education</span>
              </div>
              <div class="flex items-center gap-6">
                <i class="pi pi-twitter text-surface-600 dark:text-surface-400 cursor-pointer"></i>
                <i class="pi pi-facebook text-surface-600 dark:text-surface-400 cursor-pointer"></i>
                <i class="pi pi-link text-surface-600 dark:text-surface-400 cursor-pointer"></i>
              </div>
            </div>

            <div class="flex flex-col gap-6">
              <p class="text-lg text-surface-900 dark:text-surface-0 leading-normal mb-2">
                Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus egestas sed. Dui ut ornare lectus sit. Massa ultricies mi quis hendrerit.
              </p>

              <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
                Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at
                elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper. Vitae elementum
                curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo
                urna molestie at.
              </p>

              <blockquote class="pl-8 text-lg text-surface-500 dark:text-surface-400 leading-normal py-4">
                "In short, GPU.js is a JavaScript acceleration library that can be used for general-purpose computations on GPUs using JavaScript. It supports browsers, Node.js and TypeScript."
              </blockquote>

              <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
                Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla. Laculis urna id
                volutpat lacus laoreet.
              </p>

              <div class="text-base text-surface-700 dark:text-surface-300 leading-normal">
                Nunc sed velit dignissim sodales ut.<br />
                Lorem mollis aliquam ut porttitor.<br />
                Urna nec tincidunt praesent semper feugiat nibh sed.
              </div>

              <div class="flex flex-col items-center gap-2 py-2">
                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-3.svg" alt="Image" class="w-full h-70 object-cover rounded-lg" />
                <p class="text-sm text-surface-700 dark:text-surface-300 leading-tight text-center">Id porta nibh venenatis cras sed felis eget velit.</p>
              </div>

              <h2 class="text-xl font-medium text-surface-900 dark:text-surface-0 leading-tight">Massa vitae tortor condimentum lacinia</h2>

              <p class="text-base text-surface-700 dark:text-surface-300 leading-normal mb-2">
                Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac tincidunt vitae semper
                quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo.
              </p>

              <div class="flex justify-between items-center bg-primary text-primary-contrast py-4 px-8 rounded-md">
                <span class="text-xl font-medium">Content Section Title</span>
                <div class="flex items-center gap-2 cursor-pointer">
                  <span class="font-medium">View Post Statistics</span>
                  <i class="pi pi-arrow-right text-base!"></i>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-3 lg:border-l border-surface-200 dark:border-surface-700">
            <div class="p-4">
              <div class="flex border-b border-surface pb-4 mb-4">
                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" class="mr-4 h-20 w-20" />
                <div class="flex flex-col items-start gap-2">
                  <span class="text-lg text-surface-900 dark:text-surface-0 font-medium">Jessica Doe</span>
                  <span class="text-surface-600 dark:text-surface-200 font-medium">1.7K Followers</span>
                  <button pButton [rounded]="true">
                    <span pButtonLabel>Follow</span>
                  </button>
                </div>
              </div>
              <span class="text-surface-900 dark:text-surface-0 font-medium text-xl block mb-4">Other Posts</span>
              <div class="flex flex-col gap-4 mb-8">
                <div class="flex p-2">
                  <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-5.png" class="mr-4 h-20 w-20" />
                  <div class="flex flex-col items-start gap-2">
                    <span class="text-lg text-surface-900 dark:text-surface-0 font-medium">Post Title</span>
                    <span class="text-surface-600 dark:text-surface-200">Metus aliquam eleifend mi in nulla posuere.</span>
                  </div>
                </div>
                <div class="flex p-2">
                  <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-6.png" class="mr-4 h-20 w-20" />
                  <div class="flex flex-col items-start gap-2">
                    <span class="text-lg text-surface-900 dark:text-surface-0 font-medium">Post Title</span>
                    <span class="text-surface-600 dark:text-surface-200">Metus aliquam eleifend mi in nulla posuere.</span>
                  </div>
                </div>
                <div class="flex p-2">
                  <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-7.png" class="mr-4 h-20 w-20" />
                  <div class="flex flex-col items-start gap-2">
                    <span class="text-lg text-surface-900 dark:text-surface-0 font-medium">Post Title</span>
                    <span class="text-surface-600 dark:text-surface-200">Metus aliquam eleifend mi in nulla posuere.</span>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-4">
                <div
                  class="w-full h-full p-4 rounded-border"
                  style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-8.png')"
                >
                  <span class="text-white font-medium mb-4">Post Title</span>
                  <span class="text-white/70 block leading-normal">Metus aliquam eleifend mi innulla posuere.</span>
                </div>
                <div
                  class="w-full h-full p-4 rounded-border"
                  style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-9.png')"
                >
                  <span class="text-white font-medium mb-4">Post Title</span>
                  <span class="text-white/70 block leading-normal">Metus aliquam eleifend mi innulla posuere.</span>
                </div>
                <div
                  class="w-full h-full p-4 rounded-border"
                  style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-10.png')"
                >
                  <span class="text-white font-medium mb-4">Post Title</span>
                  <span class="text-white/70 block leading-normal">Metus aliquam eleifend mi in nulla posuere.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
