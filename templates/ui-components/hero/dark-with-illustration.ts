import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-900 p-12 lg:p-20">
      <div class="flex flex-wrap lg:flex-row flex-col-reverse gap-12 items-center">
        <div class="flex-1 p-4">
          <h1 class="text-5xl font-bold text-white mb-4 leading-tight">
            Social CRM that helps you grow faster
            <span class="text-primary underline">for free</span>
          </h1>
          <p class="text-2xl text-gray-400 mb-8 leading-normal">Arcu cursus euismod quis viverra nibh cras. Amet justo donec enim diam vulputate ut.</p>
          <ul class="list-none flex flex-col gap-4">
            <li class="flex items-center gap-2">
              <i class="pi pi-trophy text-primary text-xl!"></i>
              <span class="text-gray-400 leading-normal">Senectus et netus et malesuada fames.</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-sparkles text-primary text-xl!"></i>
              <span class="text-gray-400 leading-normal">Orci a scelerisque purus semper eget.</span>
            </li>
            <li class="flex items-center gap-2">
              <i class="pi pi-bolt text-primary text-xl!"></i>
              <span class="text-gray-400 leading-normal">Aenean sed adipiscing diam donec adipiscing tristique.</span>
            </li>
          </ul>
          <button pButton rounded size="large" class="mt-12">
            <span pButtonLabel>Claim Your Account</span>
          </button>
        </div>
        <div class="flex-1 text-center lg:text-right overflow-hidden">
          <img
            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/hero/Illustrations.svg"
            alt="Hero illustration"
            class="w-full max-w-md lg:w-auto lg:max-w-xl mx-auto"
          />
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
