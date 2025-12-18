import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex lg:flex-row flex-col lg:text-left text-center items-center justify-center gap-6">
        <div class="w-full lg:flex-1 flex flex-col gap-4">
          <div class="text-surface-900 dark:text-surface-0 font-bold text-2xl leading-tight">
            Get our weekly updates and <span class="text-primary">free stuff!</span>
          </div>
          <div class="text-surface-600 dark:text-surface-400 text-xl leading-normal">Join our community to get weekly updates and unique gifts every friday.</div>
        </div>
        <div class="flex gap-4 sm:w-fit w-full items-center justify-center flex-wrap">
          <input pInputText [(ngModel)]="email" type="email" placeholder="Email" />
          <button pButton>
            <span pButtonLabel>Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  email: string = '';
}
