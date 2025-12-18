import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-surface-900 px-8 py-20 flex flex-col justify-center items-start gap-8">
      <div class="flex flex-col justify-center items-center gap-4 w-full">
        <div class="text-surface-500 dark:text-surface-400 text-lg font-semibold leading-tight">DISCOVER THE POTENTIAL</div>
        <div class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight">One Simple Platform</div>
      </div>

      <div class="self-stretch flex gap-8 lg:flex-row flex-col">
        <div class="flex-1 bg-surface-50 dark:bg-surface-800 shadow-inner rounded-xl flex justify-center items-center p-8 min-h-[28.57rem]">
          @if (activeTab1() === 0) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1.jpg"
              alt="Feature tab"
              class="w-100 h-auto shadow-xl rounded-xl flex dark:hidden object-cover"
            />
          }
          @if (activeTab1() === 1) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2.jpg"
              alt="Feature tab"
              class="w-100 h-auto shadow-xl rounded-xl flex dark:hidden object-cover"
            />
          }
          @if (activeTab1() === 2) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3.jpg"
              alt="Feature tab"
              class="w-100 h-auto shadow-xl rounded-xl flex dark:hidden object-cover"
            />
          }

          @if (activeTab1() === 0) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-1-dark.jpg"
              alt="Feature tab"
              class="w-100 h-auto rounded-xl border border-surface-700 hidden dark:flex object-cover"
            />
          }
          @if (activeTab1() === 1) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-2-dark.jpg"
              alt="Feature tab"
              class="w-100 h-auto rounded-xl border border-surface-700 hidden dark:flex object-cover"
            />
          }
          @if (activeTab1() === 2) {
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/tab-3-dark.jpg"
              alt="Feature tab"
              class="w-100 h-auto rounded-xl border border-surface-700 hidden dark:flex object-cover"
            />
          }
        </div>

        <div class="flex-1 flex flex-col min-h-[28.57rem]">
          <div class="flex flex-1" (mouseover)="activeTab1.set(0)">
            <div class="w-px bg-primary" [ngClass]="{ 'bg-surface-200 dark:bg-surface-700': activeTab1() !== 0 }"></div>
            <div class="flex-1 p-6 flex flex-col gap-2" [ngClass]="{ 'bg-linear-to-r from-primary-50/50 dark:from-primary/10 to-primary-50/0': activeTab1() === 0 }">
              <div class="text-xl font-semibold leading-tight" [ngClass]="activeTab1() === 0 ? 'text-primary dark:text-primary' : 'text-surface-900 dark:text-surface-0'">Optimize your apps</div>
              <div class="text-base leading-normal" [ngClass]="activeTab1() === 0 ? 'text-primary-700 dark:text-primary-400' : 'text-surface-500 dark:text-surface-400'">
                Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.
              </div>
            </div>
          </div>

          <div class="flex flex-1" (mouseover)="activeTab1.set(1)">
            <div class="w-px bg-surface-200 dark:bg-surface-700" [ngClass]="{ 'bg-primary': activeTab1() === 1 }"></div>
            <div class="flex-1 p-6 flex flex-col gap-2" [ngClass]="{ 'bg-linear-to-r from-primary-50/50 dark:from-primary/10 to-primary-50/0': activeTab1() === 1 }">
              <div class="text-xl font-semibold leading-tight" [ngClass]="activeTab1() === 1 ? 'text-primary dark:text-primary' : 'text-surface-900 dark:text-surface-0'">Analyze competitors</div>
              <div class="text-base leading-normal" [ngClass]="activeTab1() === 1 ? 'text-primary-700 dark:text-primary-400' : 'text-surface-500 dark:text-surface-400'">
                Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.
              </div>
            </div>
          </div>

          <div class="flex flex-1" (mouseover)="activeTab1.set(2)">
            <div class="w-px bg-surface-200 dark:bg-surface-700" [ngClass]="{ 'bg-primary': activeTab1() === 2 }"></div>
            <div class="flex-1 p-6 flex flex-col gap-2" [ngClass]="{ 'bg-linear-to-r from-primary-50/50 dark:from-primary/10 to-primary-50/0': activeTab1() === 2 }">
              <div class="text-xl font-semibold leading-tight" [ngClass]="activeTab1() === 2 ? 'text-primary dark:text-primary' : 'text-surface-900 dark:text-surface-0'">Track progress</div>
              <div class="text-base leading-normal" [ngClass]="activeTab1() === 2 ? 'text-primary-700 dark:text-primary-400' : 'text-surface-500 dark:text-surface-400'">
                Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Nunc non blandit massa enim nec dui nunc mattis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  activeTab1 = signal(0);
}
