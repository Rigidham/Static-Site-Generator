import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 px-8 py-20 flex flex-col justify-center items-start gap-8">
      <div class="flex flex-col justify-start items-center gap-4 w-full">
        <h2 class="text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight w-full text-center">These apps are ready to build</h2>
        <p class="text-surface-600 dark:text-surface-400 text-lg leading-normal w-full text-center">Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Nibh sit amet commodo nulla facilisi nullam vehicula.</p>
      </div>

      <div class="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 w-full">
        @for (tab of tabs; track tab.label; let index = $index) {
          <div
            class="px-4 py-2 border rounded-full flex items-center gap-2 cursor-pointer transition-colors"
            [ngClass]="[activeTab() === index ? 'bg-primary-50 dark:bg-primary/10 border-primary-200 dark:border-primary/20' : 'bg-surface-0 dark:bg-surface-800 border-surface-100 dark:border-surface-700']"
            (click)="activeTab.set(index)"
          >
            <i [ngClass]="[tab.icon, 'text-base! leading-none!', activeTab() === index ? 'text-primary-600 dark:text-primary-400' : 'text-surface-600 dark:text-surface-400']"></i>
            <span [ngClass]="['font-medium leading-tight', activeTab() === index ? 'text-primary-700 dark:text-primary-400' : 'text-surface-900 dark:text-surface-0']">{{ tab.label }}</span>
          </div>
        }
      </div>

      <div class="w-full p-8 rounded-xl border border-surface-200 dark:border-surface-700 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div class="flex-1 flex flex-col justify-start items-start gap-6 w-full">
          <div class="flex flex-col justify-start items-start gap-4 w-full">
            <h3 class="text-surface-900 dark:text-surface-0 text-2xl font-medium leading-tight w-full">{{ tabs[activeTab()].title }}</h3>
            <p class="text-surface-600 dark:text-surface-400 text-lg leading-normal w-full">{{ tabs[activeTab()].description }}</p>
          </div>
          <button pButton outlined class="self-start border-surface-800 dark:border-surface-200 text-surface-900 dark:text-surface-0 px-3 py-2 text-base font-medium rounded-md">
            <span pButtonLabel>Learn More</span>
          </button>
        </div>

        <div class="min-h-100 flex-1 bg-surface-50 dark:bg-surface-800 shadow-inner rounded-xl flex justify-center items-start w-full lg:w-auto relative overflow-hidden p-8">
          <div class="relative w-full rounded-3xl">
            @for (tab of tabs; track tab.label; let i = $index) {
              @if (activeTab() === i) {
                <div class="absolute inset-0 rounded-3xl">
                  <img
                    [src]="tab.image"
                    [alt]="tab.title"
                    class="object-cover w-[24.64rem] h-auto flex mx-auto rounded-3xl border border-surface-400"
                    [ngClass]="[i === 0 ? '-mb-40' : '', i === 1 ? '-mb-[15.4rem]' : '', i === 2 ? '-mb-72' : '', i === 3 ? '-mb-88' : '']"
                  />
                </div>
              }
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  activeTab = signal(0);

  tabs = [
    {
      label: 'Ornare Arcu',
      icon: 'pi pi-credit-card',
      title: 'Vitae semper quis lectus nulla',
      description:
        'Pretium aenean pharetra magna ac placerat vestibulum. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Fringilla urna porttitor rhoncus dolor purus non enim. Vulputate odio ut enim blandit volutpat.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/chip-1.jpg',
    },
    {
      label: 'Diam Maecenas',
      icon: 'pi pi-send',
      title: 'Enhanced Communication Tools',
      description:
        'Stay connected with your team and clients through our advanced messaging system. Real-time updates and seamless integration with your existing workflow.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/chip-2.jpg',
    },
    {
      label: 'Ultrices Neque',
      icon: 'pi pi-link',
      title: 'Powerful Integration Options',
      description:
        'Connect your favorite tools and services with our extensive API. Create automated workflows and reduce manual tasks to boost productivity.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/chip-3.jpg',
    },
    {
      label: 'Facilisi Etiam',
      icon: 'pi pi-moon',
      title: 'Customizable Experience',
      description:
        'Tailor the platform to your needs with our flexible customization options. Create a workspace that perfectly matches your teams requirements.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/chip-4.jpg',
    },
  ];
}
