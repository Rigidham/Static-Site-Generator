import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-6 min-h-screen h-full w-full bg-surface-0 dark:bg-surface-950">
      <nav class="relative w-full flex items-center px-8 lg:px-20 gap-6 py-6 lg:py-2" (mouseleave)="closeMenu()">
        <a href="#" class="relative z-20 flex items-center gap-4">
          <svg class="fill-surface-900 dark:fill-surface-0" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83503 27.165 0 17.5 0C7.83501 0 0 7.83503 0 17.5C0 27.165 7.83501 35 17.5 35ZM22.9594 8.15224C23.2252 7.2083 22.3091 6.65012 21.4725 7.24614L9.79399 15.5659C8.8867 16.2122 9.02941 17.5 10.0084 17.5H13.0836V17.4762H19.0772L14.1936 19.1993L12.0406 26.8478C11.7749 27.7917 12.6909 28.3499 13.5275 27.7539L25.2061 19.4342C26.1134 18.7878 25.9706 17.5 24.9917 17.5H20.3281L22.9594 8.15224Z"
            ></path>
          </svg>
          <div class="text-surface-900 dark:text-surface-0 text-lg font-semibold">ZenTrailMs</div>
        </a>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-6"
          [hideOnResize]="true"
          class="relative z-20 cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-0 ml-auto"
        >
          <i class="pi pi-bars text-2xl!"></i>
        </a>
        <div class="border-b border-surface lg:border-0 animate-fadein absolute lg:static bg-surface-50 dark:bg-surface-900 lg:bg-transparent lg:dark:bg-transparent w-full top-full left-0 right-0 shadow-md lg:shadow-none z-20 lg:z-auto pt-0 lg:py-0 hidden lg:flex flex-1 items-center">
          <ul class="mt-4 lg:mt-0 lg:border-0 select-none relative flex-1 flex lg:flex-row flex-col lg:mb-0 mb-4 lg:items-center gap-2 lg:gap-6 p-4" (mouseleave)="hoveredItem.set(null)">
            @for (item of navs(); track item.label; let index = $index) {
              <li (mouseenter)="setActiveItem(item)" (click)="setActiveItem(item)">
                @if (item?.subMenu) {
                  <a
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    [ngClass]="activeItem()?.label === item.label ? 'bg-surface-100 dark:bg-surface-800' : ''"
                    class="group cursor-pointer relative rounded-xl px-4 py-2.5 transition-all flex items-center justify-between gap-2 text-base font-medium leading-tight"
                  >
                    {{ item.label }}
                    <i class="pi pi-angle-down text-base! leading-none!"></i>
                  </a>
                } @else {
                  <a class="rounded-xl px-4 py-2.5 transition-all flex hover:bg-surface-100 dark:hover:bg-surface-800 text-base font-medium leading-tight" [href]="item.to">{{ item.label }}</a>
                }
                @if (item?.subMenu) {
                  <div class="lg:hidden py-4 hidden animate-fadein bg-surface-50 dark:bg-surface-900 mx-4 rounded-lg">
                    <ul class="flex flex-col gap-3">
                      @for (subItem of item.subMenu; track subItem.label; let j = $index) {
                        <li>
                          <a class="p-4! flex items-start gap-2.5 w-full py-2 text-surface-700 dark:text-surface-200 cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg">
                            <span class="w-8 h-8 rounded-[10.5px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                              <i [class]="subItem.icon" class="text-base!"></i>
                            </span>
                            <span class="flex-1">
                              <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                              <span class="text-sm leading-normal text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                            </span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                }
                @if (item?.subMenu && activeItem()?.label === item.label) {
                  <div
                    [ngClass]="activeItem() ? 'opacity-100 visible z-50' : 'opacity-0 invisible z-[-1]'"
                    class="xl:flex hidden animate-fadein animate-duration-150 w-[1041px] absolute top-full left-0 rounded-[21px] overflow-hidden bg-surface-50 dark:bg-surface-900 transition-all border border-surface-200 dark:border-surface-700 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
                  >
                    <div class="flex w-full bg-surface-0 dark:bg-surface-950 rounded-[21px] overflow-hidden">
                      <div class="w-[330px] p-4 bg-surface-0 dark:bg-surface-950">
                        @for (subItem of activeItem()?.subMenu.slice(0, 4); track subItem.label; let j = $index) {
                          <div class="p-1">
                            <a
                              [href]="subItem.to"
                              [ngClass]="{ 'bg-surface-50 dark:bg-surface-900': selectedCategory() === j }"
                              class="flex items-start gap-2.5 w-full p-4 transition-all hover:bg-surface-50 dark:hover:bg-surface-900 rounded-[10.5px]"
                              (mouseenter)="selectedCategory.set(j)"
                            >
                              <span class="w-8 h-8 rounded-[10.5px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                                <i [class]="subItem.icon" class="text-base!"></i>
                              </span>
                              <span class="flex-1">
                                <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                                <span class="text-sm leading-normal text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                              </span>
                            </a>
                          </div>
                        }
                      </div>
                      <div class="w-[330px] p-3.5">
                        @for (subItem of activeItem()?.subMenu.slice(4); track subItem.label; let j = $index) {
                          <div class="p-1">
                            <a
                              [href]="subItem.to"
                              class="flex items-start gap-2.5 w-full p-4 transition-all hover:bg-surface-100 dark:hover:bg-surface-900 rounded-[10.5px]"
                              (mouseenter)="selectedCategory.set(j + 4)"
                            >
                              <span class="w-8 h-8 rounded-[10.5px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                                <i [class]="subItem.icon" class="text-base!"></i>
                              </span>
                              <span class="flex-1">
                                <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                                <span class="text-sm leading-normal text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                              </span>
                            </a>
                          </div>
                        }
                      </div>
                      <div class="flex-1 bg-surface-50 dark:bg-surface-800 rounded-[21px] flex flex-col shadow-[0px_-1px_1.5px_rgba(0,0,0,0.12)_inset] overflow-hidden">
                        <div class="p-5">
                          <h3 class="text-lg font-medium leading-tight text-surface-900 dark:text-surface-0">We've just released an update!</h3>
                          <p class="mt-4 text-base leading-normal text-surface-500">Discover the latest enhancements to our UI and explore the exciting new features we've introduced.</p>
                        </div>
                        <div class="flex-1">
                          <img
                            class="w-full h-full object-cover rounded-[21px]"
                            src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/navbar-12-video-bg.jpg"
                            alt="Navbar Video Section Background Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </li>
            }
          </ul>
          @if (activeItem()?.subMenu) {
            <div
              [ngClass]="activeItem() ? 'opacity-100 visible z-50' : 'opacity-0 invisible z-[-1]'"
              class="lg:flex xl:hidden hidden animate-fadein animate-duration-150 w-full absolute top-full left-0 rounded-[21px] overflow-hidden bg-surface-50 dark:bg-surface-900 transition-all border border-surface-200 dark:border-surface-700 shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),0px_20px_25px_-5px_rgba(0,0,0,0.1)]"
            >
              <div class="flex w-full bg-surface-0 dark:bg-surface-950 rounded-[21px] overflow-hidden">
                <div class="w-[330px] p-4 bg-surface-0 dark:bg-surface-950">
                  @for (subItem of activeItem()?.subMenu.slice(0, 4); track subItem.label; let j = $index) {
                    <div class="p-1">
                      <a
                        [href]="subItem.to"
                        [ngClass]="{ 'bg-surface-50 dark:bg-surface-900': selectedCategory() === j }"
                        class="flex items-start gap-2.5 w-full p-4 transition-all hover:bg-surface-50 dark:hover:bg-surface-900 rounded-[10.5px]"
                        (mouseenter)="selectedCategory.set(j)"
                      >
                        <span class="w-8 h-8 rounded-[10.5px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                          <i [class]="subItem.icon" class="text-base!"></i>
                        </span>
                        <span class="flex-1">
                          <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                          <span class="text-sm leading-normal text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                        </span>
                      </a>
                    </div>
                  }
                </div>
                <div class="w-[330px] p-3.5">
                  @for (subItem of activeItem()?.subMenu.slice(4); track subItem.label; let j = $index) {
                    <div class="p-1">
                      <a
                        [href]="subItem.to"
                        class="flex items-start gap-2.5 w-full p-4 transition-all hover:bg-surface-100 dark:hover:bg-surface-900 rounded-[10.5px]"
                        (mouseenter)="selectedCategory.set(j + 4)"
                      >
                        <span class="w-8 h-8 rounded-[10.5px] border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 flex items-center justify-center p-1.5">
                          <i [class]="subItem.icon" class="text-base!"></i>
                        </span>
                        <span class="flex-1">
                          <h4 class="text-base leading-tight font-medium text-surface-900 dark:text-surface-0">{{ subItem.label }}</h4>
                          <span class="text-sm leading-normal text-surface-600 dark:text-surface-400">{{ subItem.description }}</span>
                        </span>
                      </a>
                    </div>
                  }
                </div>
                <div class="flex-1 bg-surface-50 dark:bg-surface-800 rounded-[21px] flex flex-col shadow-[0px_-1px_1.5px_rgba(0,0,0,0.12)_inset] overflow-hidden">
                  <div class="p-5">
                    <h3 class="text-lg font-medium leading-tight text-surface-900 dark:text-surface-0">We've just released an update!</h3>
                    <p class="mt-4 text-base leading-normal text-surface-500">Discover the latest enhancements to our UI and explore the exciting new features we've introduced.</p>
                  </div>
                  <div class="flex-1">
                    <img
                      class="w-full h-full object-cover rounded-[21px]"
                      src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/navbar-12-video-bg.jpg"
                      alt="Navbar Video Section Background Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          }
          <div class="flex items-center justify-between lg:justify-center gap-6 px-4 lg:px-0 py-4 lg:py-0 border-t border-surface-200 dark:border-surface-700 lg:border-0">
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
          label: 'Pricing',
          description: 'A dollar sign or price tag icon to represent costs.',
          icon: 'pi pi-money-bill',
          to: '#',
        },
        {
          label: 'Blog',
          description: 'An open book or pen icon for articles and content.',
          icon: 'pi pi-database',
          to: '#',
        },
        {
          label: 'Careers',
          description: 'A briefcase or user icon for job opportunities.',
          icon: 'pi pi-book',
          to: '#',
        },
        {
          label: 'Support',
          description: 'A headset or lifebuoy icon to indicate help and assistance.',
          icon: 'pi pi-phone',
          to: '#',
        },
        {
          label: 'Events',
          description: 'A calendar or clock icon to indicate dates and schedules.',
          icon: 'pi pi-megaphone',
          to: '#',
        },
        {
          label: 'Contact Us',
          description: 'An envelope or phone icon to suggest communication.',
          icon: 'pi pi-file-edit',
          to: '#',
        },
        {
          label: 'Partners',
          description: 'A handshake or link icon to symbolize collaboration.',
          icon: 'pi pi-users',
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
