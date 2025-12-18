import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="flex flex-col lg:flex-row bg-surface-0 dark:bg-surface-950">
      <div class="w-full lg:w-1/2 flex flex-col justify-center gap-8 p-8 md:p-12 lg:p-20">
        <h1 class="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Designed for Founders</h1>

        <div class="flex flex-col gap-6">
          @for (feature of features; track feature) {
            <div class="flex items-center gap-4">
              <i class="pi pi-check-square text-xl! leading-none! text-surface-900 dark:text-surface-0"></i>
              <p class="text-lg text-surface-600 dark:text-surface-400 leading-normal">{{ feature }}</p>
            </div>
          }
        </div>

        <button pButton severity="contrast" class="w-fit">
          <span pButtonLabel>Upgrade Now</span>
        </button>
      </div>

      <div class="w-full lg:w-1/2 p-8">
        <div class="h-176 rounded-2xl flex items-end p-8 bg-cover! bg-top!" [ngStyle]="{ backgroundImage: 'url(' + testimonials[currentIndex()].image + ')' }">
          <div class="flex flex-col gap-8 rounded-2xl p-8 w-full border border-white/15 bg-white/15 backdrop-blur-[24.5px]">
            <p class="text-xl lg:text-2xl text-white leading-normal font-light min-h-[3.5em]">{{ testimonials[currentIndex()].quote }}</p>

            <div class="flex items-center gap-4 py-4">
              <hr class="flex-1 border-white/10" />
              <div class="flex gap-2">
                @for (n of [1, 2, 3, 4, 5]; track n) {
                  <i class="pi pi-star-fill text-base! leading-none! text-white"></i>
                }
              </div>
              <hr class="flex-1 border-white/10" />
            </div>

            <div class="flex justify-between items-center">
              <div class="flex flex-col gap-2">
                <h3 class="text-lg text-white/80 leading-tight">{{ testimonials[currentIndex()].name }}</h3>
                <p class="text-base text-white/70 font-light leading-tight">{{ testimonials[currentIndex()].title }}</p>
              </div>
              <div class="flex gap-4">
                <button class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition hover:bg-white/20 cursor-pointer" (click)="prevTestimonial()">
                  <i class="pi pi-arrow-left text-base! leading-none! text-white"></i>
                </button>
                <button class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition hover:bg-white/20 cursor-pointer" (click)="nextTestimonial()">
                  <i class="pi pi-arrow-right text-base! leading-none! text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  features = ['Aliquet nibh praesent tristique magna', 'Ut enim blandit volutpat maecenas', 'Quisque non tellus orci ac auctor'];

  testimonials = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/testimonial/testimonials-3.jpg',
      quote: 'He wondered if it could be called a beach if there was no sand.',
      name: 'Johnathan Doe',
      title: 'CEO of Hyper',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/testimonial/testimonials-1.jpg',
      quote: 'The product exceeded our expectations. Simple, efficient, and incredibly powerful.',
      name: 'Sarah Johnson',
      title: 'Chef at CrunchBurger',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/testimonial/testimonials-8.jpg',
      quote: 'Best investment we made this year. The ROI has been incredible.',
      name: 'Micheal Joe',
      title: 'Founder of StartUp',
    },
  ];

  currentIndex = signal(0);

  nextTestimonial = () => {
    this.currentIndex.set((this.currentIndex() + 1) % this.testimonials.length);
  };

  prevTestimonial = () => {
    this.currentIndex.set((this.currentIndex() - 1 + this.testimonials.length) % this.testimonials.length);
  };
}
