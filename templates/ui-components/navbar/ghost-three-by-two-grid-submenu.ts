import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-10 min-h-screen h-full w-full bg-surface-0 dark:bg-surface-950">
      <nav class="relative w-full flex items-center px-8 lg:px-20 gap-6 py-6 lg:py-2" (mouseleave)="closeMenu()">
        <a href="#" class="relative z-20 flex items-center gap-4">
          <svg class="fill-surface-900 dark:fill-surface-0" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 0C7.83501 0 0 7.83501 0 17.5C9.66499 17.5 17.5 9.66499 17.5 0Z"></path>
            <path d="M17.5 35C27.165 35 35 27.165 35 17.5C25.335 17.5 17.5 25.335 17.5 35Z"></path>
            <path d="M17.5 0C27.165 0 35 7.83501 35 17.5C25.335 17.5 17.5 9.66499 17.5 0Z"></path>
            <path d="M17.5 35C7.83501 35 -8.44939e-07 27.165 0 17.5C9.66499 17.5 17.5 25.335 17.5 35Z"></path>
          </svg>
          <div class="text-surface-900 dark:text-surface-0 text-lg font-semibold">Wavelength</div>
        </a>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-10"
          [hideOnResize]="true"
          class="relative z-20 cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-0 ml-auto"
        >
          <i class="pi pi-bars text-3xl"></i>
        </a>
        <div
          class="border-b border-surface-200 dark:border-surface-700 lg:border-0 animate-fadein absolute lg:static bg-surface-50 dark:bg-surface-900 lg:bg-transparent lg:dark:bg-transparent w-full top-full left-0 right-0 shadow-md lg:shadow-none z-20 lg:z-auto pt-0 lg:py-0 hidden lg:flex flex-1 items-center"
        >
          <ul class="mt-4 lg:mt-0 lg:border-0 select-none relative flex-1 flex lg:flex-row flex-col lg:mb-0 mb-4 lg:items-center gap-2 lg:gap-8 p-4" (mouseleave)="hoveredItem.set(null)">
            @for (item of navs(); track item.label; let index = $index) {
              <li class="cursor-pointer" (mouseenter)="setActiveItem(item)" (click)="setActiveItem(item)">
                @if (item?.subMenu) {
                  <a
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    [ngClass]="activeItem()?.label === item.label ? 'border-primary text-primary' : 'border-transparent text-surface-700 dark:text-surface-300'"
                    class="group relative lg:border-b px-4 py-2 lg:p-4 transition-all flex items-center justify-between gap-2 hover:text-primary text-base font-medium leading-tight"
                  >
                    {{ item.label }}
                    <i class="pi pi-angle-down text-base! leading-none!"></i>
                    <span
                      [ngClass]="activeItem()?.label === item.label ? 'opacity-100' : 'opacity-0'"
                      class="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 transition-all border-l-4 border-l-transparent border-r-4 border-transparent border-t-4 border-t-primary"
                    ></span>
                  </a>
                } @else {
                  <a class="py-2 px-4 lg:p-4 transition-all flex text-surface-700 dark:text-surface-300 hover:text-primary text-base font-medium leading-tight" [href]="item.to">{{ item.label }}</a>
                }
                @if (item?.subMenu) {
                  <div class="lg:hidden pl-6 hidden animate-fadein">
                    <ul class="flex flex-col gap-3">
                      @for (subItem of item.subMenu; track subItem.label; let j = $index) {
                        <li class="px-4">
                          <a
                            pStyleClass="@next"
                            enterFromClass="hidden"
                            leaveToClass="hidden"
                            [hideOnOutsideClick]="true"
                            class="flex items-center justify-between w-full py-2 text-surface-700 dark:text-surface-200"
                            (click)="selectedCategory.set(j)"
                          >
                            <div class="flex items-center gap-4">
                              <span class="w-8 h-8 rounded-[6px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                                <i [class]="subItem.icon" class="text-sm!"></i>
                              </span>
                              <div class="flex flex-col">
                                <span class="text-base leading-tight font-medium">{{ subItem.label }}</span>
                                <span class="text-sm leading-tight text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                              </div>
                            </div>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </li>
            }
            <div class="lg:hidden mx-4 mt-3">
              <div class="p-4 bg-surface-100 dark:bg-surface-800 rounded-xl">
                <div class="flex items-center gap-2.5">
                  <span class="text-sm font-semibold leading-tight text-surface-900 dark:text-surface-0">Pretium quam</span>
                  <span class="bg-surface-900 dark:bg-surface-0 text-surface-0 dark:text-surface-900 px-2 py-1 rounded-[10.5px] text-[10.5px] font-bold">New</span>
                </div>
                <p class="text-sm leading-tight text-surface-600 dark:text-surface-400 mt-2">At consectetur lorem donec massa sapien faucibus et.</p>
              </div>
            </div>
            @if (activeItem()?.subMenu) {
              <div
                [ngClass]="activeItem() ? 'opacity-100 visible z-99' : 'opacity-0 invisible z-[-99]'"
                class="lg:block hidden animate-fadein animate-duration-150 w-[473px] absolute top-full rounded-2xl overflow-hidden bg-surface-50 dark:bg-surface-900 transition-all border border-surface-200 dark:border-surface-700"
              >
                <div class="p-1 shadow-sm rounded-2xl overflow-hidden bg-surface-0 dark:bg-surface-950">
                  <div class="grid grid-cols-2 overflow-hidden">
                    @for (subItem of activeItem()?.subMenu; track subItem.label; let j = $index) {
                      <div>
                        <a
                          [href]="subItem.to"
                          class="flex items-start gap-2 w-full p-4 transition-all hover:bg-surface-100 dark:hover:bg-surface-900 rounded-xl"
                          (mouseenter)="selectedCategory.set(j)"
                        >
                          <span class="w-8 h-8 rounded-[6px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                            <i [class]="subItem.icon" class="text-sm!"></i>
                          </span>
                          <span class="flex-1">
                            <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                            <span class="text-sm leading-tight text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                          </span>
                        </a>
                      </div>
                    }
                  </div>
                </div>
                <div class="p-4 bg-surface-100 dark:bg-surface-800">
                  <div class="flex items-center gap-2.5">
                    <span class="text-sm font-semibold leading-tight text-surface-900 dark:text-surface-0">Pretium quam</span>
                    <span class="bg-surface-900 dark:bg-surface-0 text-surface-0 dark:text-surface-900 px-2 py-1 rounded-[10.5px] text-[10.5px] font-bold">New</span>
                  </div>
                  <p class="text-sm leading-tight text-surface-600 dark:text-surface-400 mt-2">At consectetur lorem donec massa sapien faucibus et.</p>
                </div>
              </div>
            }
          </ul>
          <div class="border-t border-surface-200 dark:border-surface-700 mt-4 lg:mt-0 lg:border-0">
            <div class="flex items-center justify-between lg:justify-center gap-6 px-8 lg:px-0 py-4">
              <button pButton [text]="true">
                <span pButtonLabel>Login</span>
              </button>
              <button pButton>
                <span pButtonLabel>Register</span>
              </button>
            </div>
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
          label: 'Customers',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-users',
          to: '#',
        },
        {
          label: 'Solutions',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-shield',
          to: '#',
        },
        {
          label: 'Case Studies',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-table',
          to: '#',
        },
        {
          label: 'Integration',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-file',
          to: '#',
        },
        {
          label: 'Support',
          description: 'Subtext of Menu Item',
          icon: 'pi pi-tags',
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
