import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-hidden">
      <div class="bg-surface-0 dark:bg-surface-950 px-6 py-14 lg:py-20 md:px-12 lg:px-20">
        <div class="flex items-start lg:flex-row flex-col gap-8">
          <div class="w-full flex-1">
            <div class="text-surface-900 dark:text-surface-0 font-medium mb-4 text-base leading-normal uppercase">Contact Us</div>
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold mb-4 leading-tight">GET IN TOUCH</div>
            <p class="text-surface-700 dark:text-surface-0/70 leading-normal text-base pr-0 lg:pr-8">
              Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.
            </p>
          </div>
          <div class="w-full flex-1 flex md:flex-row flex-col items-start gap-8">
            <div class="flex-1 flex items-start gap-4 p-4">
              <div class="w-12 h-12 flex items-center justify-center bg-surface-100 dark:bg-surface-800 rounded-xl">
                <i class="pi pi-map-marker text-2xl! leading-none! text-surface-900 dark:text-surface-0"></i>
              </div>
              <div class="flex-1">
                <span class="text-xl text-surface-900 dark:text-surface-0 mb-2 font-medium leading-tight">Address</span>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal text-base">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</p>
              </div>
            </div>
            <div class="flex-1 flex items-start gap-4 p-4">
              <div class="w-12 h-12 flex items-center justify-center bg-surface-100 dark:bg-surface-800 rounded-xl">
                <i class="pi pi-inbox text-2xl! leading-none! text-surface-900 dark:text-surface-0"></i>
              </div>
              <div class="flex-1">
                <span class="text-xl text-surface-900 dark:text-surface-0 mb-2 font-medium leading-tight">Email</span>
                <p class="text-surface-700 dark:text-surface-0/70 leading-normal text-base">hello@alfred.co</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt="Map" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-3.jpg" class="w-full min-h-80 object-cover" />
    </div>
  `,
})
export class __CLASS_NAME__ {}
