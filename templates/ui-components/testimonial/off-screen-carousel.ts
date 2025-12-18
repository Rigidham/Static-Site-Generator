import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

interface Testimonial {
  id: number;
  comment: string;
  name: string;
  title: string;
  avatar: string;
  uniqueId?: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 p-6 md:p-12 lg:p-[70px] overflow-hidden">
      <div class="flex md:flex-row flex-col gap-4 md:items-end justify-between mb-10">
        <div class="flex flex-col gap-4">
          <h1 class="text-4xl md:text-5xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">Comments from the users</h1>
          <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">Augue neque gravida in fermentum et sollicitudin ac orci phasellus.</p>
        </div>
        <div class="flex items-center gap-4">
          <button pButton severity="secondary" class="w-8! h-8! p-2! border-surface-100! dark:border-surface-700!" [outlined]="true" [rounded]="true" (click)="prevSlide()">
            <i pButtonIcon class="pi pi-chevron-left"></i>
          </button>
          <button pButton severity="secondary" class="w-8! h-8! p-2! border-surface-100! dark:border-surface-700!" [outlined]="true" [rounded]="true" (click)="nextSlide()">
            <i pButtonIcon class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="absolute top-0 -left-[calc(100%+20px)] w-full h-full bg-surface-0 dark:bg-surface-950 z-50 transition-none!"></div>
        <div class="absolute top-0 -left-14 w-20 h-full z-50 pointer-events-none bg-linear-to-r from-surface-0 dark:from-surface-950 from-50% to-transparent"></div>

        <div #containerRef class="flex gap-6" [style.transform]="'translateX(' + currentTranslate() + 'px)'" (transitionend)="handleTransitionEnd()">
          @for (testimonial of duplicatedTestimonials(); track testimonial.uniqueId) {
            <div class="w-[364px] shrink-0 p-6 border border-surface-200 dark:border-surface-700 rounded-2xl">
              <div class="flex flex-col gap-4">
                <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                  <path
                    d="M10.7287 27.1513C9.44125 25.7838 8.75 24.2501 8.75 21.7638C8.75 17.3888 11.8212 13.4676 16.2875 11.5288L17.4037 13.2513C13.235 15.5063 12.42 18.4326 12.095 20.2776C12.7662 19.9301 13.645 19.8088 14.5062 19.8888C16.7612 20.0976 18.5387 21.9488 18.5387 24.2501C18.5387 25.4104 18.0778 26.5232 17.2573 27.3437C16.4369 28.1641 15.3241 28.6251 14.1637 28.6251C12.8225 28.6251 11.54 28.0126 10.7287 27.1513ZM23.2287 27.1513C21.9412 25.7838 21.25 24.2501 21.25 21.7638C21.25 17.3888 24.3212 13.4676 28.7875 11.5288L29.9037 13.2513C25.735 15.5063 24.92 18.4326 24.595 20.2776C25.2662 19.9301 26.145 19.8088 27.0062 19.8888C29.2612 20.0976 31.0387 21.9488 31.0387 24.2501C31.0387 25.4104 30.5778 26.5232 29.7573 27.3437C28.9369 28.1641 27.8241 28.6251 26.6637 28.6251C25.3225 28.6251 24.04 28.0126 23.2287 27.1513Z"
                    class="fill-surface-500"
                  />
                </svg>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-normal">{{ testimonial.comment }}</p>
              </div>
              <div class="flex items-center gap-4 mt-6">
                <img [src]="testimonial.avatar" [alt]="testimonial.name" class="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                  <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.title }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ implements AfterViewInit {
  @ViewChild('containerRef') containerRef!: ElementRef<HTMLDivElement>;

  baseTestimonials: Testimonial[] = [
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
      comment: 'Nulla pharetra diam sit amet nisl suscipit adipiscing. Gravida quis blandit turpis cursus. Aliquet sagittis id consectetur purus ut faucibus.',
      name: 'Jacob Jones',
      title: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-15.png',
    },
  ];

  duplicatedTestimonials = computed(() => [
    ...this.baseTestimonials.map((testimonial) => ({ ...testimonial, uniqueId: `first-${testimonial.id}` })),
    ...this.baseTestimonials.map((testimonial) => ({ ...testimonial, uniqueId: `second-${testimonial.id}` })),
  ]);

  translateX = signal(0);
  cardWidth = 364;
  cardGap = 24;
  initialOffset = 2;
  isTransitioning = signal(false);

  setWidth = computed(() => this.baseTestimonials.length * this.cardWidth + (this.baseTestimonials.length - 1) * this.cardGap);

  currentTranslate = computed(() => this.initialOffset + this.translateX());

  handleTransitionEnd = (): void => {
    this.isTransitioning.set(false);

    if (Math.abs(this.translateX()) >= this.setWidth()) {
      this.containerRef.nativeElement.style.transition = 'none';
      this.translateX.set(0);
      this.containerRef.nativeElement.offsetHeight;
      this.containerRef.nativeElement.style.transition = 'transform 500ms ease-out';
    }

    if (this.translateX() === 0 && this.containerRef.nativeElement.style.transition === 'none') {
      this.translateX.set(-this.setWidth());
      this.containerRef.nativeElement.offsetHeight;
      this.containerRef.nativeElement.style.transition = 'transform 500ms ease-out';
    }
  };

  nextSlide = (): void => {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);
    this.translateX.set(this.translateX() - this.cardWidth - this.cardGap);
  };

  prevSlide = (): void => {
    if (this.isTransitioning()) return;
    this.isTransitioning.set(true);

    if (this.translateX() === 0) {
      this.containerRef.nativeElement.style.transition = 'none';
      this.translateX.set(-this.setWidth());
      this.containerRef.nativeElement.offsetHeight;
      this.containerRef.nativeElement.style.transition = 'transform 500ms ease-out';
    }

    this.translateX.set(this.translateX() + this.cardWidth + this.cardGap);
  };

  ngAfterViewInit(): void {
    if (this.containerRef?.nativeElement) {
      this.containerRef.nativeElement.style.transition = 'transform 500ms ease-out';
    }
  }
}
