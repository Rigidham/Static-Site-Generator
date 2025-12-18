import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 p-20 flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight">🍕 Choice of all Ninja Turtles</div>
        <div class="text-surface-600 dark:text-surface-400 text-lg font-normal leading-tight">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-8 bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="text-primary font-medium leading-tight">Neapolitan</div>
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight">995</div>
          </div>
          <div class="text-surface-500 dark:text-surface-400 font-normal leading-normal">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</div>
        </div>
        <div class="p-8 bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="text-primary font-medium leading-tight">Pepperoni</div>
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight">1504</div>
          </div>
          <div class="text-surface-500 dark:text-surface-400 font-normal leading-normal">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</div>
        </div>
        <div class="p-8 bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="text-primary font-medium leading-tight">Margherita</div>
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight">2038</div>
          </div>
          <div class="text-surface-500 dark:text-surface-400 font-normal leading-normal">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</div>
        </div>
        <div class="p-8 bg-surface-0 dark:bg-surface-800 shadow-sm rounded-2xl flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="text-primary font-medium leading-tight">BBQ Chicken</div>
            <div class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight">766</div>
          </div>
          <div class="text-surface-500 dark:text-surface-400 font-normal leading-normal">Nostrum laborum accusamus quia iste facere possimus minus itaque error unde.</div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
