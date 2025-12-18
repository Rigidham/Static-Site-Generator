import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-9 min-h-screen h-full w-full bg-surface-0 dark:bg-surface-950">
      <nav class="relative w-full flex items-center px-8 lg:px-20 gap-6 py-6 lg:py-2" (mouseleave)="closeMenu()">
        <a href="#" class="relative z-20 flex items-center gap-4">
          <svg class="fill-surface-900 dark:fill-surface-0" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5443_6273)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0003 0.94043C10.0259 0.94043 8.13251 1.7056 6.73646 3.0676L2.11175 7.57948C0.761433 8.89685 0 10.7035 0 12.59V12.648C0 14.7734 0.93576 16.6855 2.42726 18.0136C0.93576 19.3417 0 21.2538 0 23.3792V23.4372C0 25.3237 0.761427 27.1303 2.11174 28.4477L6.73646 32.9596C8.13251 34.3216 10.0259 35.0868 12.0003 35.0868C14.1788 35.0868 16.1387 34.1739 17.5 32.7187C18.8613 34.1739 20.8212 35.0868 22.9997 35.0868C24.9741 35.0868 26.8675 34.3216 28.2635 32.9596L32.8883 28.4477C34.2386 27.1303 35 25.3237 35 23.4372V23.3792C35 21.2538 34.0643 19.3417 32.5728 18.0136C34.0643 16.6855 35 14.7734 35 12.648V12.59C35 10.7035 34.2386 8.89686 32.8883 7.57948L28.2635 3.0676C26.8675 1.7056 24.9741 0.94043 22.9997 0.94043C20.8212 0.94043 18.8613 1.85336 17.5 3.30848C16.1387 1.85336 14.1788 0.94043 12.0003 0.94043ZM22.292 18.2437C22.4207 18.1182 22.4207 17.909 22.292 17.7834L19.595 15.1522C18.4297 14.0153 16.5703 14.0153 15.405 15.1522L12.708 17.7834C12.5793 17.909 12.5793 18.1182 12.708 18.2437L15.405 20.875C16.5703 22.0119 18.4297 22.0119 19.595 20.875L22.292 18.2437ZM20.4728 25.3842C19.8152 26.0257 19.4444 26.9055 19.4444 27.8242C19.4444 29.7398 21.0362 31.2928 22.9997 31.2928C23.9426 31.2928 24.8469 30.9273 25.5137 30.2768L30.0828 25.8192C30.7404 25.1776 31.1111 24.2978 31.1111 23.3792C31.1111 21.4636 29.5194 19.9106 27.5558 19.9106C26.6129 19.9106 25.7086 20.276 25.0419 20.9265L20.4728 25.3842ZM15.5556 27.8242C15.5556 26.9055 15.1848 26.0257 14.5272 25.3842L9.95811 20.9265C9.29136 20.276 8.38708 19.9106 7.44417 19.9106C5.48064 19.9106 3.88889 21.4636 3.88889 23.3792C3.88889 24.2979 4.25968 25.1776 4.91725 25.8192L9.48631 30.2768C10.1531 30.9273 11.0574 31.2928 12.0003 31.2928C13.9638 31.2928 15.5556 29.7398 15.5556 27.8242ZM15.5556 8.20303C15.5556 9.12169 15.1848 10.0015 14.5272 10.643L9.95811 15.1006C9.29136 15.7511 8.38708 16.1166 7.44417 16.1166C5.48064 16.1166 3.88889 14.5636 3.88889 12.648C3.88889 11.7293 4.25968 10.8495 4.91725 10.208L9.48631 5.75038C10.1531 5.0999 11.0574 4.73447 12.0003 4.73447C13.9638 4.73447 15.5556 6.28739 15.5556 8.20303ZM25.0419 15.1006L20.4728 10.643C19.8152 10.0015 19.4444 9.12169 19.4444 8.20303C19.4444 6.28739 21.0362 4.73447 22.9997 4.73447C23.9426 4.73447 24.8469 5.0999 25.5137 5.75038L30.0828 10.208C30.7404 10.8495 31.1111 11.7293 31.1111 12.648C31.1111 14.5636 29.5194 16.1166 27.5558 16.1166C26.6129 16.1166 25.7086 15.7511 25.0419 15.1006Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_5443_6273">
                <rect width="35" height="35" fill="white" transform="translate(0 0.5)"></rect>
              </clipPath>
            </defs>
          </svg>
          <div class="text-surface-900 dark:text-surface-0 text-lg font-semibold">Mistranet</div>
        </a>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-9"
          [hideOnResize]="true"
          class="relative z-20 cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-0 ml-auto"
        >
          <i class="pi pi-bars text-3xl"></i>
        </a>
        <div
          class="border-b border-surface lg:border-0 animate-fadein absolute lg:static bg-surface-50 dark:bg-surface-900 lg:bg-transparent lg:dark:bg-transparent w-full top-full left-0 right-0 shadow-md lg:shadow-none z-20 lg:z-auto pt-0 pb-4 lg:py-0 hidden lg:flex flex-1 items-center"
        >
          <ul class="lg:mt-0 lg:border-0 select-none relative flex-1 flex lg:flex-row flex-col lg:mb-0 mb-4 lg:items-center gap-2 lg:gap-8 p-4" (mouseleave)="hoveredItem.set(null)">
            @for (item of navs(); track item.label; let index = $index) {
              <li (mouseenter)="setActiveItem(item)" (click)="setActiveItem(item)">
                @if (item?.subMenu) {
                  <a
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    [ngClass]="activeItem()?.label === item.label ? 'border-primary text-primary' : 'border-transparent text-surface-700 dark:text-surface-300'"
                    class="group relative lg:border-b px-4 py-2 lg:p-4 transition-all flex items-center justify-between gap-2 hover:text-primary hover:cursor-pointer text-base font-medium leading-tight"
                  >
                    {{ item.label }}
                    <i class="pi pi-angle-down text-base! leading-none!"></i>
                    <span
                      [ngClass]="activeItem()?.label === item.label ? 'opacity-100' : 'opacity-0'"
                      class="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 transition-all border-l-4 border-l-transparent border-r-4 border-transparent border-t-4 border-t-primary"
                    ></span>
                  </a>
                } @else {
                  <a
                    class="py-2 px-4 lg:p-4 transition-all flex text-surface-700 dark:text-surface-300 hover:text-primary hover:cursor-pointer text-base font-medium leading-tight"
                    [href]="item.to"
                    >{{ item.label }}</a
                  >
                }
                @if (item?.subMenu) {
                  <div class="lg:hidden pl-12 hidden animate-fadein">
                    <ul class="flex flex-col gap-6 my-2">
                      @for (subItem of item.subMenu; track subItem.label; let j = $index) {
                        <li>
                          <a [href]="subItem.to" class="flex items-center gap-4 text-surface-700 dark:text-surface-200">
                            <i [class]="subItem.icon"></i>
                            <span class="">{{ subItem.label }}</span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </li>
            }
            <div class="lg:hidden p-3 flex items-center gap-2 bg-surface-200 dark:bg-surface-800 rounded-xl mt-4">
              <a href="" class="flex-1 flex items-center justify-center gap-2">
                <i class="pi pi-discord"></i>
                <span class="font-medium text-surface-900 dark:text-surface-0">Discord</span>
              </a>
              <div class="w-px h-3 bg-surface-300 dark:bg-surface-700"></div>
              <a href="" class="flex-1 flex items-center justify-center gap-2">
                <i class="pi pi-github"></i>
                <span class="font-medium text-surface-900 dark:text-surface-0">Github</span>
              </a>
            </div>
            @if (activeItem()?.subMenu) {
              <div
                [ngClass]="activeItem() ? 'opacity-100 visible z-99' : 'opacity-0 invisible z-[-99]'"
                class="lg:block hidden animate-fadein animate-duration-150 w-[305px] absolute top-full rounded-[10px] overflow-hidden bg-surface-100 dark:bg-surface-900 transition-all border border-surface-200 dark:border-surface-700 shadow-[0px_48px_80px_rgba(0,0,0,0.04)]"
              >
                <div class="bg-surface-0 dark:bg-surface-950">
                  @for (subItem of activeItem()?.subMenu; track subItem.label; let j = $index) {
                    <div class="p-1">
                      <a [href]="subItem.to" class="flex items-start gap-2.5 w-full p-4 transition-all hover:bg-surface-100 dark:hover:bg-surface-900 rounded-lg" (mouseenter)="selectedCategory.set(j)">
                        <span class="w-8 h-8 rounded-[6px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                          <i [class]="subItem.icon" class="text-base!"></i>
                        </span>
                        <span class="flex-1">
                          <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                          <span class="text-sm leading-tight text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                        </span>
                      </a>
                    </div>
                  }
                </div>
                <div class="p-2.5 border-t border-surface-200 dark:border-surface-700">
                  <div class="flex items-center">
                    <a href="" class="flex-1 flex items-center justify-center gap-2">
                      <i class="pi pi-discord text-base!"></i>
                      <span class="text-base font-medium leading-tight">Discord</span>
                    </a>
                    <div class="w-px h-2.5 bg-surface-200 dark:bg-surface-700"></div>
                    <a href="" class="flex-1 flex items-center justify-center gap-2">
                      <i class="pi pi-github text-base!"></i>
                      <span class="text-base font-medium leading-tight">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            }
          </ul>
          <div class="flex items-center justify-between lg:justify-center gap-6 px-8 lg:px-0">
            <button pButton [text]="true">
              <span pButtonLabel>Login</span>
            </button>
            <button pButton>
              <span pButtonLabel>Register</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  `,
})
export class __CLASS_NAME__ {
  hoveredItem = signal<any>(null);
  selectedItem = signal<any>(null);

  activeItem = computed(() => this.hoveredItem() || this.selectedItem());

  setActiveItem = (item: any) => {
    if (item?.subMenu) {
      this.hoveredItem.set(item);
      this.selectedItem.set(item);
    } else {
      this.hoveredItem.set(null);
      this.selectedItem.set(null);
    }
  };

  closeMenu = () => {
    this.hoveredItem.set(null);
    this.selectedItem.set(null);
  };

  selectedCategory = signal<number>(0);
  navs = signal([
    {
      label: 'Product',
      to: '',
    },
    {
      label: 'Corporate',
      subMenu: [
        {
          label: 'Features',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-list',
          to: '#',
        },
        {
          label: 'Solutions',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-shield',
          to: '#',
        },
        {
          label: 'Integration',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-tags',
          to: '#',
        },
        {
          label: 'Documentation',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-file',
          to: '#',
        },
      ],
    },
    {
      label: 'Resources',
      to: '',
    },
    {
      label: 'Pricing',
      to: '',
    },
  ]);
}
