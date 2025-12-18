import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-20 bg-surface-900 rounded-xl flex md:flex-row flex-col gap-8">
      @for (item of stats; track item.title; let index = $index) {
        <div class="flex flex-col flex-1 gap-4">
          <div class="text-6xl text-surface-0 font-medium leading-tight text-center">{{ item.title }}</div>
          <div class="text-xl text-surface-400 font-normal leading-normal text-center">{{ item.label }}</div>
        </div>
      }
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
  ];
}
