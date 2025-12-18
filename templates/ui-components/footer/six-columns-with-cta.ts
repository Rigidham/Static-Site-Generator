import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-6 py-20 md:px-12 lg:px-20 flex flex-col gap-8">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="flex-1 flex flex-col gap-8">
          <div class="flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M22.3773 17.7771C22.1066 18.9176 21.5351 19.9422 20.751 20.763L27.103 27.0935L29.4142 24.7901L22.3773 17.7771Z" class="fill-primary-500 dark:fill-primary-400" />
              <path d="M20.687 20.8291C19.8935 21.6369 18.8906 22.2396 17.766 22.5503L20.0774 31.147L23.2345 30.3039L20.687 20.8291Z" class="fill-primary-500 dark:fill-primary-400" />
              <path
                d="M20.1424 0.843083L16.9853 0L14.3248 9.8956L11.9228 0.961786L8.76555 1.80487L11.3608 11.4572L4.8967 5.01516L2.58549 7.3185L9.67576 14.3847L0.845959 12.0268L0 15.1732L9.64767 17.7495C9.53721 17.2747 9.47877 16.78 9.47877 16.2717C9.47877 12.6736 12.4055 9.7568 16.0159 9.7568C19.6262 9.7568 22.5529 12.6736 22.5529 16.2717C22.5529 16.7767 22.4952 17.2684 22.3861 17.7404L31.1541 20.0817L32 16.9353L22.314 14.3488L31.1444 11.9907L30.2984 8.84433L20.6128 11.4307L27.0768 4.98871L24.7656 2.68537L17.7737 9.65353L20.1424 0.843083Z"
                class="fill-primary-500 dark:fill-primary-400"
              />
              <path d="M17.6456 22.582C17.1238 22.7156 16.5769 22.7867 16.0133 22.7867C15.4095 22.7867 14.8248 22.7051 14.2697 22.5524L11.9562 31.157L15.1134 32L17.6456 22.582Z" class="fill-primary-500 dark:fill-primary-400" />
              <path d="M14.1608 22.5202C13.0533 22.1942 12.0683 21.5837 11.2909 20.7736L4.92331 27.1196L7.23451 29.4229L14.1608 22.5202Z" class="fill-primary-500 dark:fill-primary-400" />
              <path d="M11.2358 20.7177C10.4717 19.9025 9.9152 18.8916 9.6503 17.7687L0.85373 20.1178L1.69968 23.2641L11.2358 20.7177Z" class="fill-primary-500 dark:fill-primary-400" />
            </svg>
            <span class="text-surface-900 dark:text-surface-0 text-lg font-semibold leading-tight">AlphaHex</span>
          </div>
          <p class="text-surface-600 dark:text-surface-400 text-lg leading-normal max-w-[988px]">
            Consequat nisl vel pretium lectus quam. Scelerisque eu ultrices vitae <br />auctor eu augue ut lectus arcu. Integer quis auctor elit sed.
          </p>
        </div>
        <button pButton class="px-3! py-2! font-medium! bg-primary! border-primary! rounded-md!">
          <span pButtonLabel>Get Started</span>
        </button>
      </div>
      <div class="h-px bg-surface-300 dark:bg-surface-700"></div>
      <div class="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Company</div>
          <div class="flex flex-col gap-4">
            @for (item of companyLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Resources</div>
          <div class="flex flex-col gap-4">
            @for (item of resourceLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Developer</div>
          <div class="flex flex-col gap-4">
            @for (item of developerLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Community</div>
          <div class="flex flex-col gap-4">
            @for (item of communityLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Connect</div>
          <div class="flex flex-col gap-4">
            @for (item of connectLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
        <div class="flex flex-col gap-6">
          <div class="text-surface-900 dark:text-surface-0 font-bold leading-tight">Legal</div>
          <div class="flex flex-col gap-4">
            @for (item of legalLinks; track item) {
              <a class="text-surface-700 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-0 leading-tight transition-colors cursor-pointer">
                {{ item }}
              </a>
            }
          </div>
        </div>
      </div>
      <div class="h-px bg-surface-300 dark:bg-surface-700"></div>
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span class="text-surface-500 dark:text-surface-400 leading-tight">&copy; 202X AlphaHex Technologies</span>
        <div class="flex items-center gap-4">
          @for (icon of socialIcons; track icon) {
            <a class="cursor-pointer">
              <i [ngClass]="['pi', 'pi-' + icon, 'text-lg', 'text-surface-500', 'hover:text-surface-900', 'dark:text-surface-400', 'dark:hover:text-surface-0', 'transition-colors']"></i>
            </a>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  companyLinks = ['About Us', 'News', 'Investor Relations', 'Careers', 'Media Kit'];
  resourceLinks = ['Get Started', 'Learn', 'Case Studies'];
  developerLinks = ['Courses', 'Documentation', 'API Reference', 'Status', 'Papers', 'Development Blog'];
  communityLinks = ['Discord', 'Events', 'FAQ', 'Blog'];
  connectLinks = ['Newsletters', 'Press', 'Code of Conduct', 'Security Guide', 'Bug Bounty Program'];
  legalLinks = ['Brand Policy', 'Privacy Policy', 'Terms of Service'];
  socialIcons = ['twitter', 'github', 'slack'];
}
