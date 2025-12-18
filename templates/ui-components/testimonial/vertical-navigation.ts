import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 p-8 md:p-12 lg:p-20">
      <div class="flex flex-col gap-12 max-w-7xl mx-auto">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl leading-tight font-semibold text-surface-900 dark:text-surface-0">Comments of our customers</h1>
          <div class="text-lg leading-normal font-light text-surface-600 dark:text-surface-400">
            <p class="m-0">Sed tempus urna et pharetra pharetra massa massa ultricies.</p>
            <p class="m-0">Ut faucibus pulvinar elementum integer enim.</p>
          </div>
        </div>

        <div class="border border-surface-200 dark:border-surface-700 rounded-2xl flex flex-col lg:flex-row gap-12 p-8 max-w-6xl">
          <div class="w-full lg:w-auto flex lg:flex-col lg:mx-0 overflow-auto">
            <div class="w-full flex lg:flex-col">
              @for (testimonial of testimonials; track testimonial.id; let index = $index) {
                <div
                  class="flex items-center gap-4 p-6 cursor-pointer relative flex-1 lg:flex-auto rounded-t-xl lg:rounded-l-xl lg:flex-row flex-col items-center text-center lg:text-left lg:items-start hover:bg-surface-50 dark:hover:bg-surface-900"
                  [ngClass]="selectedIndex() === index ? 'bg-surface-50 dark:bg-surface-900' : ''"
                  (click)="selectedIndex.set(index)"
                >
                  <div
                    class="absolute right-0 lg:top-0 lg:bottom-0 bottom-0 left-0 lg:left-auto h-1 lg:h-auto lg:w-1"
                    [ngClass]="selectedIndex() === index ? 'bg-primary-500' : 'bg-surface-200 dark:bg-surface-700'"
                  ></div>

                  <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-16 h-16 rounded-full object-cover" />
                  <div class="flex flex-col gap-1">
                    <h5 class="text-lg font-medium leading-tight text-surface-900 dark:text-surface-0">
                      {{ testimonial.name }}
                    </h5>
                    <span class="hidden lg:block text-base leading-tight text-surface-600 dark:text-surface-400">
                      {{ testimonial.title }}
                    </span>
                  </div>
                </div>
              }
            </div>
          </div>

          <div class="flex-1 flex items-center justify-center">
            <div class="flex flex-col gap-6 max-w-[42.71rem]">
              <h3 class="text-xl leading-tight font-semibold text-surface-900 dark:text-surface-0">
                {{ selectedTestimonial().heading }}
              </h3>
              <p class="text-base leading-normal font-light text-surface-600 dark:text-surface-400">
                {{ selectedTestimonial().content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class __CLASS_NAME__ {
  testimonials = [
    {
      id: 1,
      name: 'Cameron Williamson',
      title: 'Founder & CEO',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-15.png',
      heading: 'Habitant morbi tristique senectus',
      content:
        'Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum faucibus. Non diam phasellus vestibulum lorem. Magna eget est lorem ipsum dolor. Malesuada fames ac turpis egestas maecenas pharetra convallis.',
    },
    {
      id: 2,
      name: 'Darlene Robertson',
      title: 'Founder & CEO',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-19.png',
      heading: 'Habitant morbi tristique senectus',
      content: 'Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum faucibus. Non diam phasellus vestibulum lorem.',
    },
    {
      id: 3,
      name: 'Robert Hawkins',
      title: 'Product Manager',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-10.png',
      heading: 'Habitant morbi tristique senectus',
      content: 'Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum faucibus.',
    },
  ];

  selectedIndex = signal(1);

  selectedTestimonial = computed(() => this.testimonials[this.selectedIndex()]);
}
