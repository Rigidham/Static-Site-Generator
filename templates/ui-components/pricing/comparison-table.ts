import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-6 md:p-12 lg:p-20">
      <div class="flex justify-center">
        <div class="flex flex-1">
          <div class="flex flex-1 flex-col">
            <div class="flex flex-col">
              <div
                class="flex flex-col gap-4 p-px pr-0 h-28 md:h-[146px] relative rounded-tl-xl z-10 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-linear-to-b before:from-primary-500 dark:before:from-primary-400 before:to-transparent before:border-0 before:p-px before:rounded-tl-xl before:z-0"
              >
                <div class="relative z-10 h-full w-full bg-surface-0 dark:bg-surface-950 p-8 rounded-tl-xl">
                  <div class="text-xl md:text-3xl leading-normal text-surface-900 dark:text-surface-0">Pricing</div>
                  <div class="text-sm leading-normal text-surface-500 dark:text-surface-400 md:flex hidden">Fringilla est ullamcorper eget nulla facilisi etiam</div>
                </div>
              </div>
              <div class="flex flex-col">
                @for (feature of features; track trackBy(feature)) {
                  <div class="h-[42px] flex items-center border-b border-surface-100 dark:border-surface-800">
                    <div class="px-8 text-sm font-medium text-surface-900 dark:text-surface-0">{{ feature }}</div>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="flex flex-1 flex-col">
            <div
              class="flex flex-col gap-4 p-px pr-0 pl-0 h-28 md:h-[146px] relative z-10 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-linear-to-b before:from-primary-500 dark:before:from-primary-400 before:to-transparent before:border-0 before:p-px before:z-0"
            >
              <div class="relative z-10 h-full w-full bg-surface-0 dark:bg-surface-950 p-4 flex flex-col items-center gap-4">
                <div class="flex flex-col gap-2">
                  <div class="text-lg md:text-xl leading-normal font-medium text-surface-900 dark:text-surface-0">Basic</div>
                  <div class="text-2xl md:text-3xl leading-normal font-medium text-surface-900 dark:text-surface-0 text-center">$10</div>
                </div>
                <button pButton type="button" [rounded]="true" class="md:flex! hidden!">
                  <span pButtonLabel>Free Trial</span>
                </button>
              </div>
            </div>
            <div class="flex flex-col">
              @for (value of basicFeatures; track trackBy(value); let index = $index) {
                <div class="h-[42px] flex justify-center items-center border-b border-surface-100 dark:border-surface-800">
                  @if (typeof value === 'boolean') {
                    <i [ngClass]="['pi', value ? 'pi-check text-green-500 dark:text-green-400' : 'pi-times text-surface-500 dark:text-surface-300']"></i>
                  } @else {
                    <div class="text-sm text-surface-600 dark:text-surface-200">
                      Up to <span class="text-surface-900 dark:text-surface-0 font-medium">{{ value }}</span> files
                    </div>
                  }
                </div>
              }
            </div>
          </div>

          <div class="flex flex-1 flex-col">
            <div
              class="flex flex-col gap-4 p-px pr-0 pl-0 h-28 md:h-[146px] relative z-10 before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-linear-to-b before:from-primary-500 dark:before:from-primary-400 before:to-transparent before:border-0 before:p-px before:z-0"
            >
              <div class="relative z-10 h-full w-full bg-surface-0 dark:bg-surface-950 p-4 flex flex-col items-center gap-4">
                <div class="flex flex-col gap-2">
                  <div class="text-lg md:text-xl leading-normal font-medium text-surface-900 dark:text-surface-0">Premium</div>
                  <div class="text-2xl md:text-3xl leading-normal font-medium text-surface-900 dark:text-surface-0 text-center">$20</div>
                </div>
                <button pButton type="button" [rounded]="true" class="md:flex! hidden!">
                  <span pButtonLabel>Buy Now</span>
                </button>
              </div>
            </div>
            <div class="flex flex-col">
              @for (value of premiumFeatures; track trackBy(value); let index = $index) {
                <div class="h-[42px] flex justify-center items-center border-b border-surface-100 dark:border-surface-800">
                  @if (typeof value === 'boolean') {
                    <i [ngClass]="['pi', value ? 'pi-check text-green-500 dark:text-green-400' : 'pi-times text-surface-500 dark:text-surface-300']"></i>
                  } @else {
                    <div class="text-sm text-surface-600 dark:text-surface-200">
                      Up to <span class="text-surface-900 dark:text-surface-0 font-medium">{{ value }}</span> files
                    </div>
                  }
                </div>
              }
            </div>
          </div>

          <div class="flex flex-1 flex-col">
            <div
              class="flex flex-col gap-4 p-px pl-0 h-28 md:h-[146px] relative z-10 rounded-tr-xl before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:bg-linear-to-b before:from-primary-500 dark:before:from-primary-400 before:to-transparent before:border-0 before:p-px before:rounded-tr-xl before:z-0"
            >
              <div class="relative z-10 h-full w-full bg-surface-0 dark:bg-surface-950 p-4 flex flex-col items-center gap-4 rounded-tr-xl">
                <div class="flex flex-col gap-2">
                  <div class="text-lg md:text-xl leading-normal font-medium text-surface-900 dark:text-surface-0">Enterprise</div>
                  <div class="text-2xl md:text-3xl leading-normal font-medium text-surface-900 dark:text-surface-0 text-center">$30</div>
                </div>
                <button pButton type="button" [rounded]="true" [outlined]="true" class="md:flex! hidden!">
                  <span pButtonLabel>Contact Us</span>
                </button>
              </div>
            </div>
            <div class="flex flex-col">
              @for (value of enterpriseFeatures; track trackBy(value); let index = $index) {
                <div class="h-[42px] flex justify-center items-center border-b border-surface-100 dark:border-surface-800">
                  @if (typeof value === 'boolean') {
                    <i [ngClass]="['pi', value ? 'pi-check text-green-500 dark:text-green-400' : 'pi-times text-surface-500 dark:text-surface-300']"></i>
                  } @else {
                    <div class="text-surface-900 dark:text-surface-0 text-sm font-medium">{{ value }}</div>
                  }
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  features: string[] = ['Arcu purus', 'Posuere felis', 'Curabitur mollis', 'Vitae odio', 'Orci, mi', 'Tincidunt vulputate', 'Quis felis', 'Dignissim vivamus'];

  basicFeatures: any[] = [true, true, true, true, false, false, false, '5'];
  premiumFeatures: any[] = [true, true, true, true, true, false, false, '10'];
  enterpriseFeatures: any[] = [true, true, true, true, true, true, true, 'Unlimited'];

  trackBy(item: any) {
    return item.toString() + Math.random();
  }
}
