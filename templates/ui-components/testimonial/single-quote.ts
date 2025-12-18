import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-8 md:p-12 lg:p-20">
      <div class="flex flex-col gap-10 max-w-5xl mx-auto">
        <div class="flex flex-col gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" viewBox="0 0 40 31" fill="none" class="fill-surface-400 dark:fill-surface-500">
            <path
              d="M3.55112 28.3277C1.24054 25.8481 0 23.067 0 18.5587C0 10.6257 5.51175 3.51546 13.527 0L15.5303 3.12335C8.0489 7.21225 6.58628 12.5183 6.00303 15.8638C7.20767 15.2337 8.7847 15.0138 10.3303 15.1589C14.3772 15.5374 17.5672 18.8942 17.5672 23.067C17.5672 25.1709 16.74 27.1887 15.2675 28.6765C13.7951 30.1642 11.798 31 9.71566 31C7.30862 31 5.00701 29.8894 3.55112 28.3277ZM25.984 28.3277C23.6734 25.8481 22.4328 23.067 22.4328 18.5587C22.4328 10.6257 27.9446 3.51546 35.9598 0L37.9631 3.12335C30.4817 7.21225 29.0191 12.5183 28.4359 15.8638C29.6405 15.2337 31.2175 15.0138 32.7632 15.1589C36.8101 15.5374 40 18.8942 40 23.067C40 25.1709 39.1728 27.1887 37.7004 28.6765C36.2279 30.1642 34.2309 31 32.1485 31C29.7415 31 27.4399 29.8894 25.984 28.3277Z"
            />
          </svg>

          <h1 class="text-3xl md:text-4xl leading-normal font-semibold tracking-tight text-surface-900 dark:text-surface-0">
            Aenean sed adipiscing diam donec adipiscing. In hendrerit gravida rutrum quisque non.
            <span class="text-surface-400 dark:text-surface-500">Adipiscing commodo elit at imperdiet dui. Ac feugiat sed lectus vestibulum mattis ullamcorper.</span>
          </h1>
        </div>

        <div class="flex items-center gap-4">
          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png" alt="Robert William" class="w-16 h-16 rounded-full object-cover" />
          <div class="flex flex-col gap-2">
            <span class="text-xl leading-tight font-medium text-surface-900 dark:text-surface-0">Robert William</span>
            <span class="text-lg leading-tight text-surface-400 dark:text-surface-500">Product Manager</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
