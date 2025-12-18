import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 lg:px-20 py-20 flex flex-col justify-center items-center">
      <div class="w-full mx-auto flex flex-col gap-12">
        <div class="flex flex-col gap-4">
          <h1 class="font-bold text-4xl text-surface-900 dark:text-surface-0 leading-tight">Recent News</h1>
          <p class="text-surface-700 dark:text-surface-300 leading-normal text-lg">Elementum nibh tellus molestie nunc non blandit. Enim eu turpis egestas pretium aenean pharetra.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="rounded-4xl pl-2 bg-linear-to-t from-red-500 to-orange-500 shadow">
            <div class="p-6 rounded-4xl bg-surface-0 dark:bg-surface-800 h-full -mr-1">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                  <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-4.png" shape="circle" size="large" />
                  <div class="flex flex-col">
                    <div class="font-medium text-surface-900 dark:text-surface-0">Arlene McCoy</div>
                    <div class="text-sm flex items-center text-surface-600 dark:text-surface-400 font-medium">
                      <span>9 July, 2022</span>
                      <div class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-700 mx-2"></div>
                      <span>16 min read</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="text-xl text-surface-900 dark:text-surface-0 font-medium leading-tight">'Real and imminent' extinction risk</div>
                  <div class="leading-normal text-surface-700 dark:text-surface-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-4xl pl-2 bg-linear-to-t from-fuchsia-500 to-violet-500 shadow">
            <div class="p-6 rounded-4xl bg-surface-0 dark:bg-surface-800 h-full -mr-1">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                  <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-11.png" shape="circle" size="large" />
                  <div class="flex flex-col">
                    <div class="font-medium text-surface-900 dark:text-surface-0">Dianne Russell</div>
                    <div class="text-sm flex items-center text-surface-600 dark:text-surface-400 font-medium">
                      <span>10 July, 2022</span>
                      <div class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-700 mx-2"></div>
                      <span>11 min read</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="text-xl text-surface-900 dark:text-surface-0 font-medium leading-tight">Climate standards for power plants</div>
                  <div class="leading-normal text-surface-700 dark:text-surface-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-4xl pl-2 bg-linear-to-t from-emerald-500 to-cyan-500 shadow">
            <div class="p-6 rounded-4xl bg-surface-0 dark:bg-surface-800 h-full -mr-1">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                  <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-9.png" shape="circle" size="large" />
                  <div class="flex flex-col">
                    <div class="font-medium text-surface-900 dark:text-surface-0">Ronald Richards</div>
                    <div class="text-sm flex items-center text-surface-600 dark:text-surface-400 font-medium">
                      <span>11 July, 2022</span>
                      <div class="w-1 h-1 rounded-full bg-surface-300 dark:bg-surface-700 mx-2"></div>
                      <span>7 min read</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="text-xl text-surface-900 dark:text-surface-0 font-medium leading-tight">Heat Waves Around the World</div>
                  <div class="leading-normal text-surface-700 dark:text-surface-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
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
