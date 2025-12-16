import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-surface-0 dark:bg-surface-950 border border-surface-200 dark:border-surface-800 rounded-2xl p-4">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-sm uppercase tracking-widest text-primary">Navigation</p>
          <p class="font-semibold text-surface-900 dark:text-surface-0 text-xl">Acme</p>
        </div>
        <div class="flex gap-3">
          <a routerLink="/" class="text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary">Home</a>
          <a routerLink="/about" class="text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary">About</a>
          <a routerLink="/contact" class="text-sm font-medium text-surface-600 dark:text-surface-300 hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  `,
})
export class __CLASS_NAME__ {}
