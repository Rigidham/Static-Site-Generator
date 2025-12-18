import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule, StyleClassModule],
  template: `
    <div class="resize-container-4 min-h-screen h-full bg-surface-50 dark:bg-surface-950">
      <div class="bg-surface-900 py-4 px-12 shadow flex items-center justify-between relative">
        <div class="flex items-center gap-4 py-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.84219 2.87829C5.69766 3.67858 4.6627 4.62478 3.76426 5.68992C7.4357 5.34906 12.1001 5.90564 17.5155 8.61335C23.2984 11.5047 27.955 11.6025 31.1958 10.9773C30.9017 10.087 30.5315 9.23135 30.093 8.41791C26.3832 8.80919 21.6272 8.29127 16.0845 5.51998C12.5648 3.76014 9.46221 3.03521 6.84219 2.87829ZM27.9259 5.33332C24.9962 2.06 20.7387 0 16 0C14.6084 0 13.2581 0.177686 11.9709 0.511584C13.7143 0.987269 15.5663 1.68319 17.5155 2.65781C21.5736 4.68682 25.0771 5.34013 27.9259 5.33332ZM31.8887 14.1025C27.9735 14.8756 22.567 14.7168 16.0845 11.4755C10.024 8.44527 5.20035 8.48343 1.94712 9.20639C1.7792 9.24367 1.61523 9.28287 1.45522 9.32367C1.0293 10.25 0.689308 11.2241 0.445362 12.2356C0.705909 12.166 0.975145 12.0998 1.25293 12.0381C5.19966 11.161 10.7761 11.1991 17.5155 14.5689C23.5761 17.5991 28.3997 17.561 31.6529 16.838C31.7644 16.8133 31.8742 16.7877 31.9822 16.7613C31.9941 16.509 32 16.2552 32 16C32 15.358 31.9622 14.7248 31.8887 14.1025ZM31.4598 20.1378C27.5826 20.8157 22.3336 20.5555 16.0845 17.431C10.024 14.4008 5.20035 14.439 1.94712 15.1619C1.225 15.3223 0.575392 15.5178 0.002344 15.7241C0.000781601 15.8158 0 15.9078 0 16C0 24.8366 7.16344 32 16 32C23.4057 32 29.6362 26.9687 31.4598 20.1378Z"
              class="fill-primary"
            />
          </svg>
          <span class="text-xl font-medium text-surface-0">Trimzales</span>
        </div>
        <a
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-fadein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
          resizeSelector=".resize-container-4"
          [hideOnResize]="true"
          class="cursor-pointer block lg:hidden text-surface-100 mt-1"
        >
          <i class="pi pi-bars text-2xl!"></i>
        </a>
        <div class="items-center grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-50 shadow lg:shadow-none bg-surface-900">
          <ul class="list-none p-0 py-4 lg:py-0 m-0 flex grow lg:items-center lg:justify-center text-surface-400 select-none flex-col lg:flex-row cursor-pointer">
            <li>
              <a
                pStyleClass="@next"
                enterFromClass="hidden"
                enterActiveClass="animate-scalein"
                leaveToClass="hidden"
                leaveActiveClass="animate-fadeout"
                [hideOnOutsideClick]="true"
                class="flex px-0 lg:px-8 py-4 items-center hover:text-surface-0 font-medium transition-colors duration-150 cursor-pointer"
              >
                <span>Products</span>
                <i class="pi pi-chevron-down ml-auto lg:ml-4"></i>
              </a>
              <div class="lg:absolute bg-surface-800 lg:bg-surface-900 hidden origin-top left-0 top-full w-full lg:px-12 lg:py-4 lg:pb-12 lg:rounded-b-2xl rounded-2xl lg:rounded-t-none">
                <div class="flex flex-wrap lg:p-12 p-6 w-full lg:bg-surface-800 lg:rounded-2xl">
                  <div class="w-full lg:w-6/12 mb-6 lg:mb-0 flex flex-col gap-4">
                    <span class="block text-3xl text-surface-0 leading-tight">Products</span>
                    <p class="leading-normal text-surface-500 max-w-md">Nisl rhoncus mattis rhoncus urna. Sed enim ut sem viverra aliquet eget sit amet tellus.</p>
                  </div>
                  <div class="w-full lg:w-6/12">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-surface-700 pb-4 mb-4 gap-4">
                      <div class="flex flex-col gap-2">
                        <span class="text-surface-0 font-medium leading-tight">Shodan</span>
                        <p class="text-sm text-surface-500 leading-normal">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <span class="text-surface-0 font-medium leading-tight">Bastion</span>
                        <p class="text-sm text-surface-500 leading-normal">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <span class="text-surface-0 font-medium leading-tight">Hodly</span>
                        <p class="text-sm text-surface-500 leading-normal">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <span class="text-surface-0 font-medium leading-tight">Peak</span>
                        <p class="text-sm text-surface-500 leading-normal">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <span class="text-surface-0 font-medium leading-tight">Franki</span>
                        <p class="text-sm text-surface-500 leading-normal">Porta lorem mollis aliquam ut porttitor leo a diam.</p>
                      </div>
                    </div>
                    <div class="flex justify-end mt-4">
                      <a class="flex items-center gap-2 text-surface-0 font-medium group">
                        <span>Case Studies</span>
                        <i class="pi pi-arrow-right ml-auto group-hover:translate-x-2 transition-all duration-150"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a class="flex px-0 lg:px-8 py-4 hover:text-surface-0 font-medium transition-colors duration-150 cursor-pointer">
                <span>Corporate</span>
              </a>
            </li>
            <li>
              <a class="flex px-0 lg:px-8 py-4 hover:text-surface-0 font-medium transition-colors duration-150 cursor-pointer">
                <span>Resources</span>
              </a>
            </li>
            <li>
              <a class="flex px-0 lg:px-8 py-4 hover:text-surface-0 font-medium transition-colors duration-150 cursor-pointer">
                <span>Pricing</span>
              </a>
            </li>
          </ul>
          <div class="flex border-t lg:border-t-0 border-surface-700 lg:border-surface-800 py-4 lg:py-0 mt-4 lg:mt-0 gap-4">
            <button pButton [text]="true">
              <span pButtonLabel>Login</span>
            </button>
            <button pButton>
              <span pButtonLabel>Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
