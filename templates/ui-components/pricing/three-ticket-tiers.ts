import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AvatarModule, AvatarGroupModule, BadgeModule, ButtonModule, DividerModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20">
      <div class="w-fit mx-auto flex items-center p-1 px-2 rounded-2xl border border-surface-200 dark:border-surface-700">
        <p-avatar-group class="-space-x-2!">
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png" shape="circle" class="w-[1.71rem]! h-[1.71rem]!"></p-avatar>
          <p-avatar class="bg-sky-200! w-[1.71rem]! h-[1.71rem]!" shape="circle"></p-avatar>
          <p-avatar class="bg-orange-200! w-[1.71rem]! h-[1.71rem]!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-21.png" shape="circle" class="w-[1.71rem]! h-[1.71rem]!"></p-avatar>
          <p-avatar class="bg-purple-200! w-[1.71rem]! h-[1.71rem]!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" shape="circle" class="w-[1.71rem]! h-[1.71rem]!"></p-avatar>
          <p-avatar class="bg-purple-200! w-[1.71rem]! h-[1.71rem]!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-3.png" shape="circle" class="w-[1.71rem]! h-[1.71rem]!"></p-avatar>
        </p-avatar-group>
        <p-divider layout="vertical" class="mx-2!"></p-divider>
        <span class="text-sm text-surface-500 leading-normal">Happy Customers</span>
      </div>
      <h1 class="mt-4 text-[3.57rem] font-semibold text-surface-900 dark:text-surface-0 text-center leading-tight tracking-tight">
        Get a plan and<br />
        increase your efficiency
      </h1>
      <p class="mt-8 text-surface-500 text-center max-w-xl mx-auto text-sm leading-normal">
        Optimize your workflow and boost productivity by choosing the right plan tailored to your business needs.
      </p>
      <div class="flex items-center mt-8 w-fit mx-auto gap-4 p-1 rounded-lg bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
        <p-button styleClass="py-1! px-3! rounded-lg! text-sm!" [severity]="isYearly ? 'secondary' : null" [text]="isYearly" (click)="isYearly = false" label="Monthly" />
        <p-button styleClass="py-1! px-3! rounded-lg! text-sm!" [severity]="isYearly ? null : 'secondary'" [text]="!isYearly" (click)="isYearly = true" label="Yearly" />
      </div>
      <div class="flex lg:flex-row flex-col gap-8 mt-12 mx-auto w-fit">
        @for (item of pricingPlans; track trackBy(item.badge); let index = $index) {
          <div
            class="flex-1 px-8 pt-6 pb-12 bg-surface-0 dark:bg-surface-950 space-y-8 max-w-[27.57rem] relative"
            style="
              background-size: 51% 100%;
              background-repeat: no-repeat;
              background-position:
                top left,
                top right;
              background-image: radial-gradient(circle at 0 50%, rgba(white, 0) 4em, white (4em + 0.1em)), radial-gradient(circle at 100% 50%, rgba(white, 0) 4em, white (4em + 0.1em));
            "
          >
            <div class="flex items-center gap-4 absolute -top-4 left-1/2 -translate-x-1/2">
              @for (number of numbers; track trackBy(number); let j = $index) {
                <div class="flex-1 bg-surface-50 dark:bg-surface-900 rounded-full w-[2.29rem] h-8"></div>
              }
            </div>
            <div class="flex items-center gap-4 absolute -bottom-12 left-1/2 -translate-x-1/2">
              @for (number of numbers; track trackBy(number); let j = $index) {
                <div class="flex-1 bg-surface-50 dark:bg-surface-900 rounded-full w-[2.29rem] h-8"></div>
              }
            </div>
            @if (item.isPopular) {
              <p-badge [value]="item.badge + ' - Popular Plan'" class="text-sm! h-8! px-2! py-1! font-medium!"></p-badge>
            } @else {
              <p-badge [value]="item.badge" severity="secondary" class="text-sm! h-8! px-2! py-1! font-medium!"></p-badge>
            }

            <div class="text-[3rem] font-semibold text-surface-900 dark:text-surface-0 leading-tight tracking-tight">{{ item.price[isYearly ? 'yearly' : 'monthly'] }}</div>
            <p class="text-surface-500 text-sm leading-normal">{{ item.description }}</p>
            <button pButton [fluid]="true" class="rounded-md! py-2! px-3!">
              <span pButtonLabel>Get Started</span>
            </button>
            <div class="relative">
              <div class="flex-1 bg-surface-50 dark:bg-surface-900 rounded-full w-[2.29rem] h-[2.29rem] absolute -left-11 top-1/2 -translate-y-1/2"></div>
              <p-divider type="dashed"></p-divider>
              <div class="flex-1 bg-surface-50 dark:bg-surface-900 rounded-full w-[2.29rem] h-[2.29rem] absolute -right-11 top-1/2 -translate-y-1/2"></div>
            </div>
            <ul class="flex flex-col gap-3">
              @for (l_item of item.including; track trackBy(l_item); let j = $index) {
                <li class="inline-flex items-center gap-3">
                  <i class="pi pi-check text-base! leading-none!"></i>
                  <span class="text-base text-surface-900 dark:text-surface-0 leading-normal">{{ l_item }}</span>
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  isYearly: boolean = false;

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

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

  trackBy(item: any) {
    return item.toString() + Math.random();
  }
}
