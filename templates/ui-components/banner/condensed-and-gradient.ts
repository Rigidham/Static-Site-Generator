import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="pb-20 bg-surface-0 dark:bg-surface-950">
      <div class="shadow flex items-center gap-6 md:flex-row flex-col justify-between content-center py-4 px-6 lg:px-20 bg-linear-to-r from-surface-900 to-surface-600">
        <div class="flex items-center gap-6">
          <span class="w-11 h-11 inline-flex rounded-full justify-center items-center text-surface-0 bg-primary-500 shrink-0">
            <i class="pi pi-check-circle text-xl!"></i>
          </span>
          <div>
            <div class="text-surface-0 font-bold mb-0.5">Account Verification</div>
            <span class="text-surface-100">Libero voluptatum atque exercitationem praesentium provident odit aperiam.</span>
          </div>
        </div>
        <button pButton [rounded]="true" severity="secondary">
          <span pButtonLabel>Confirm Email</span>
          <i pButtonIcon class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
