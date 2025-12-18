import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 py-20 px-8 md:px-12 lg:px-20">
      <div class="flex flex-col items-center gap-6 mb-16">
        <div class="px-4 py-2 border border-surface-200 dark:border-surface-700 rounded-full">
          <span class="text-base font-medium text-surface-900 dark:text-surface-0 leading-tight">Testimonial</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-semibold text-surface-900 dark:text-surface-0 leading-tight text-center">Views of Our Customers</h1>
        <p class="text-lg text-surface-500 dark:text-surface-400 leading-normal max-w-2xl text-center">
          Justo eget magna fermentum iaculis eu non diam phasellus vestibulum. Sed tempus urna et pharetra pharetra massa massa ultricies.
        </p>
      </div>

      <div class="relative overflow-hidden h-[70.36rem]">
        <div class="absolute top-0 left-0 w-full h-[19.36rem] z-10 pointer-events-none bg-linear-to-b from-surface-0 dark:from-surface-950 via-surface-0/80 dark:via-surface-950/80 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-[19.36rem] z-10 pointer-events-none bg-linear-to-t from-surface-0 dark:from-surface-950 via-surface-0/80 dark:via-surface-950/80 to-transparent"></div>

        <div #scrollContainer class="overflow-y-auto hide-scrollbar h-full">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="flex flex-col gap-8">
              @for (testimonial of firstColumnTestimonials; track testimonial.name) {
                <div class="w-full p-8 border border-surface-200 dark:border-surface-700 rounded-xl">
                  <div class="flex flex-col gap-4">
                    <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                      <path
                        d="M10.7287 27.1513C9.44125 25.7838 8.75 24.2501 8.75 21.7638C8.75 17.3888 11.8212 13.4676 16.2875 11.5288L17.4037 13.2513C13.235 15.5063 12.42 18.4326 12.095 20.2776C12.7662 19.9301 13.645 19.8088 14.5062 19.8888C16.7612 20.0976 18.5387 21.9488 18.5387 24.2501C18.5387 25.4104 18.0778 26.5232 17.2573 27.3437C16.4369 28.1641 15.3241 28.6251 14.1637 28.6251C12.8225 28.6251 11.54 28.0126 10.7287 27.1513ZM23.2287 27.1513C21.9412 25.7838 21.25 24.2501 21.25 21.7638C21.25 17.3888 24.3212 13.4676 28.7875 11.5288L29.9037 13.2513C25.735 15.5063 24.92 18.4326 24.595 20.2776C25.2662 19.9301 26.145 19.8088 27.0062 19.8888C29.2612 20.0976 31.0387 21.9488 31.0387 24.2501C31.0387 25.4104 30.5778 26.5232 29.7573 27.3437C28.9369 28.1641 27.8241 28.6251 26.6637 28.6251C25.3225 28.6251 24.04 28.0126 23.2287 27.1513Z"
                        class="fill-surface-500"
                      />
                    </svg>
                    <p class="text-lg text-surface-500 dark:text-surface-400 leading-normal">{{ testimonial.comment }}</p>
                  </div>
                  <div class="flex items-center gap-4 mt-8">
                    <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                      <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div class="flex flex-col gap-8 md:-mt-10">
              @for (testimonial of secondColumnTestimonials; track testimonial.name) {
                <div class="w-full p-8 border border-surface-200 dark:border-surface-700 rounded-xl">
                  <div class="flex flex-col gap-4">
                    <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                      <path
                        d="M10.7287 27.1513C9.44125 25.7838 8.75 24.2501 8.75 21.7638C8.75 17.3888 11.8212 13.4676 16.2875 11.5288L17.4037 13.2513C13.235 15.5063 12.42 18.4326 12.095 20.2776C12.7662 19.9301 13.645 19.8088 14.5062 19.8888C16.7612 20.0976 18.5387 21.9488 18.5387 24.2501C18.5387 25.4104 18.0778 26.5232 17.2573 27.3437C16.4369 28.1641 15.3241 28.6251 14.1637 28.6251C12.8225 28.6251 11.54 28.0126 10.7287 27.1513ZM23.2287 27.1513C21.9412 25.7838 21.25 24.2501 21.25 21.7638C21.25 17.3888 24.3212 13.4676 28.7875 11.5288L29.9037 13.2513C25.735 15.5063 24.92 18.4326 24.595 20.2776C25.2662 19.9301 26.145 19.8088 27.0062 19.8888C29.2612 20.0976 31.0387 21.9488 31.0387 24.2501C31.0387 25.4104 30.5778 26.5232 29.7573 27.3437C28.9369 28.1641 27.8241 28.6251 26.6637 28.6251C25.3225 28.6251 24.04 28.0126 23.2287 27.1513Z"
                        class="fill-surface-500"
                      />
                    </svg>
                    <p class="text-lg text-surface-500 dark:text-surface-400 leading-normal">{{ testimonial.comment }}</p>
                  </div>
                  <div class="flex items-center gap-4 mt-8">
                    <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                      <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
                    </div>
                  </div>
                </div>
              }
            </div>

            <div class="hidden lg:flex flex-col gap-8 -mt-64">
              @for (testimonial of thirdColumnTestimonials; track testimonial.name) {
                <div class="w-full p-8 border border-surface-200 dark:border-surface-700 rounded-xl">
                  <div class="flex flex-col gap-4">
                    <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                      <path
                        d="M10.7287 27.1513C9.44125 25.7838 8.75 24.2501 8.75 21.7638C8.75 17.3888 11.8212 13.4676 16.2875 11.5288L17.4037 13.2513C13.235 15.5063 12.42 18.4326 12.095 20.2776C12.7662 19.9301 13.645 19.8088 14.5062 19.8888C16.7612 20.0976 18.5387 21.9488 18.5387 24.2501C18.5387 25.4104 18.0778 26.5232 17.2573 27.3437C16.4369 28.1641 15.3241 28.6251 14.1637 28.6251C12.8225 28.6251 11.54 28.0126 10.7287 27.1513ZM23.2287 27.1513C21.9412 25.7838 21.25 24.2501 21.25 21.7638C21.25 17.3888 24.3212 13.4676 28.7875 11.5288L29.9037 13.2513C25.735 15.5063 24.92 18.4326 24.595 20.2776C25.2662 19.9301 26.145 19.8088 27.0062 19.8888C29.2612 20.0976 31.0387 21.9488 31.0387 24.2501C31.0387 25.4104 30.5778 26.5232 29.7573 27.3437C28.9369 28.1641 27.8241 28.6251 26.6637 28.6251C25.3225 28.6251 24.04 28.0126 23.2287 27.1513Z"
                        class="fill-surface-500"
                      />
                    </svg>
                    <p class="text-lg text-surface-500 dark:text-surface-400 leading-normal">{{ testimonial.comment }}</p>
                  </div>
                  <div class="flex items-center gap-4 mt-8">
                    <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                      <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
                    </div>
                  </div>
                </div>
              }
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
export class __CLASS_NAME__ implements OnInit {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  baseTestimonials = [
    {
      id: 1,
      comment: 'Ipsum dolor sit amet consectetur. Orci a scelerisque purus semper eget. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Eu nisl nunc mi ipsum faucibus.',
      name: 'Jane Cooper',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-18.png',
    },
    {
      id: 2,
      comment: 'Magna eget est lorem ipsum dolor. Malesuada fames ac turpis egestas maecenas pharetra convallis. Leo vel fringilla est ullamcorper eget nulla facilisi.',
      name: 'Olivia Holt',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-19.png',
    },
    {
      id: 3,
      comment: 'Sapien eget mi proin sed. Ultrices gravida dictum fusce ut placerat. Adipiscing tristique risus nec feugiat in fermentum. Nunc sed blandit libero volutpat.',
      name: 'Robert Fox',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
    },
    {
      id: 4,
      comment: 'Ut faucibus pulvinar elementum integer enim. Faucibus purus in massa tempor nec. Aenean sed adipiscing diam donec adipiscing tristique.',
      name: 'Bessie Cooper',
      title: 'Product Manager',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-20.png',
    },
    {
      id: 5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Eleanor Pena',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-21.png',
    },
    {
      id: 6,
      comment: 'Risus feugiat in ante metus dictum. Placerat in egestas erat imperdiet. Diam sit amet nisl suscipit adipiscing bibendum est ultricies.',
      name: 'Darrell Steward',
      title: 'Product Manager',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-17.png',
    },
    {
      id: 7,
      comment: 'Lorem mollis aliquam ut porttitor leo a diam. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.',
      name: 'Emma Stone',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-9.png',
    },
    {
      id: 8,
      comment: 'Praesent semper feugiat nibh sed. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.',
      name: 'Kyra Assaad',
      title: 'Product Manager',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-9.png',
    },
    {
      id: 9,
      comment: 'Est sit amet facilisis magna etiam tempor orci eu. Amet cursus sit amet dictum. Sit amet commodo nulla facilisi nullam vehicula.',
      name: 'Wade Warren',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
    },
  ];

  testimonials = [
    ...this.baseTestimonials,
    ...this.baseTestimonials.map((testimonial) => ({
      ...testimonial,
      id: testimonial.id + this.baseTestimonials.length,
      uniqueId: `duplicate-${testimonial.id}`,
    })),
  ];

  firstColumnTestimonials = this.testimonials.slice(0, 6);
  secondColumnTestimonials = this.testimonials.slice(6, 12);
  thirdColumnTestimonials = this.testimonials.slice(12, 18);

  ngOnInit() {
    if (this.scrollContainer) {
      const element = this.scrollContainer.nativeElement;
      element.scrollTop = (element.scrollHeight - element.clientHeight) / 2;
    }
  }
}
