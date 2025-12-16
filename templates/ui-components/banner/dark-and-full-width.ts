import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="pb-20 bg-surface-0 dark:bg-surface-950">
      <div class="bg-surface-900 text-surface-100 py-4 px-6 lg:px-20 flex justify-between items-center flex-wrap gap-4">
        <div class="font-bold flex items-center gap-2">
          <span>🔥 Hot Deals!</span>
        </div>
        <div class="inline-flex gap-1 items-center text-sm leading-normal max-w-xl">
          <span class="hidden lg:flex">Libero voluptatum atque exercitationem praesentium provident odit.</span>
          <a class="text-surface-0 underline font-bold" href="#">Learn More</a>
        </div>
        <button pButton [text]="true" [rounded]="true" severity="secondary" class="text-surface-0! hover:bg-surface-500/20!">
          <i pButtonIcon class="pi pi-times"></i>
        </button>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
