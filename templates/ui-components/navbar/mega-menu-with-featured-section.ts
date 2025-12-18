import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-12 min-h-screen h-full custom-gradient">
      <div
        class="py-4 px-6 md:px-12 lg:px-20 shadow-[0px_4px_10px_rgba(0,0,0,0.03),0px_0px_2px_rgba(0,0,0,0.06),0px_2px_6px_rgba(0,0,0,0.12)] flex items-center justify-between relative bg-black/50 backdrop-blur-[70px]"
      >
        <div class="flex items-center gap-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.84219 2.87829C5.69766 3.67858 4.6627 4.62478 3.76426 5.68992C7.4357 5.34906 12.1001 5.90564 17.5155 8.61335C23.2984 11.5047 27.955 11.6025 31.1958 10.9773C30.9017 10.087 30.5315 9.23135 30.093 8.41791C26.3832 8.80919 21.6272 8.29127 16.0845 5.51998C12.5648 3.76014 9.46221 3.03521 6.84219 2.87829ZM27.9259 5.33332C24.9962 2.06 20.7387 0 16 0C14.6084 0 13.2581 0.177686 11.9709 0.511584C13.7143 0.987269 15.5663 1.68319 17.5155 2.65781C21.5736 4.68682 25.0771 5.34013 27.9259 5.33332ZM31.8887 14.1025C27.9735 14.8756 22.567 14.7168 16.0845 11.4755C10.024 8.44527 5.20035 8.48343 1.94712 9.20639C1.7792 9.24367 1.61523 9.28287 1.45522 9.32367C1.0293 10.25 0.689308 11.2241 0.445362 12.2356C0.705909 12.166 0.975145 12.0998 1.25293 12.0381C5.19966 11.161 10.7761 11.1991 17.5155 14.5689C23.5761 17.5991 28.3997 17.561 31.6529 16.838C31.7644 16.8133 31.8742 16.7877 31.9822 16.7613C31.9941 16.509 32 16.2552 32 16C32 15.358 31.9622 14.7248 31.8887 14.1025ZM31.4598 20.1378C27.5826 20.8157 22.3336 20.5555 16.0845 17.431C10.024 14.4008 5.20035 14.439 1.94712 15.1619C1.225 15.3223 0.575392 15.5178 0.002344 15.7241C0.000781601 15.8158 0 15.9078 0 16C0 24.8366 7.16344 32 16 32C23.4057 32 29.6362 26.9687 31.4598 20.1378Z"
              class="fill-surface-0"
            ></path>
          </svg>
          <span class="text-lg font-semibold text-surface-0 leading-normal">Trimzales</span>
        </div>

        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-12"
          [hideOnResize]="true"
          class="cursor-pointer block lg:hidden text-surface-0"
        >
          <i class="pi pi-bars text-2xl!"></i>
        </a>

        <div
          class="items-center grow justify-between hidden lg:flex absolute lg:static w-full lg:w-auto left-0 right-0 top-full px-6 md:px-12 lg:px-0 z-50 bg-black/50 lg:bg-transparent backdrop-blur-[70px] lg:backdrop-blur-none shadow-md lg:shadow-none"
        >
          <ul class="list-none p-0 py-4 lg:py-0 m-0 flex grow lg:items-center lg:justify-center text-surface-0 select-none flex-col lg:flex-row">
            @for (item of ['Product', 'Solutions', 'Company', 'Careers', 'Pricing']; track item) {
              <li class="lg:px-7">
                <a
                  [pStyleClass]="item === 'Product' ? '@next' : ''"
                  [enterFromClass]="item === 'Product' ? 'hidden' : ''"
                  [leaveToClass]="item === 'Product' ? 'hidden' : ''"
                  [hideOnOutsideClick]="item === 'Product' ? true : false"
                  class="flex px-0 py-3 items-center text-lg font-medium leading-tight hover:text-surface-0/80 transition-colors duration-150 cursor-pointer"
                >
                  <span>{{ item }}</span>
                </a>
                @if (item === 'Product') {
                  <div class="lg:absolute hidden left-0 top-full w-full lg:bg-black/50 lg:backdrop-blur-[70px] lg:shadow-[0px_4px_10px_rgba(0,0,0,0.03),0px_0px_2px_rgba(0,0,0,0.06),0px_2px_6px_rgba(0,0,0,0.12)]">
                    <div class="flex flex-col lg:flex-row gap-8 p-4 lg:p-12 lg:px-20">
                      <div class="flex-1 flex flex-col gap-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                          @for (feature of features(); track feature.title; let index = $index) {
                            <div class="flex gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                              <div [ngClass]="'p-3 h-fit rounded-lg flex items-center justify-center ' + feature.bgColor">
                                <i [ngClass]="'pi ' + feature.icon + ' text-2xl! leading-none! ' + feature.iconColor"></i>
                              </div>
                              <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-2">
                                  <span class="text-lg text-white font-semibold leading-tight">{{ feature.title }}</span>
                                  @if (feature.badge) {
                                    <span class="bg-orange-100 text-orange-700 text-sm font-bold px-2 py-1 rounded">{{ feature.badge }}</span>
                                  }
                                </div>
                                <p class="text-lg leading-tight text-white/70 m-0">{{ feature.description }}</p>
                              </div>
                            </div>
                          }
                        </div>
                      </div>

                      <div class="flex-1">
                        <div class="flex flex-col gap-4">
                          <span class="font-semibold leading-tight uppercase">Featured</span>
                          <div class="flex flex-col gap-6">
                            @for (featuredItem of featuredItems(); track featuredItem.title; let index = $index) {
                              <div class="flex gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer">
                                <img [src]="featuredItem.image" [alt]="featuredItem.title" class="w-[140px] h-[79px] object-cover rounded-lg sm:flex hidden shrink-0" />
                                <div class="flex flex-col gap-2 text-white hover:text-surface-0/90 transition-colors duration-150">
                                  <h3 class="text-lg font-medium leading-tight m-0">{{ featuredItem.title }}</h3>
                                  <p class="leading-normal text-white/70 m-0">{{ featuredItem.description }}</p>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </li>
            }
          </ul>
          <div class="flex border-t lg:border-t-0 border-surface-0/60 py-4 lg:py-0 mt-4 lg:mt-0">
            <button pButton severity="contrast">
              <span pButtonLabel>Sign In</span>
              <i class="pi pi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .custom-gradient {
        background-color: hsla(0, 100%, 50%, 1);
        background-image:
          radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
      }
    `,
  ],
})
export class __CLASS_NAME__ {
  features = signal([
    {
      icon: 'pi-bolt',
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-100',
      title: 'Integrations',
      badge: 'New',
      description: 'Non blandit massa enim nec dui nunc mattis.',
    },
    {
      icon: 'pi-chart-pie',
      iconColor: 'text-green-500',
      bgColor: 'bg-green-100',
      title: 'Analytics',
      description: 'Congue quisque egestas diam.',
    },
    {
      icon: 'pi-book',
      iconColor: 'text-indigo-500',
      bgColor: 'bg-indigo-100',
      title: 'Documentation',
      description: 'Cursus mattis molestie a iaculis.',
    },
    {
      icon: 'pi-tag',
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-100',
      title: 'Support',
      description: 'Cursus mattis molestie a iaculis.',
    },
  ]);

  featuredItems = signal([
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/navbar-1.jpeg',
      title: 'Learn how to use Peak in 10 mins',
      description: 'Enim diam vulputate ut pharetra sit. Eget arcu dictum varius duis at consectetur lorem donec.',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/navbar/navbar-2.jpeg',
      title: 'Reimagining development lifecycles',
      description: 'Habitant morbi tristique senectus et netus et malesuada fames. Ut placerat orci nulla pellentesque dignissim.',
    },
  ]);
}
