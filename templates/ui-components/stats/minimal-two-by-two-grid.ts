import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="px-6 md:px-12 lg:px-80 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        @for (item of stats; track item.title; let index = $index) {
          <div class="px-8 py-2 border-l-4 border-l-primary flex flex-col gap-3">
            <div class="text-primary text-6xl font-medium leading-tight">{{ item.title }}</div>
            <div class="text-xl font-medium leading-normal text-surface-600">{{ item.label }}</div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  stats: any[] = [
    {
      title: '1M+',
      label: 'Courses Completed',
    },
    {
      title: '72K+',
      label: 'Education Programs',
    },
    {
      title: '2.5M+',
      label: 'Students Ready for Success',
    },
    {
      title: '£20M+',
      label: 'Total Earnings',
    },
  ];
}
