import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 px-6 lg:px-20 py-20 flex flex-col justify-center items-center gap-12">
      <div class="self-stretch flex flex-col gap-4">
        <div class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight">From the blog</div>
        <div class="text-surface-600 dark:text-surface-200 text-lg leading-normal">
          Excepteur sint occaecat cupidatat non proident.<br />
          Sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div class="self-stretch flex gap-8 lg:flex-row flex-col">
        <div class="flex-1 flex flex-col gap-8">
          <div class="h-[332px] p-8 rounded-xl flex flex-col gap-4 relative">
            <img class="absolute inset-0 w-full h-full object-cover rounded-xl" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-12.jpg" alt="Blog Image" />
            <div class="absolute inset-0 bg-linear-to-t from-surface-900 to-transparent rounded-xl"></div>
            <div class="relative z-10 flex flex-col h-full">
              <div class="flex gap-2">
                <div class="bg-sky-100 dark:bg-sky-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                  <span class="text-sky-700 dark:text-sky-300 text-sm font-bold">Science</span>
                </div>
                <div class="bg-orange-100 dark:bg-orange-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                  <span class="text-orange-700 dark:text-orange-300 text-sm font-bold">Good Read</span>
                </div>
              </div>
              <div class="mt-auto flex flex-col gap-2">
                <div class="text-surface-0 text-lg font-medium leading-tight">What will the planet look like in 50 years?</div>
                <div class="text-surface-0/80 text-base leading-normal">Ullamcorper dignissim cras tincidunt lobortis. Lorem ipsum dolor sit amet consectetur. Bibendum ut tristique et egestas.</div>
                <div class="text-surface-0/70 text-base font-medium leading-tight">3 days ago</div>
              </div>
            </div>
          </div>

          <div class="p-8 bg-surface-0 dark:bg-surface-800 rounded-xl shadow-sm flex flex-col gap-4">
            <div class="flex gap-2">
              <div class="bg-sky-100 dark:bg-sky-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                <span class="text-sky-700 dark:text-sky-300 text-sm font-bold">Pollution</span>
              </div>
              <div class="bg-surface-100 dark:bg-surface-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                <span class="text-surface-700 dark:text-surface-300 text-sm font-bold">Debate</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">How Much Carbon Dioxide Are We Emitting?</div>
              <div class="text-surface-600 dark:text-surface-200 text-base leading-normal">Bibendum ut tristique et egestas. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.</div>
            </div>
            <div class="text-surface-500 text-base font-medium leading-tight">4 days ago</div>
          </div>
        </div>

        <div class="flex-1 flex flex-col gap-8">
          <div class="p-8 bg-surface-0 dark:bg-surface-800 rounded-xl shadow-sm flex flex-col gap-4">
            <div class="flex gap-2">
              <div class="bg-sky-100 dark:bg-sky-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                <span class="text-sky-700 dark:text-sky-300 text-sm font-bold">Science</span>
              </div>
              <div class="bg-orange-100 dark:bg-orange-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                <span class="text-orange-700 dark:text-orange-300 text-sm font-bold">Good Read</span>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight">The Earth is changing</div>
              <div class="text-surface-600 dark:text-surface-200 text-base leading-normal">u sem integer vitae justo. Elit at imperdiet dui accumsan sit amet. Tristique risus nec feugiat in fermentum posuere urna.</div>
            </div>
            <div class="text-surface-500 text-base font-medium leading-tight">4 days ago</div>
          </div>

          <div class="h-[332px] p-8 rounded-xl flex flex-col gap-4 relative">
            <img class="absolute inset-0 w-full h-full object-cover rounded-xl" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/blog/blog-13.jpg" alt="Blog Image" />
            <div class="absolute inset-0 bg-linear-to-t from-surface-900 to-transparent rounded-xl"></div>
            <div class="relative z-10 flex flex-col h-full">
              <div class="flex gap-2">
                <div class="bg-emerald-100 dark:bg-emerald-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                  <span class="text-emerald-700 dark:text-emerald-300 text-sm font-bold">Editor's Choice</span>
                </div>
                <div class="bg-sky-100 dark:bg-sky-400/30 px-2 py-1 rounded-md flex items-center justify-center">
                  <span class="text-sky-700 dark:text-sky-300 text-sm font-bold">Quick Read</span>
                </div>
              </div>
              <div class="mt-auto flex flex-col gap-2">
                <div class="text-surface-0 text-lg font-medium leading-tight">Climate-fueled disasters are increasing</div>
                <div class="text-surface-0/80 text-base leading-normal">Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus.</div>
                <div class="text-surface-0/70 text-base font-medium leading-tight">5 days ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
