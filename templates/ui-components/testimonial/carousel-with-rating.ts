import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 px-4 sm:px-8 py-20 md:px-12 lg:px-20">
      <div class="max-w-5xl mx-auto">
        <div class="flex items-center gap-2 w-fit mx-auto">
          @for (n of [1, 2, 3, 4, 5]; track n) {
            <i class="pi pi-star-fill text-xl! leading-none! text-yellow-500"></i>
          }
        </div>

        <p class="mx-auto text-center my-8 md:my-10 text-lg leading-normal text-surface-600 dark:text-surface-400">"{{ testimonials[currentIndex()].quote }}"</p>

        <div class="flex md:flex-row flex-col items-center gap-6 w-fit mx-auto p-4 md:p-2 md:pr-8 border border-surface-200 dark:border-surface-700 rounded-xl md:rounded-full">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full border border-surface-200 dark:border-surface-700">
              <img class="w-full h-full object-cover rounded-full" [src]="testimonials[currentIndex()].avatar" [alt]="testimonials[currentIndex()].name" />
            </div>
            <div>
              <h5 class="font-semibold text-left text-lg text-surface-900 dark:text-surface-0 leading-tight">{{ testimonials[currentIndex()].name }}</h5>
              <span class="text-surface-600 dark:text-surface-400 mt-1 text-base block leading-tight">{{ testimonials[currentIndex()].title }}</span>
            </div>
          </div>

          <div class="md:w-px w-full h-px md:h-8 bg-surface-200 dark:bg-surface-700"></div>

          <div class="flex items-center gap-4">
            @if (testimonials[currentIndex()].logo === 'zentrailms') {
              <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.5 40C31.5457 40 40.5 31.0457 40.5 20C40.5 8.95431 31.5457 0 20.5 0C9.45429 0 0.5 8.95431 0.5 20C0.5 31.0457 9.45429 40 20.5 40ZM26.7393 9.31684C27.043 8.23805 25.9961 7.60013 25.04 8.2813L11.6931 17.7896C10.6562 18.5283 10.8193 20 11.9381 20H15.4527V19.9728H22.3025L16.7212 21.9421L14.2607 30.6832C13.957 31.762 15.0038 32.3999 15.96 31.7187L29.3069 22.2105C30.3438 21.4718 30.1806 20 29.0619 20H23.7321L26.7393 9.31684Z"
                  class="fill-surface-900 dark:fill-surface-0"
                />
              </svg>
            }

            @if (testimonials[currentIndex()].logo === 'techflow') {
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
                <path d="M22.3773 17.7771C22.1066 18.9176 21.5351 19.9422 20.751 20.763L27.103 27.0935L29.4142 24.7901L22.3773 17.7771Z" class="fill-surface-900 dark:fill-surface-0" />
                <path d="M20.687 20.8291C19.8935 21.6369 18.8906 22.2396 17.766 22.5503L20.0774 31.147L23.2345 30.3039L20.687 20.8291Z" class="fill-surface-900 dark:fill-surface-0" />
                <path
                  d="M20.1424 0.843083L16.9853 0L14.3248 9.8956L11.9228 0.961786L8.76555 1.80487L11.3608 11.4572L4.8967 5.01516L2.58549 7.3185L9.67576 14.3847L0.845959 12.0268L0 15.1732L9.64767 17.7495C9.53721 17.2747 9.47877 16.78 9.47877 16.2717C9.47877 12.6736 12.4055 9.7568 16.0159 9.7568C19.6262 9.7568 22.5529 12.6736 22.5529 16.2717C22.5529 16.7767 22.4952 17.2684 22.3861 17.7404L31.1541 20.0817L32 16.9353L22.314 14.3488L31.1444 11.9907L30.2984 8.84433L20.6128 11.4307L27.0768 4.98871L24.7656 2.68537L17.7737 9.65353L20.1424 0.843083Z"
                  class="fill-surface-900 dark:fill-surface-0"
                />
                <path d="M17.6456 22.582C17.1238 22.7156 16.5769 22.7867 16.0133 22.7867C15.4095 22.7867 14.8248 22.7051 14.2697 22.5524L11.9562 31.157L15.1134 32L17.6456 22.582Z" class="fill-surface-900 dark:fill-surface-0" />
                <path d="M14.1608 22.5202C13.0533 22.1942 12.0683 21.5837 11.2909 20.7736L4.92331 27.1196L7.23451 29.4229L14.1608 22.5202Z" class="fill-surface-900 dark:fill-surface-0" />
                <path d="M11.2358 20.7177C10.4717 19.9025 9.9152 18.8916 9.6503 17.7687L0.85373 20.1178L1.69968 23.2641L11.2358 20.7177Z" class="fill-surface-900 dark:fill-surface-0" />
              </svg>
            }

            @if (testimonials[currentIndex()].logo === 'designpro') {
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10">
                <g clip-path="url(#clip0_9217_4871)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.0001 10.5168C22.9165 10.4609 22.832 10.4065 22.7468 10.3536C20.4007 8.89712 18 6.76142 18 4V0C21.56 0 25.0402 1.05568 28.0003 3.03355C30.9604 5.01141 33.2674 7.82263 34.6298 11.1117C35.9922 14.4007 36.3487 18.02 35.6541 21.5116C34.9596 25.0033 33.2453 28.2106 30.7279 30.7279C28.2106 33.2453 25.0033 34.9596 21.5116 35.6541C18.02 36.3487 14.4007 35.9922 11.1117 34.6298C7.82263 33.2674 5.01141 30.9604 3.03355 28.0003C1.05568 25.0402 0 21.56 0 18H4C6.76142 18 8.89712 20.4007 10.3536 22.7468C10.4065 22.832 10.4609 22.9165 10.5168 23.0001C11.5057 24.4802 12.9113 25.6337 14.5559 26.3149C16.2004 26.9961 18.01 27.1743 19.7558 26.827C21.5016 26.4798 23.1052 25.6226 24.364 24.364C25.6226 23.1052 26.4798 21.5016 26.827 19.7558C27.1743 18.01 26.9961 16.2004 26.3149 14.5559C25.6337 12.9113 24.4802 11.5057 23.0001 10.5168Z"
                    class="fill-surface-900 dark:fill-surface-0"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 3.465e-06C9.44771 3.70421e-06 9.00574 0.449075 8.9445 0.997954C8.85086 1.83725 8.63936 2.66087 8.31492 3.44415C7.86262 4.53608 7.19969 5.52824 6.36396 6.36397C5.52824 7.1997 4.53609 7.86263 3.44415 8.31492C2.66087 8.63937 1.83724 8.85086 0.997951 8.9445C0.449072 9.00574 3.73829e-07 9.44772 3.496
