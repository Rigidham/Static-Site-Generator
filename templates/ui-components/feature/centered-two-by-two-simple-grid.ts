import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 px-6 py-20 md:px-12 lg:px-20 dark:bg-surface-950 overflow-hidden">
      <h2 class="text-surface-900 font-semibold text-center text-5xl leading-tight mb-4 dark:text-surface-0">Security and Cryptography</h2>
      <p class="text-lg leading-normal text-surface-600 dark:text-surface-400 text-center max-w-[96%] lg:max-w-[840px] mx-auto mb-14">
        Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies. Ut faucibus pulvinar elementum integer enim.
      </p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M21.25 7.44772L12.5 2.39453L3.75002 7.44772M21.25 7.44772L12.5 12.5009M21.25 7.44772L21.25 9.30942L17.7037 11.3574M12.5 22.6073L21.25 17.5541L21.25 13.4888M12.5 22.6073L3.75002 17.5541V13.4888M12.5 22.6073V18.5419M3.75002 7.44772L12.5 12.5009M3.75002 7.44772L3.75 9.30942L7.29625 11.3574M12.5 12.5009L12.5 14.3626M12.5 14.3626L15.965 12.4045M12.5 14.3626L9.05253 12.4045M12.5 18.5419L21.25 13.4888M12.5 18.5419L3.75002 13.4888M21.25 13.4888L17.7037 11.3574M3.75002 13.4888L7.29625 11.3574M7.29625 11.3574L9.05253 12.4045M17.7037 11.3574L15.965 12.4045M15.965 12.4045L17.7037 13.4888L12.5 16.4903L7.29625 13.4888L9.05253 12.4045"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Authentication and Authorization</h5>
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
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Secure Communication Protocols</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M18.1352 10.4113L21.5835 8.42829M18.1352 10.4113V14.5402M18.1352 10.4113L11.176 6.45631M7.62582 4.43872L11.176 2.26758L21.5835 8.42829M7.62582 4.43872L4.0835 6.56283M7.62582 4.43872L11.176 6.45631M11.176 14.4793V10.4113M11.176 14.4793L14.6556 12.4758M11.176 14.4793L7.62582 16.6269M21.5835 8.42829V12.5276M11.176 22.7327L21.5835 16.6269V12.5276M11.176 22.7327V18.6021M11.176 22.7327L7.62582 20.7732M11.176 18.6021L18.1352 14.5402M11.176 18.6021L7.62582 16.6269M21.5835 12.5276L18.1352 14.5402M18.1352 14.5402L14.6556 12.4758M11.176 10.4113L14.6556 12.4758M11.176 10.4113V6.45631M7.62582 20.7732L4.0835 18.6021V6.56283M7.62582 20.7732V16.6269M4.0835 6.56283L7.62582 8.60073M7.62582 16.6269V8.60073M11.176 6.45631L7.62582 8.60073"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Firewalls and Intrusion Detection Systems (IDS)</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
        <div
          class="group p-6 pr-8 bg-surface-50 hover:bg-surface-100 dark:bg-surface-800 dark:hover:bg-surface-700 transition-colors rounded-xl border border-surface-100 dark:border-surface-700 flex items-center gap-6 cursor-pointer"
        >
          <span class="w-12 h-12 bg-surface-900 dark:bg-surface-0 flex items-center justify-center rounded-md">
            <svg class="w-8 h-7" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                class="stroke-surface-0 dark:stroke-surface-900"
                d="M21.25 6.94682L17.7797 8.95057M21.25 6.94682L17.7797 4.94306L16.1084 5.87806M21.25 6.94682V11.1254L19.7368 11.9991M12.5 22.1037L8.89156 20.0202V18.0716M12.5 22.1037L16.1084 20.0202V18.0716M12.5 22.1037V17.8871M3.75 6.94682L7.22029 8.95058M3.75 6.94682L7.22029 4.94306L8.89156 5.87806M3.75 6.94682V11.1254L5.26316 11.9991M12.5 11.9991L8.89156 9.91558M12.5 11.9991L16.1084 9.91558M12.5 11.9991V16.1777M7.22029 19.0551L3.75 17.0514V12.8728M7.22029 19.0551V14.8615M7.22029 19.0551L8.89156 18.0716M7.22029 8.95058L10.8019 6.94682M7.22029 8.95058V13.1292M8.89156 9.91558L10.8019 8.84682M8.89156 9.91558V12.227M16.1084 9.91558L14.1981 8.84682M16.1084 9.91558V12.227M17.7797 19.0551L21.25 17.0514C21.25 17.0514 21.25 14.5046 21.25 12.8728M17.7797 19.0551V14.8615M17.7797 19.0551L16.1084 18.0716M17.7797 8.95057L14.1981 6.94682M17.7797 8.95057V13.1292M16.1084 3.97806L12.5 1.89453L8.89156 3.97806M16.1084 3.97806V5.87806M16.1084 3.97806L12.5 5.99682M8.89156 3.97806V5.87806M8.89156 3.97806L12.5 5.99682M12.5 17.8871L16.1084 15.8192M12.5 17.8871L8.89156 15.8192M21.25 12.8728C19.8948 13.6494 17.7797 14.8615 17.7797 14.8615M21.25 12.8728C20.6591 12.5316 19.7368 11.9991 19.7368 11.9991M12.5 16.1777L14.5163 15.0134M12.5 16.1777L10.4837 15.0134M3.75 12.8728L7.22029 14.8615M3.75 12.8728L5.26316 11.9991M7.22029 14.8615L8.89156 14.0942M8.89156 14.0942L10.4837 15.0134M8.89156 14.0942V12.227M17.7797 14.8615L16.1084 14.0942M16.1084 14.0942L14.5163 15.0134M16.1084 14.0942V12.227M16.1084 15.8192L14.5163 15.0134M16.1084 15.8192V18.0716M8.89156 15.8192L10.4837 15.0134M8.89156 15.8192V18.0716M10.8019 6.94682V8.84682M10.8019 6.94682L8.89156 5.87806M10.8019 8.84682L12.5 7.89682M14.1981 6.94682V8.84682M14.1981 6.94682L16.1084 5.87806M14.1981 8.84682L12.5 7.89682M17.7797 13.1292L16.1084 12.227M17.7797 13.1292L19.7368 11.9991M7.22029 13.1292L8.89156 12.227M7.22029 13.1292L5.26316 11.9991M12.5 7.89682V5.99682"
                stroke-width="0.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h5 class="text-surface-900 dark:text-surface-0 text-lg font-semibold flex-1 leading-tight">Data Privacy Compliance</h5>
          <span class="group-hover:translate-x-3 transition-transform"><i class="pi pi-arrow-right text-lg! leading-normal! text-surface-900 dark:text-surface-0"></i></span>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
