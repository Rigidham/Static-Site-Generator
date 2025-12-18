import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-900 p-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="flex flex-col gap-12">
          <div class="text-surface-0 text-4xl font-bold leading-tight">Scale your growth with ease</div>
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <div class="text-surface-0 text-2xl font-medium leading-tight">Guiding your expansion</div>
              <div class="text-surface-400 text-xl font-normal leading-normal">
                Porta lorem mollis aliquam ut porttitor leo a diam. Amet purus gravida quis blandit. Consectetur libero id faucibus nisl tincidunt. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi.
              </div>
            </div>
            <div class="inline-flex w-fit items-center gap-8 px-3 py-2 bg-surface-800 border border-surface-700 rounded-xl">
              <div class="text-surface-0 text-sm font-medium leading-normal">TRUSTED BY</div>
              <div class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M10.9996 14.4999C12.9326 14.4999 14.4996 12.9329 14.4996 10.9999C14.4996 9.06686 12.9326 7.4999 10.9996 7.4999C9.06657 7.4999 7.49961 9.06686 7.49961 10.9999C7.49961 12.9329 9.06657 14.4999 10.9996 14.4999Z"
                    class="fill-surface-500"
                  />
                  <path
                    d="M11 0.5C9.62114 0.5 8.25572 0.77162 6.9818 1.29926C5.70788 1.82696 4.55042 2.60036 3.57536 3.57536C2.60036 4.55042 1.82696 5.70788 1.29926 6.9818C0.77162 8.25572 0.5 9.62114 0.5 11C0.5 12.3789 0.77162 13.7443 1.29926 15.0182C1.82696 16.2921 2.60036 17.4496 3.57536 18.4246C4.55042 19.3996 5.70788 20.173 6.9818 20.7007C8.25572 21.2284 9.62114 21.5 11 21.5V16.25C10.3105 16.25 9.62786 16.1142 8.9909 15.8503C8.35394 15.5865 7.77518 15.1998 7.28768 14.7123C6.80018 14.2248 6.41348 13.6461 6.14966 13.0091C5.88578 12.3721 5.75 11.6895 5.75 11C5.75 10.3105 5.88578 9.62786 6.14966 8.9909C6.41348 8.35394 6.80018 7.77518 7.28768 7.28768C7.77518 6.80018 8.35394 6.41348 8.9909 6.14966C9.62786 5.88578 10.3105 5.75 11 5.75V0.5Z"
                    class="fill-surface-500"
                  />
                  <path
                    d="M0.5 11C0.5 12.3789 0.77162 13.7443 1.29926 15.0182C1.82696 16.2921 2.60036 17.4496 3.57536 18.4246C4.55042 19.3996 5.70788 20.173 6.9818 20.7007C8.25572 21.2284 9.62114 21.5 11 21.5C12.3789 21.5 13.7443 21.2284 15.0182 20.7007C16.2921 20.173 17.4496 19.3996 18.4246 18.4246C19.3996 17.4496 20.173 16.2921 20.7007 15.0182C21.2284 13.7443 21.5 12.3789 21.5 11H16.25C16.25 11.6895 16.1142 12.3721 15.8503 13.0091C15.5865 13.6461 15.1998 14.2248 14.7123 14.7123C14.2248 15.1998 13.6461 15.5865 13.0091 15.8503C12.3721 16.1142 11.6895 16.25 11 16.25C10.3105 16.25 9.62786 16.1142 8.9909 15.8503C8.35394 15.5865 7.77518 15.1998 7.28768 14.7123C6.80018 14.2248 6.41348 13.6461 6.14966 13.0091C5.88578 12.3721 5.75 11.6895 5.75 11H0.5Z"
                    class="fill-surface-500"
                  />
                  <path
                    d="M14.4996 10.9999C14.4996 10.0716 14.1309 9.18146 13.4745 8.52506C12.8181 7.86866 11.9278 7.4999 10.9996 7.4999C10.0713 7.4999 9.18117 7.86866 8.52477 8.52506C7.86837 9.18146 7.49961 10.0716 7.49961 10.9999H14.4996Z"
                    class="fill-surface-500"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M15.1851 12.1662C15.0075 12.9147 14.6324 13.587 14.1179 14.1257L18.2864 18.2801L19.8031 16.7685L15.1851 12.1662Z" class="fill-surface-500" />
                  <path d="M14.0759 14.1691C13.5551 14.6992 12.897 15.0948 12.1589 15.2986L13.6758 20.9402L15.7476 20.387L14.0759 14.1691Z" class="fill-surface-500" />
                  <path
                    d="M13.7185 1.05327L11.6466 0.5L9.90062 6.99399L8.32431 1.13117L6.25239 1.68445L7.9555 8.01878L3.71346 3.7912L2.19673 5.30276L6.84972 9.93996L1.05516 8.39258L0.5 10.4574L6.83128 12.1481C6.7588 11.8365 6.72045 11.5119 6.72045 11.1783C6.72045 8.81704 8.64112 6.9029 11.0104 6.9029C13.3797 6.9029 15.3004 8.81704 15.3004 11.1783C15.3004 11.5097 15.2625 11.8324 15.1909 12.1421L20.9449 13.6786L21.5 11.6138L15.1435 9.91639L20.9385 8.36891L20.3833 6.30409L14.0271 8.00141L18.2691 3.77384L16.7524 2.26227L12.164 6.83513L13.7185 1.05327Z"
                    class="fill-surface-500"
                  />
                  <path d="M12.0799 15.3194C11.7375 15.4071 11.3786 15.4538 11.0087 15.4538C10.6125 15.4538 10.2288 15.4002 9.86448 15.3L8.34628 20.9468L10.4181 21.5L12.0799 15.3194Z" class="fill-surface-500" />
                  <path d="M9.79299 15.2789C9.06624 15.0649 8.41981 14.6643 7.90967 14.1327L3.73092 18.2972L5.24765 19.8088L9.79299 15.2789Z" class="fill-surface-500" />
                  <path d="M7.87347 14.096C7.37207 13.561 7.00685 12.8976 6.83301 12.1607L1.06026 13.7023L1.61542 15.7671L7.87347 14.096Z" class="fill-surface-500" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20102 16.799 0.5 11 0.5C5.201 0.5 0.5 5.20102 0.5 11C0.5 16.799 5.201 21.5 11 21.5ZM14.2757 5.39134C14.4351 4.82498 13.8855 4.49007 13.3835 4.84768L6.37639 9.83953C5.83202 10.2273 5.91765 11 6.50502 11H8.35018V10.9857H11.9463L9.01615 12.0196L7.72438 16.6087C7.56494 17.175 8.11451 17.5099 8.61652 17.1523L15.6236 12.1605C16.168 11.7727 16.0823 11 15.495 11H12.6969L14.2757 5.39134Z"
                    class="fill-surface-500"
                  />
                </svg>
              </div>
            </div>
          </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 bg-surface-800 shadow-sm rounded-2xl border border-surface-700 flex flex-col justify-center gap-2">
            <div class="text-surface-0 text-3xl font-semibold leading-tight">600+</div>
            <div class="text-surface-400 text-lg font-normal leading-normal">Happy Clients</div>
          </div>
          <div class="p-8 bg-surface-800 shadow-sm rounded-2xl border border-surface-700 flex flex-col justify-center gap-2">
            <div class="text-surface-0 text-3xl font-semibold leading-tight">1500+</div>
            <div class="text-surface-400 text-lg font-normal leading-normal">Projects</div>
          </div>
          <div class="p-8 bg-surface-800 shadow-sm rounded-2xl border border-surface-700 flex flex-col justify-center gap-2">
            <div class="text-surface-0 text-3xl font-semibold leading-tight">73</div>
            <div class="text-surface-400 text-lg font-normal leading-normal">Awards</div>
          </div>
          <div class="p-8 bg-primary-400/10 rounded-2xl border border-primary-400/20 flex flex-col justify-center gap-2">
            <div class="text-surface-0 text-2xl font-semibold leading-tight">Take Lead</div>
            <div class="text-primary text-lg font-normal leading-normal">Start Now</div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
