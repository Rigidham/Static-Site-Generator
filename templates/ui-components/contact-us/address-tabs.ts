import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Office {
  country: string;
  address: string;
  mapUrl: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white dark:bg-surface-900 px-20 py-20 flex flex-col justify-start items-start gap-12 w-full">
      <div class="w-full flex flex-col justify-start items-start gap-4">
        <div class="px-3 py-1 bg-surface-50 dark:bg-surface-800 rounded-full border border-surface-200 dark:border-surface-700 inline-flex justify-start items-start">
          <div class="text-surface-900 dark:text-surface-0 font-medium leading-tight">Contact Us</div>
        </div>
        <div class="w-full flex flex-col justify-start items-start gap-4">
          <div class="w-full text-surface-900 dark:text-surface-0 text-4xl font-bold leading-tight">Our Offices</div>
          <div class="max-w-2xl text-surface-600 dark:text-surface-400 leading-normal">
            Ornare massa eget egestas purus viverra accumsan in. Sed elementum tempus egestas sed. Venenatis urna cursus eget nunc scelerisque viverra.
          </div>
        </div>
      </div>
      <div class="w-full flex justify-start items-stretch">
        <div class="w-full flex md:flex-row flex-col justify-start items-stretch">
          @for (office of offices; track office.country; let index = $index) {
            <div
              class="flex-1 p-4 cursor-pointer w-full flex flex-col justify-center"
              [ngClass]="[
                activeTab === index
                  ? 'bg-linear-to-r from-primary-50/50 to-primary-50/0 dark:from-primary-400/10 dark:to-primary-400/0 md:border-l-2 md:border-l-primary border-b-2 border-b-primary md:border-b-0'
                  : 'md:border-l-2 md:border-l-surface-200 dark:md:border-l-surface-700 border-b-2 border-b-surface-200 dark:border-b-surface-700 md:border-b-0'
              ]"
              (click)="activeTab = index"
            >
              <div class="w-full text-surface-900 dark:text-surface-0 text-2xl font-semibold leading-tight">{{ office.country }}</div>
              <div class="w-full text-lg leading-normal" [ngClass]="[activeTab === index ? 'text-primary-700 dark:text-primary-400' : 'text-surface-600 dark:text-surface-400']">{{ office.address }}</div>
            </div>
          }
        </div>
      </div>
      <img alt="Map" [src]="offices[activeTab].mapUrl" class="w-full h-[431px] object-cover rounded-3xl border border-surface-200 dark:border-surface-700 shadow-inner" />
    </div>
  `,
})
export class __CLASS_NAME__ {
  activeTab = 0;

  offices: Office[] = [
    {
      country: 'United States',
      address: '90768 Valda Parkways, New Emmy, SD 35639-4838',
      mapUrl: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-1.jpg',
    },
    {
      country: 'Germany',
      address: 'Apt. 160 Karlstr. 80c, Ost Sanja, SN 96492',
      mapUrl: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-1.jpg',
    },
    {
      country: 'Australia',
      address: '419 Kenton Locks, Raulchester, CO 12492',
      mapUrl: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-1.jpg',
    },
    {
      country: 'Italy',
      address: 'Borgo Davide 272, Appartamento 89, Quarto Quarto, SI 23337',
      mapUrl: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-1.jpg',
    },
  ];
}
