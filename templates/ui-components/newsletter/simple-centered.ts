import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, InputGroupModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center justify-center gap-6">
        <div
          class="flex w-fit justify-center items-center gap-2 p-2 px-4 rounded-full border border-primary-200 dark:border-primary-700 bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-200 text-center text-base font-medium leading-5"
        >
          🔥 3.907 Businesses Already Subscribed
        </div>
        <div class="flex flex-col items-center justify-center gap-4">
          <div class="text-surface-900 dark:text-surface-0 font-bold text-2xl leading-tight">Join Our Design Community</div>
          <div class="text-surface-700 dark:text-surface-100 leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
        </div>
        <p-inputgroup class="max-w-md mt-4">
          <input pInputText placeholder="Email" />
          <button pButton>
            <i pButtonIcon class="pi pi-chevron-right"></i>
          </button>
        </p-inputgroup>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
