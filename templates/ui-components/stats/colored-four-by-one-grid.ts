import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 p-20 flex flex-col items-center gap-12">
      <div class="flex flex-col gap-4 text-center">
        <div class="text-primary text-xl font-semibold leading-tight">Growth Insights</div>
        <div class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight">Take your vision to the next level</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full justify-center">
        @for (item of stats; track item.label; let index = $index) {
          <div class="p-8 bg-primary-50/50 dark:bg-primary-400/10 rounded-2xl flex flex-col items-center gap-4">
            <i [ngClass]="item.icon" class="text-4xl! text-primary"></i>
            <div class="flex flex-col gap-2">
              <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium leading-tight text-center">
                {{ item.value }}
              </div>
              <div class="text-primary-600 dark:text-primary-400 text-lg font-medium leading-normal text-center">
                {{ item.label }}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  stats: any[] = [
    {
      icon: 'pi pi-video',
      value: '52000',
      label: 'Streams',
    },
    {
      icon: 'pi pi-heart',
      value: '21000',
      label: 'Engagement',
    },
    {
      icon: 'pi pi-clock',
      value: '71.2',
      label: 'Watch Time',
    },
    {
      icon: 'pi pi-thumbs-up',
      value: '4500',
      label: 'Likes',
    },
  ];
}
