import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="bg-white dark:bg-surface-900 px-6 py-6 lg:px-20 lg:py-20 flex flex-col justify-start items-start">
      <div class="w-full relative rounded-2xl overflow-hidden">
        <img
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/overlapping-image.jpg"
          alt="Background"
          class="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div class="absolute inset-0 bg-black/10 rounded-2xl"></div>

        <div class="relative h-full pt-[84px] pb-[126px] flex flex-col justify-start items-start gap-4">
          <div class="w-full px-6 lg:px-14 flex flex-col gap-4">
            <div class="text-center text-white text-5xl font-semibold leading-tight">Augue Lacus Viverra Vitae</div>
            <div class="text-center text-white/80 text-2xl leading-normal">
              Phasellus vestibulum lorem sed risus ultricies. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Aenean euismod elementum nisi quis eleifend quam.
            </div>
          </div>
        </div>
      </div>

      <div class="w-full px-0 lg:px-12 flex flex-col lg:flex-row gap-8 mt-6 lg:-mt-[4.2rem]">
        @for (card of cards; track card.title; let index = $index) {
          <div class="flex-1 bg-white dark:bg-surface-800 rounded-2xl border border-surface-200 dark:border-surface-700 flex flex-col gap-2">
            <div
              class="-mt-px p-5 bg-surface-100 lg:bg-white/20 dark:bg-surface-700 lg:dark:bg-surface-700/20 lg:backdrop-blur-[7px] border-t border-surface-200 lg:border-white/50 dark:border-surface-600 lg:dark:border-surface-600/50 rounded-t-2xl flex items-center gap-2"
            >
              <i [class]="card.icon" class="w-5 h-5 text-surface-900 lg:text-white dark:text-surface-0"></i>
              <div class="flex-1 text-surface-900 lg:text-white dark:text-surface-0 text-xl font-medium leading-tight">{{ card.title }}</div>
            </div>

            <div class="px-4 py-2">
              <div class="text-surface-600 dark:text-surface-200 text-base leading-normal">{{ card.description }}</div>
            </div>

            <div class="px-4 pt-2 pb-4">
              <button pButton pRipple icon="pi pi-arrow-right" [text]="true" class="p-2! gap-2!">
                <span pButtonLabel>Learn More</span>
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  cards = [
    {
      title: 'Lectus Arcu',
      description: 'Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sollicitudin ac orci phasellus egestas tellus rutrum.',
      icon: 'pi pi-sliders-v',
    },
    {
      title: 'Sollicitudin Ac',
      description: 'Faucibus ornare suspendisse sed nisi lacus. Urna nunc id cursus metus aliquam eleifend. Augue lacus viverra vitae.',
      icon: 'pi pi-moon',
    },
    {
      title: 'Nec Feugiat Nisl',
      description: 'Montes nascetur ridiculus mus mauris. Enim tortor at auctor urna nunc id cursus metus. Sed odio morbi quis commodo odio.',
      icon: 'pi pi-sun',
    },
  ];
}
