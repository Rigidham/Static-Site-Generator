import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="flex flex-col lg:flex-row items-start gap-20 bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950 overflow-hidden">
      <div class="w-full lg:flex-1">
        <h2 class="text-surface-900 font-semibold text-5xl leading-tight mb-4 dark:text-surface-0">Data Analysis and Processing</h2>
        <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 mb-7">
          Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur. Auctor elit sed vulputate mi sit amet mauris commodo quis. Pulvinar neque laoreet suspendisse interdum.
        </p>
        <button pButton outlined>
          <span pButtonLabel>Get Started</span>
          <i pButtonIcon="pi pi-arrow-right" class="ml-2"></i>
        </button>
      </div>
      <div class="w-full lg:flex-1 flex flex-col gap-6">
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M22.4167 6.78839L22.4167 11.5402L20.4359 12.6842M22.4167 6.78839L12.2083 12.6842M22.4167 6.78839L18.3879 4.46157L16.3364 5.64437M12.2083 24.4758L22.4167 18.58L22.4167 14.0042M12.2083 24.4758L2 18.58V6.78839M12.2083 24.4758L12.2083 19.9M2 6.78839L12.2083 0.892578L16.3364 3.27672M2 6.78839L6.12803 9.17253M8.17071 10.3523V15.0161M8.17071 10.3523L16.3364 5.64437M8.17071 10.3523L12.2083 12.6842M16.3364 3.27672L6.12803 9.17253M16.3364 3.27672V5.64437M6.12803 9.17253V16.1959M22.4167 14.0042L12.2083 19.9M22.4167 14.0042L20.4359 12.6842M12.2083 19.9L6.12803 16.1959M12.2083 17.4361L8.17071 15.0161M12.2083 17.4361L12.2083 12.6842M12.2083 17.4361L20.4359 12.6842M6.12803 16.1959L8.17071 15.0161"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Data Collection</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M15.4367 3.54385L12.0923 1.68583L8.67358 3.61817M15.4367 3.54385L12.018 5.47618M15.4367 3.54385L15.4367 7.64117L13.876 8.52332M12.018 5.47618L8.67358 3.61817M12.018 5.47618L12.018 13.5771M8.67358 3.61817L8.67358 9.54729L10.3086 10.4557M12.018 13.5771L13.876 14.6093M12.018 13.5771L10.3086 14.5433M10.3086 10.4557L6.96421 8.59764L3.54546 10.53M10.3086 10.4557L6.88989 12.388M10.3086 10.4557L10.3086 14.5433M6.88989 12.388L3.54546 10.53M6.88989 12.388L6.96421 18.3336M3.54546 10.53L3.54546 16.4013L6.96421 18.3336M15.4368 15.4723L11.9437 17.3675M15.4368 15.4723L13.876 14.6093M15.4368 15.4723L13.876 16.3191L11.9437 17.3675M15.4368 15.4723L15.4367 19.4484M15.4368 15.4723L15.4367 17.256M11.9437 17.3675L8.59926 15.5095M11.9437 17.3675L11.9437 21.4923M8.59926 15.5095L10.3086 14.5433M8.59926 15.5095L8.59926 17.3675M20.6392 8.449L17.2948 6.59099L13.876 8.52332M20.6392 8.449L17.2204 10.3813M20.6392 8.449L20.6392 16.4013L17.2204 18.3336M17.2204 10.3813L13.876 8.52332M17.2204 10.3813L17.2204 18.3336M13.876 8.52332L13.876 14.6093M17.2204 18.3336L15.4367 17.256M15.4367 17.256L15.4367 19.4484M15.4367 19.4484L11.9437 21.4923M11.9437 21.4923L8.59926 19.4484L8.59926 17.3675M6.96421 18.3336L8.59926 17.3675"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Data Transformation</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M12.8335 22.1037L21.5835 17.0519V14.3456M12.8335 22.1037L4.0835 17.0519V14.3456M12.8335 22.1037V19.4876M12.8335 12.0001V9.47421M12.8335 12.0001L17.1196 9.52554M12.8335 12.0001L8.54741 9.52554M12.8335 9.47421L17.1196 6.9483M12.8335 9.47421L8.54741 6.9483M12.8335 6.9483V4.42239M12.8335 6.9483L14.9083 5.62029M12.8335 6.9483L10.7587 5.62029M12.8335 4.42239L14.9083 3.09438M12.8335 4.42239L10.7587 3.09438M14.9083 3.09438L12.8335 1.89648L10.7587 3.09438M14.9083 3.09438V5.62029M10.7587 3.09438V5.62029M12.8335 14.526V16.8715M12.8335 14.526L19.3286 10.6421M12.8335 14.526L6.33837 10.6421M12.8335 16.8715L19.3286 12.9876M12.8335 16.8715L6.33837 12.9876M12.8335 19.4876L21.5835 14.3456M12.8335 19.4876L4.0835 14.3456M21.5835 14.3456L19.3286 12.9876M4.0835 14.3456L6.33837 12.9876M14.9083 5.62029L17.1196 6.9483M17.1196 6.9483V9.52554M10.7587 5.62029L8.54741 6.9483M8.54741 6.9483V9.52554M17.1196 9.52554L19.3286 10.6421M8.54741 9.52554L6.33837 10.6421M19.3286 10.6421V12.9876M6.33837 10.6421V12.9876"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Statistical Analysis</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
