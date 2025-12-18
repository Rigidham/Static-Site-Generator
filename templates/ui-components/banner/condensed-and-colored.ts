import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="pb-20 bg-surface-0 dark:bg-surface-950">
      <div class="bg-primary text-primary-contrast py-4 px-8 lg:px-20 flex justify-between items-center flex-wrap shadow">
        <div class="font-bold flex items-center gap-2">
          <i class="pi pi-sparkles text-xl!"></i>
          <span>Hot Deals!</span>
        </div>
        <div class="items-center flex">
          <span class="hidden lg:block leading-normal">Libero voluptatum atque exercitationem praesentium provident odit.</span>
          <a class="flex items-center ml-2 text-primary-contrast underline font-bold cursor-pointer">Learn More</a>
        </div>
        <button pButton [text]="true" [rounded]="true" severity="secondary" class="text-surface-0! dark:text-surface-900! hover:bg-primary-emphasis!">
          <i pButtonIcon class="pi pi-times"></i>
        </button>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
