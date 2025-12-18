import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="pb-20 bg-surface-0 dark:bg-surface-900">
      <div class="shadow flex items-center gap-4 lg:gap-6 justify-between content-center flex-col lg:flex-row py-3 px-6 lg:px-12 bg-surface-950">
        <div class="relative order-1 flex items-center justify-center sm:justify-between gap-6 flex-wrap w-full lg:w-auto">
          <span class="font-semibold text-xl lg:text-2xl text-surface-0">40% Off Sale Ends</span>
          <div class="flex lg:hidden items-center gap-6 min-w-40">
            <button pButton [rounded]="true" severity="secondary" class="sm:w-auto! w-full!">
              <span pButtonLabel>Shop Now</span>
              <i pButtonIcon class="pi pi-arrow-right"></i>
            </button>
            <button pButton [text]="true" [rounded]="true" severity="secondary" class="absolute -right-5 top-0 sm:relative">
              <i pButtonIcon class="pi pi-times"></i>
            </button>
          </div>
        </div>

        <div class="flex justify-center gap-2 lg:gap-3 order-2 lg:order-2 p-2">
          @for (unit of units(); track unit.label; let index = $index) {
            <div class="flex flex-col items-center gap-1">
              <div class="relative bg-surface-0 rounded px-2 py-1 lg:px-3 lg:py-2 shadow border border-surface-200 min-w-12 lg:min-w-14">
                <div class="text-surface-900 font-bold text-lg text-center transition-all duration-300">
                  {{ unit.value }}
                </div>
                <div class="absolute inset-0 bg-gradient-to-b from-surface-50 to-transparent rounded-lg opacity-50"></div>
              </div>

              <div class="text-surface-0 text-xs font-medium uppercase tracking-wide leading-none! mt-1">
                {{ unit.label }}
              </div>
            </div>
          }
        </div>

        <div class="hidden lg:flex items-center gap-4 order-3">
          <button pButton [rounded]="true" severity="secondary">
            <span pButtonLabel>Shop Now</span>
            <i pButtonIcon class="pi pi-arrow-right"></i>
          </button>
          <button pButton [text]="true" [rounded]="true" severity="secondary" class="text-surface-0! hover:bg-surface-500/20!">
            <i pButtonIcon class="pi pi-times"></i>
          </button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ implements OnInit, OnDestroy {
  private readonly SECONDS_PER_DAY = 24 * 60 * 60;
  private readonly SECONDS_PER_HOUR = 60 * 60;
  private readonly SECONDS_PER_MINUTE = 60;

  units = signal([
    { label: 'Day', value: '00' },
    { label: 'Hour', value: '00' },
    { label: 'Min', value: '00' },
    { label: 'Sec', value: '00' },
  ]);

  private endDate: Date;
  private timer: any = null;

  constructor() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    this.endDate = date;
  }

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private calculateTimeUnits = (diff: number): string[] =>
    [
      Math.floor(diff / this.SECONDS_PER_DAY),
      Math.floor((diff % this.SECONDS_PER_DAY) / this.SECONDS_PER_HOUR),
      Math.floor((diff % this.SECONDS_PER_HOUR) / this.SECONDS_PER_MINUTE),
      diff % this.SECONDS_PER_MINUTE,
    ].map((value) => value.toString().padStart(2, '0'));

  private updateCountdown = () => {
    const now = new Date();
    const diff = Math.max(0, Math.floor((this.endDate.getTime() - now.getTime()) / 1000));

    const newValues = this.calculateTimeUnits(diff);
    const currentUnits = this.units();

    newValues.forEach((newValue, index) => {
      currentUnits[index].value = newValue;
    });

    this.units.set([...currentUnits]);

    if (diff <= 0 && this.timer) {
      clearInterval(this.timer);
    }
  };
}
