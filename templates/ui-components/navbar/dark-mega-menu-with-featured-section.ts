import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-5 min-h-screen h-full w-full bg-surface-0 dark:bg-surface-950">
      <nav class="relative w-full flex items-center px-8 lg:px-20 gap-6 bg-surface-900 lg:py-0 py-4" (mouseleave)="closeMenu()">
        <a href="#" class="relative z-20 flex items-center gap-4">
          <svg class="fill-surface-0" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.5 35.5C27.165 35.5 35 27.665 35 18C35 8.33503 27.165 0.5 17.5 0.5C7.83501 0.5 0 8.33503 0 18C0 27.665 7.83501 35.5 17.5 35.5ZM22.9594 8.65224C23.2252 7.7083 22.3091 7.15012 21.4725 7.74614L9.79399 16.0659C8.8867 16.7122 9.02941 18 10.0084 18H13.0836V17.9762H19.0772L14.1936 19.6993L12.0406 27.3478C11.7749 28.2917 12.6909 28.8499 13.5275 28.2539L25.2061 19.9342C26.1134 19.2878 25.9706 18 24.9917 18H20.3281L22.9594 8.65224Z"
            ></path>
          </svg>
          <div class="text-surface-0 text-lg font-semibold">ZenTrailMs</div>
        </a>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-5"
          [hideOnResize]="true"
          class="relative z-20 cursor-pointer block lg:hidden text-surface-100 mr-0 ml-auto"
        >
          <i class="pi pi-bars text-2xl"></i>
        </a>
        <div class="border-b border-surface-700 lg:border-0 animate-fadein absolute lg:static bg-surface-900 lg:bg-transparent lg:dark:bg-transparent w-full top-full left-0 right-0 shadow-md lg:shadow-none z-20 lg:z-auto pt-0 pb-4 lg:py-0 hidden lg:flex flex-1 items-center">
          <ul class="mt-4 lg:mt-0 lg:border-0 select-none relative flex-1 flex lg:flex-row flex-col lg:mb-0 mb-4 lg:items-center lg:justify-center gap-2 lg:gap-8 p-4">
            @for (item of navs(); track item.label; let index = $index) {
              <li class="cursor-pointer font-medium text-surface-400 hover:text-surface-0" (mouseenter)="setActiveItem(item)" (click)="setActiveItem(item)">
                @if (item?.subMenu) {
                  <a
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    leaveToClass="hidden"
                    [hideOnOutsideClick]="true"
                    [ngClass]="activeItem()?.label === item.label ? 'border-surface-400' : 'border-transparent'"
                    class="group relative lg:border-b py-2 transition-all flex items-center justify-between gap-2 text-base leading-tight"
                  >
                    {{ item.label }}
                    <i class="pi pi-angle-down text-base! leading-none!"></i>
                    <span
                      [ngClass]="activeItem()?.label === item.label ? 'opacity-100' : 'opacity-0'"
                      class="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 transition-all border-l-4 border-l-transparent border-r-4 border-transparent border-t-4 border-t-surface-400"
                    ></span>
                  </a>
                } @else {
                  <a class="py-2 transition-all flex text-base leading-tight" [href]="item.to">{{ item.label }}</a>
                }
                @if (item?.subMenu) {
                  <div class="lg:hidden py-4 hidden animate-fadein">
                    <ul class="flex flex-col gap-3">
                      @for (subItem of item.subMenu; track subItem.label; let j = $index) {
                        <li class="px-4">
                          <a class="flex items-start gap-2.5 w-full py-2 text-surface-200">
                            <img class="w-6 h-6" [src]="subItem.icon" alt="icon" />
                            <span class="flex-1">
                              <h4 class="text-base leading-tight font-medium text-surface-0">{{ subItem.label }}</h4>
                              <span class="text-sm leading-normal text-surface-400">{{ subItem.description }}</span>
                            </span>
                          </a>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </li>
            }
          </ul>
          <div class="flex items-center justify-between lg:justify-center gap-6 px-8 lg:px-0">
            <button pButton [text]="true" class="text-primary-contrast dark:text-primary">
              <span pButtonLabel>Login</span>
            </button>
            <button pButton>
              <span pButtonLabel> Register </span>
            </button>
          </div>
        </div>
        @if (activeItem()?.subMenu) {
          <div
            [ngClass]="activeItem() ? 'opacity-100 visible z-99' : 'opacity-0 invisible z-[-99]'"
            class="pl-8 lg:pl-20 lg:flex hidden animate-fadein animate-duration-150 w-full absolute top-full left-0 overflow-hidden bg-surface-800 transition-all shadow-[0px_24px_48px_rgba(0,0,0,0.06)]"
          >
            <div class="flex-1 py-8 pr-10 grid grid-cols-3 gap-4">
              @for (subItem of activeItem()?.subMenu; track subItem.label; let j = $index) {
                <a
                  [href]="subItem.to"
                  [ngClass]="{ 'bg-surface-700': selectedCategory() === j }"
                  class="group flex items-start gap-2 w-full p-4 transition-all hover:bg-surface-700 rounded-lg"
                  (mouseenter)="selectedCategory.set(j)"
                >
                  <img class="w-6 h-6" [src]="subItem.icon" alt="icon" />
                  <span class="flex-1">
                    <h4 class="text-base font-medium leading-tight text-surface-0">{{ subItem.label }}</h4>
                    <span class="text-sm leading-normal text-surface-400">{{ subItem.description }}</span>
                  </span>
                </a>
              }
            </div>
            <div class="w-[280px] bg-surface-700 p-8 flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <img class="w-full h-[140px] object-cover rounded-lg" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/navbar-feature-img.jpg" alt="Featured Image" />
                <div class="flex flex-col gap-2">
                  <h4 class="text-lg font-medium leading-tight text-surface-0">Congue</h4>
                  <p class="text-sm leading-normal text-surface-400">Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.</p>
                </div>
              </div>
              <a class="group inline-flex items-center gap-2 font-medium text-surface-0 cursor-pointer">
                <span>See all</span>
                <i class="group-hover:translate-x-2 transition-all pi pi-chevron-right text-base! leading-none!"></i>
              </a>
            </div>
          </div>
        }
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
          label: 'Shodan',
          description: 'Auctor augue mauris augue neque gravida in.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-1.svg',
          to: '#',
        },
        {
          label: 'Consequat',
          description: 'Odio aenean sed adipiscing diam donec adipiscing tristique.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-2.svg',
          to: '#',
        },
        {
          label: 'Nullam',
          description: 'Nibh mauris cursus mattis molestie a iaculis.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-3.svg',
          to: '#',
        },
        {
          label: 'Mauris',
          description: 'Leo vel fringilla est ullamcorper eget nulla facilisi etiam.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-4.svg',
          to: '#',
        },
        {
          label: 'Suspendisse',
          description: 'Condimentum mattis pellentesque id nibh tortor id aliquet.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-5.svg',
          to: '#',
        },
        {
          label: 'Massa',
          description: 'Ullamcorper sit amet risus nullam eget felis eget nunc lobortis.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-6.svg',
          to: '#',
        },
        {
          label: 'Egestas',
          description: 'Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-7.svg',
          to: '#',
        },
        {
          label: 'Lectus',
          description: 'Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-8.svg',
          to: '#',
        },
        {
          label: 'Tempor',
          description: 'Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae.',
          icon: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/illustration-9.svg',
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
