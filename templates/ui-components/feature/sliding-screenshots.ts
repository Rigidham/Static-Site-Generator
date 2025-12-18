import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  template: `
    <div class="bg-white dark:bg-surface-900 px-6 py-12 md:px-12 lg:px-20 lg:py-20 flex flex-col justify-center items-start gap-8">
      <div class="flex flex-col justify-start items-start gap-2 w-full">
        <div class="text-center text-surface-900 dark:text-surface-0 text-4xl font-semibold leading-tight w-full">Move Work Forward</div>
        <div class="text-center text-surface-600 dark:text-surface-200 text-xl leading-normal w-full">
          Orci dapibus ultrices in iaculis. Quam adipiscing vitae proin sagittis nisl.<br class="hidden md:block" />
          Amet massa vitae tortor condimentum lacinia quis vel eros donec.
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-4 md:gap-8">
        @for (item of items; track item.title; let index = $index) {
          <div class="flex-1 p-4 rounded-md flex flex-col justify-start items-start gap-4">
            <div
              [ngClass]="[
                'p-4 rounded-md flex justify-start items-start cursor-pointer transition-colors',
                carouselPage() === index ? 'bg-primary' : 'bg-surface-100 hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700'
              ]"
              (click)="carouselPage.set(index)"
            >
              <div class="w-6 h-6 relative">
                <i
                  [ngClass]="[
                    item.icon,
                    'absolute inset-0 flex! items-center justify-center text-xl! leading-normal!',
                    carouselPage() === index ? 'text-white' : 'text-surface-400 dark:text-surface-500'
                  ]"
                ></i>
              </div>
            </div>

            <div class="flex flex-col justify-start items-start gap-2 w-full">
              <div [ngClass]="['text-base font-medium leading-tight w-full', carouselPage() === index ? 'text-primary' : 'text-surface-400 dark:text-surface-500']">
                {{ item.category }}
              </div>
              <div class="text-surface-900 dark:text-surface-0 text-xl font-medium leading-tight w-full">{{ item.title }}</div>
              <div class="text-surface-400 dark:text-surface-500 text-base leading-normal w-full">{{ item.description }}</div>
            </div>
          </div>
        }
      </div>

      <div class="w-full h-[320px] md:h-[420px] bg-surface-50 dark:bg-surface-800 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.05)] rounded-xl flex justify-center items-center overflow-hidden">
        <p-carousel
          [value]="screenshots"
          [numVisible]="1"
          [numScroll]="1"
          [page]="carouselPage()"
          [circular]="false"
          [showNavigators]="false"
          [showIndicators]="false"
          class="w-full md:w-[560px]"
          (onPage)="carouselPage.set($event.page ?? 0)"
        >
          <ng-template #item let-screenshot>
            <div class="flex justify-center items-center p-4 md:p-0">
              <img
                [src]="screenshot.image"
                [alt]="screenshot.description"
                class="w-auto h-[250px] md:w-[560px] md:h-[350px] rounded-xl shadow-xl object-cover dark:hidden block"
              />
              <img
                [src]="screenshot.imageDark"
                [alt]="screenshot.description"
                class="w-auto h-[250px] md:w-[560px] md:h-[350px] rounded-xl shadow-xl object-cover dark:block hidden"
              />
            </div>
          </ng-template>
        </p-carousel>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  carouselPage = signal(0);

  items = [
    {
      category: 'Dynamic Mapping',
      title: 'Collect and organize mappings',
      description: 'Diam sollicitudin tempor id eu. Ut consequat semper viverra nam libero justo laoreet sit. Mi sit amet mauris commodo quis imperdiet massa. Euismod quis viverra.',
      icon: 'pi pi-table',
    },
    {
      category: 'Seamless Sync',
      title: 'Never touch plaintext data',
      description: 'Massa id neque aliquam vestibulum. Tristique senectus et netus et malesuada fames ac. A scelerisque purus semper eget duis at tellus at. Orci phasellus egestas tellus rutrum.',
      icon: 'pi pi-refresh',
    },
    {
      category: 'Maximum Security',
      title: 'Process encrypted data',
      description: 'Pellentesque eu tincidunt tortor aliquam nulla. Nulla facilisi cras fermentum odio eu. Ultrices in iaculis nunc sed augue. Nullam vehicula ipsum a arcu cursus.',
      icon: 'pi pi-shield',
    },
  ];

  screenshots = [
    {
      name: 'Screenshot 1',
      description: 'Dynamic Mapping Screenshot',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-1.jpg',
      imageDark: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-1-dark.jpg',
    },
    {
      name: 'Screenshot 2',
      description: 'Seamless Sync Screenshot',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-2.jpg',
      imageDark: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-2-dark.jpg',
    },
    {
      name: 'Screenshot 3',
      description: 'Maximum Security Screenshot',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-3.jpg',
      imageDark: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/slide-3-dark.jpg',
    },
  ];
}
