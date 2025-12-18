import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 p-20 flex flex-col justify-center items-center gap-12">
      <div class="flex flex-col items-center gap-4">
        <div class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight text-center">Continue Breaking Records</div>
        <div class="text-surface-600 dark:text-surface-200 text-lg font-normal leading-normal text-center">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>

      <div class="bg-surface-0 dark:bg-surface-800 shadow-sm rounded-xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (item of stats; track item.title; let index = $index) {
            <div class="p-2 flex flex-col gap-6">
              <div class="flex flex-col gap-6">
                <i [ngClass]="item.icon" class="text-4xl! text-primary"></i>
                <div class="text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">{{ item.title }}</div>
              </div>
              <div class="text-surface-500 dark:text-surface-400 font-normal leading-normal">{{ item.description }}</div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  stats: any[] = [
    {
      icon: 'pi pi-users',
      title: '83M',
      description: 'Nostrum laborum accusamus quia iste facere possimus.',
    },
    {
      icon: 'pi pi-chart-line',
      title: '$256K',
      description: 'Nostrum laborum accusamus quia iste facere possimus.',
    },
    {
      icon: 'pi pi-globe',
      title: '1,453',
      description: 'Nostrum laborum accusamus quia iste facere possimus.',
    },
    {
      icon: 'pi pi-map',
      title: '45 km',
      description: 'Nostrum laborum accusamus quia iste facere possimus.',
    },
  ];
}
