import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 px-6 pt-24 pb-12 lg:pt-[121px] lg:pb-20 lg:px-20">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-10">
        @for (testimonial of testimonials; track testimonial.name; let index = $index) {
          <div class="flex flex-1 relative pt-12 lg:pt-0">
            <div class="bg-surface-0 dark:bg-surface-900 rounded-xl shadow-sm w-full">
              <img
                [src]="testimonial.image"
                class="absolute w-[98px] h-[98px] rounded-full border-4 border-surface-0 dark:border-surface-900 shadow-sm left-1/2 -translate-x-1/2 -translate-y-1/2"
                [alt]="testimonial.name"
              />
              <div class="flex flex-col gap-8 p-8 pt-[70px]">
                <p class="text-lg text-surface-700 dark:text-surface-0/70 leading-normal">{{ testimonial.comment }}</p>

                <div class="flex flex-col items-center gap-2">
                  <h3 class="text-base font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                  <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  testimonials = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-1.png',
      comment: 'Fantastic framework that gives you a lot of options and tools for your solution or prototype.',
      name: 'Benjamin Andersen',
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
      comment: 'When I found your components it was like the Sun came out after a year of pouring rain. Thanks and congratulations.',
      name: 'Annie Lanphear',
      title: 'Company Title',
    },
  ];
}
