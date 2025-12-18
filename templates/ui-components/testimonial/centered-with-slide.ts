import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-8 lg:p-20">
      <p-carousel [value]="testimonials" [numVisible]="1" [numScroll]="1" [showNavigators]="false" class="flex! flex-col! items-center! gap-8! max-w-7xl! mx-auto! w-full!" contentClass="gap-6! w-full!">
        <ng-template #item let-testimonial>
          <div class="flex flex-col items-center gap-8">
            <div class="w-full md:max-w-144 rounded-xl border border-surface-200 dark:border-surface-700 p-8">
              <p class="text-xl text-surface-900 dark:text-surface-0 leading-normal">
                {{ testimonial.comment }}
              </p>
            </div>

            <div class="flex flex-col items-center gap-4">
              <img [src]="testimonial.image" class="w-16 h-16 rounded-full object-cover" [alt]="testimonial.name" />
              <div class="flex flex-col items-center gap-2">
                <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
              </div>
            </div>
          </div>
        </ng-template>
      </p-carousel>
    </div>
  `,
})
export class __CLASS_NAME__ {
  testimonials = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-1.png',
      comment: 'When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.',
      name: 'Paul Lanphear',
      title: 'Company Title',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-2.png',
      comment: 'Some awesome components are available in PrimeNG and personally prefer this than Google Material.',
      name: 'Emma Kumar',
      title: 'Company Title',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-3.png',
      comment: 'Fantastic framework that gives you a lot of options and tools for your solution or prototype.',
      name: 'Benjamin Andersen',
      title: 'Company Title',
    },
  ];
}
