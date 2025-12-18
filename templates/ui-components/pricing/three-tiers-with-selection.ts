import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex flex-col gap-12 items-center justify-center">
        <div class="flex flex-col gap-4 items-center justify-center">
          <div class="text-surface-900 dark:text-surface-0 font-bold text-4xl text-center leading-tight">Pricing</div>
          <p class="text-surface-600 dark:text-surface-0/70 text-lg text-center leading-tight mt-0 mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</p>
        </div>

        <ul class="rounded-3xl bg-surface-0 dark:bg-surface-800 p-1 m-0 list-none flex gap-0 overflow-x-auto select-none shadow-sm border border-surface-200 dark:border-surface-700">
          <li
            [ngClass]="[
              'px-3 py-1 rounded-2xl cursor-pointer font-medium flex items-center transition-colors duration-150',
              selectedInterval === 'month' ? 'bg-primary-500 text-surface-0' : 'bg-transparent text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
            ]"
            (click)="selectedInterval = 'month'"
          >
            Monthly
          </li>
          <li
            [ngClass]="[
              'px-3 py-1 rounded-2xl cursor-pointer font-medium flex items-center transition-colors duration-150',
              selectedInterval === 'year' ? 'bg-primary-500 text-surface-0' : 'bg-transparent text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-700'
            ]"
            (click)="selectedInterval = 'year'"
          >
            Yearly
          </li>
        </ul>

        <div class="flex flex-col-reverse lg:flex-row gap-6 max-w-5xl mx-auto">
          <div class="flex flex-col gap-4 flex-1">
            @for (plan of plans; track plan.name; let index = $index) {
              <div
                class="flex-1 bg-surface-0 dark:bg-surface-800 p-6 cursor-pointer rounded-2xl border-2 text-surface-900 dark:text-surface-0 transition-colors duration-150 shadow-sm"
                [ngClass]="selectedPlan.name === plan.name ? 'border-primary-500 dark:border-primary-400' : 'border-transparent hover:border-primary-400'"
                (click)="selectedPlan = plan"
              >
                <div class="flex gap-6 items-start">
                  <div class="inline-flex justify-center rounded-full items-center bg-primary-400 w-12 h-12 text-surface-0">
                    <i [ngClass]="'text-lg! ' + plan.icon"></i>
                  </div>
                  <div class="flex-1">
                    <div class="text-lg font-medium leading-tight">{{ plan.name }}</div>
                    <p class="mb-4 text-base text-surface-600 dark:text-surface-300 leading-tight">Magna fermentum iaculis</p>
                    <div class="text-base font-medium text-surface-700 dark:text-surface-300 leading-tight">
                      {{ selectedInterval === 'month' ? '$' + plan.price + '/month' : '$' + (plan.price * 12 - 67) + '/year' }}
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div class="flex-1 flex flex-col rounded-2xl overflow-hidden shadow-sm">
            <div class="bg-primary-500 p-6 lg=p-8">
              <div class="flex justify-between flex-wrap mb-4 items-center">
                <div class="text-2xl font-semibold text-surface-0 leading-tight">{{ selectedPlan.name }}</div>
                <div class="py-1 px-2 rounded-lg flex gap-2 justify-center items-center bg-surface-0 dark:bg-surface-800 leading-tight text-primary-500 dark:text-primary-400">
                  <span class="font-semibold text-base">{{ selectedInterval === 'year' ? currency + (selectedPlan.price * 12 - 67) : currency + selectedPlan.price }}</span>
                  <span class="font-medium text-base">/ {{ selectedInterval }}</span>
                </div>
              </div>
              <p class="leading-normal text-surface-0 text-base">Nunc consequat interdum varius sit.Nunc consequat interdum varius sit.</p>
            </div>
            <div class="flex-1 bg-surface-0 dark:bg-surface-800 p-6 lg:p-8 flex flex-col justify-between gap-6">
              <div class="flex-1">
                <div class="text-surface-900 dark:text-surface-0 font-medium text-lg leading-tight">Features</div>
                <ul class="mt-4 flex flex-col gap-2">
                  @for (desc of selectedPlan.description; track desc.name; let index = $index) {
                    <li class="flex items-center gap-2 py-1">
                      <i [ngClass]="['text-primary-500', 'dark:text-primary-400', 'text-lg!', desc.icon]"></i>
                      <span class="text-surface-700 dark:text-surface-200 leading-tight">{{ desc.name }}</span>
                    </li>
                  }
                </ul>
              </div>
              <button pButton>
                <span pButtonLabel>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  plans: any[] = [
    {
      name: 'Sketchers',
      price: 10.99,
      icon: 'pi pi-pencil',
      description: [
        { name: 'Arcu vitae elementum', icon: 'pi pi-check-circle' },
        { name: 'Dui faucibus in ornare', icon: 'pi pi-check-circle' },
        { name: 'Morbi tincidunt augue', icon: 'pi pi-check-circle' },
        { name: 'Sed euismod nisi', icon: 'pi pi-check-circle' },
      ],
    },
    {
      name: 'Painter',
      price: 15.99,
      icon: 'pi pi-palette',
      description: [
        {
          name: 'includes all the features of sketchers',
          icon: 'pi pi-reply',
        },
        { name: 'Sed eget facilisis turpis', icon: 'pi pi-check-circle' },
        {
          name: 'Duis tincidunt ullamcorper libero',
          icon: 'pi pi-check-circle',
        },
        { name: 'Proin purus orci', icon: 'pi pi-check-circle' },
      ],
    },
    {
      name: 'Artist',
      price: 24.99,
      icon: 'pi pi-image',
      description: [
        {
          name: 'includes all the features of painter',
          icon: 'pi pi-reply',
        },
        { name: 'Maecenas luctus nisl', icon: 'pi pi-check-circle' },
        { name: 'Aliquam erat volutpat', icon: 'pi pi-check-circle' },
        { name: 'Phasellus ante nulla', icon: 'pi pi-check-circle' },
      ],
    },
  ];
  currency: string = '$';
  selectedPlan: any = this.plans[1];
  selectedInterval: string = 'month';
}
