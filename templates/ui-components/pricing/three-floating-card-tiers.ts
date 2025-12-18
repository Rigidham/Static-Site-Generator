import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, BadgeModule, DividerModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <h1 class="text-[3.57rem] font-semibold text-surface-900 dark:text-surface-0 text-center leading-tight tracking-tight">
        Choose the right plan<br />and accelerate your growth
      </h1>
      <p class="text-surface-500 text-center max-w-[37.14rem] mx-auto mt-8 text-sm leading-normal">
        Increase your efficiency and streamline your workflow by selecting a plan tailored to your specific needs
      </p>
      <div class="flex items-center mt-8 w-fit mx-auto gap-4 p-1 rounded-xl bg-surface-100 dark:bg-surface-800">
        <p-button styleClass="py-1! px-3! rounded-lg! text-sm!" [severity]="isYearly ? 'secondary' : null" [text]="isYearly" (click)="isYearly = false" label="Monthly" />
        <p-button styleClass="py-1! px-3! rounded-lg! text-sm!" [severity]="isYearly ? null : 'secondary'" [text]="!isYearly" (click)="isYearly = true" label="Yearly" />
      </div>
      <div class="flex lg:flex-row flex-col items-center lg:items-start justify-center gap-8 mt-20">
        @for (item of pricingPlans; track item.badge; let index = $index) {
          <div class="bg-surface-100 dark:bg-surface-900 rounded-2xl p-4 max-w-[27.57rem] flex-1">
            <div class="flex items-center justify-between">
              <span class="px-4 py-1 font-semibold text-surface-900 dark:text-surface-0 text-lg leading-tight">{{ item.badge }}</span>
              @if (item.isPopular) {
                <p-badge
                  value="Popular Plan"
                  class="text-sm! h-8! px-2! py-1! font-medium! shadow-[0px_28px_8px_0px_rgba(44,54,87,0.00),0px_18px_7px_0px_rgba(44,54,87,0.01),0px_10px_6px_0px_rgba(44,54,87,0.02),0px_4px_4px_0px_rgba(44,54,87,0.03),0px_1px_2px_0px_rgba(44,54,87,0.04)]!"
                ></p-badge>
              }
            </div>
            <div
              class="mt-3 space-y-8 p-6 rounded-xl bg-surface-0 dark:bg-surface-950 shadow-[0px_130px_36px_0px_rgba(44,54,87,0.00),0px_82px_33px_0px_rgba(44,54,87,0.01),0px_46px_27px_0px_rgba(44,54,87,0.05),0px_20px_20px_0px_rgba(44,54,87,0.09),0px_5px_12px_0px_rgba(44,54,87,0.10)]"
            >
              <div class="text-[3rem] text-surface-900 dark:text-surface-0 font-semibold leading-tight tracking-tight">{{ item.price[isYearly ? 'yearly' : 'monthly'] }}</div>
              <p class="text-surface-500 text-sm leading-normal">{{ item.description }}</p>
              <button pButton [fluid]="true" class="rounded-md! py-2! px-3!">
                <span pButtonLabel>Get Started</span>
              </button>
              <p-divider type="dashed"></p-divider>
              <ul class="flex flex-col gap-3">
                @for (incItem of item.including; track incItem; let j = $index) {
                  <li class="inline-flex items-center gap-3">
                    <i class="pi pi-check text-sm! leading-none!"></i>
                    <span class="text-sm text-surface-900 dark:text-surface-0 leading-normal">{{ incItem }}</span>
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  isYearly: boolean = false;

  pricingPlans: any[] = [
    {
      isPopular: false,
      badge: 'Basic',
      price: {
        monthly: '$24',
        yearly: '$240',
      },
      description: 'Get started with essential tools to boost your productivity.',
      including: ['Simple Budget Management', 'Fund Transfers', 'Limited Support'],
    },
    {
      isPopular: true,
      badge: 'Pro',
      price: {
        monthly: '$99',
        yearly: '$990',
      },
      description: 'Unlock advanced features designed for growing businesses.',
      including: ['Simple Budget Management', 'Fund Transfers', 'Limited Support', 'Real-Time Alerts'],
    },
    {
      isPopular: false,
      badge: 'Premium',
      price: {
        monthly: '$130',
        yearly: '$1300',
      },
      description: 'Access the full suite of features for maximum efficiency and control.',
      including: ['Simple Budget Management', 'Fund Transfers', 'All Pro Features', 'Higher Transaction Limits', 'Advanced Investment Tools'],
    },
  ];
}
