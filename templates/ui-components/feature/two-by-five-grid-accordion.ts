import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 p-20 flex flex-col justify-start items-start gap-12">
      <div class="flex flex-col justify-start items-start gap-4 w-full">
        <h2 class="text-surface-900 dark:text-surface-0 text-2xl font-bold leading-tight w-full">More reasons people around the world prefer us</h2>
        <p class="text-surface-600 dark:text-surface-400 leading-normal w-full">Egestas dui id ornare arcu odio. Egestas fringilla phasellus faucibus scelerisque eleifend.</p>
      </div>

      <div class="flex flex-wrap lg:flex-nowrap gap-12 w-full">
        <div class="flex-1 w-full">
          <h3 class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight mb-4">Services</h3>
          <div class="flex flex-col gap-3 w-full">
            <p-accordion [multiple]="true" class="w-full space-y-3!" expandIcon="pi pi-chevron-right" collapseIcon="pi pi-chevron-down">
              @for (item of services; track item.title; let index = $index) {
                <p-accordion-panel [value]="index" class="border! border-surface-100! dark:border-surface-700! rounded-md! bg-transparent!">
                  <p-accordion-header class="p-5! border-0! bg-transparent!">
                    <div class="flex items-center gap-2 w-full">
                      <span class="inline-flex items-center justify-center rounded-[30px] w-8 h-8 p-2">
                        <i [ngClass]="['pi ' + item.icon, 'text-surface-600 dark:text-surface-400 text-base! leading-none!']"></i>
                      </span>
                      <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">{{ item.title }}</span>
                    </div>
                  </p-accordion-header>
                  <p-accordion-content class="bg-transparent!">
                    <p class="text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                  </p-accordion-content>
                </p-accordion-panel>
              }
            </p-accordion>
          </div>
        </div>

        <div class="flex-1 w-full">
          <h3 class="text-surface-900 dark:text-surface-0 text-lg font-medium leading-tight mb-4">Support</h3>
          <div class="flex flex-col gap-3">
            <p-accordion [multiple]="true" class="w-full space-y-3!" expandIcon="pi pi-chevron-right" collapseIcon="pi pi-chevron-down">
              @for (item of support; track item.title; let index = $index) {
                <p-accordion-panel [value]="index" class="border! border-surface-100! dark:border-surface-700! rounded-md! bg-transparent!">
                  <p-accordion-header class="p-5! border-0! bg-transparent!">
                    <div class="flex items-center gap-2 w-full">
                      <span class="inline-flex items-center justify-center rounded-[30px] w-8 h-8 p-2">
                        <i [ngClass]="['pi ' + item.icon, 'text-surface-600 dark:text-surface-400 text-base! leading-none!']"></i>
                      </span>
                      <span class="text-surface-900 dark:text-surface-0 font-medium leading-tight">{{ item.title }}</span>
                    </div>
                  </p-accordion-header>
                  <p-accordion-content class="bg-transparent!">
                    <p class="text-surface-600 dark:text-surface-400 leading-normal">{{ item.description }}</p>
                  </p-accordion-content>
                </p-accordion-panel>
              }
            </p-accordion>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .p-accordioncontent-content {
        background: transparent !important;
        border-radius: 2rem !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class __CLASS_NAME__ {
  services = [
    {
      icon: 'pi-cloud',
      title: 'Cloud Services',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-chart-bar',
      title: 'Analytics Dashboard',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-key',
      title: 'Private Keys',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-file-pdf',
      title: 'PDF Export',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-book',
      title: 'Documentation',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
  ];

  support = [
    {
      icon: 'pi-filter',
      title: 'Advanced Filtering',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-credit-card',
      title: 'Payment Gateway',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-map-marker',
      title: 'Device Tracking',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-tags',
      title: 'Tag Management',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
    {
      icon: 'pi-eye',
      title: 'Privacy Settings',
      description:
        'Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Sit amet risus nullam eget felis eget. Feugiat pretium nibh ipsum consequat nisl vel pretium.',
    },
  ];
}
