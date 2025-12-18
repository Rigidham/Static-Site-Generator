import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="flex gap-3 sm:gap-8 md:gap-12 lg:gap-16 2xl:gap-20 items-center justify-center py-32 lg:py-36 px-4 bg-surface-0 overflow-hidden dark:bg-surface-950">
      <button class="hidden md:block w-16 lg:w-23 transition-all duration-300 hover:scale-105 cursor-pointer" (click)="prevCard()">
        <svg class="w-full h-auto transition-all duration-300 hover:drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" width="104" height="110" viewBox="0 0 104 110" fill="none">
          <g filter="url(#filter0_d_5456_6803)">
            <path
              d="M20.5 43.3897C11.8334 48.3934 11.8333 60.9026 20.5 65.9063L71.823 95.5377C80.4896 100.541 91.323 94.2867 91.323 84.2793L91.323 25.0167C91.323 15.0093 80.4896 8.75463 71.823 13.7583L20.5 43.3897Z"
              class="fill-surface-0 dark:fill-surface-800"
            />
            <path
              d="M20.75 43.8227C12.4167 48.6339 12.4167 60.6621 20.75 65.4733L72.073 95.1046C80.4063 99.9159 90.823 93.9018 90.823 84.2793L90.823 25.0167C90.823 15.3942 80.4063 9.38009 72.073 14.1913L20.75 43.8227Z"
              class="stroke-surface-200 dark:stroke-surface-700"
            />
          </g>
          <defs>
            <filter id="filter0_d_5456_6803" x="2" y="-0.00292969" width="101.323" height="109.302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5456_6803" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5456_6803" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
      <div class="relative w-[96%] md:w-112 lg:w-128 xl:w-144 2xl:w-160 h-80 flex items-center justify-center">
        @for (card of visibleCards(); track card.id; let index = $index) {
          <div class="absolute w-full transition-all duration-500 ease-out" [ngClass]="getCardClasses(index)" [ngStyle]="getCardStyles(index)">
            <div class="p-8 rounded-2xl bg-surface-0 dark:bg-surface-800 shadow-[0px_12px_32px_0px_rgba(0,0,0,0.08)]">
              <p class="text-lg leading-normal text-surface-600 dark:text-surface-400">"{{ card.comment }}"</p>
              <div class="flex items-center gap-4 mt-8">
                <div class="w-16 h-16 border border-surface-200 dark:border-surface-700 rounded-full">
                  <img class="w-full h-full object-cover rounded-full" [src]="card.avatar" [alt]="card.name" />
                </div>
                <div>
                  <h5 class="text-lg font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ card.name }}</h5>
                  <div class="text-base text-surface-600 dark:text-surface-400 leading-tight">{{ card.job }}</div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <button class="hidden md:block w-16 lg:w-23 transition-all duration-300 hover:scale-105 cursor-pointer" (click)="nextCard()">
        <svg class="w-full h-auto transition-all duration-300 hover:drop-shadow-sm" xmlns="http://www.w3.org/2000/svg" width="104" height="110" viewBox="0 0 104 110" fill="none">
          <g filter="url(#filter0_d_5456_6805)">
            <path
              d="M83.5 43.3897C92.1666 48.3934 92.1667 60.9026 83.5 65.9063L32.177 95.5377C23.5104 100.541 12.677 94.2867 12.677 84.2793V25.0167C12.677 15.0093 23.5104 8.75463 32.177 13.7583L83.5 43.3897Z"
              class="fill-surface-0 dark:fill-surface-800"
            />
            <path
              d="M83.25 43.8227C91.5833 48.6339 91.5833 60.6621 83.25 65.4733L31.927 95.1046C23.5937 99.9159 13.177 93.9018 13.177 84.2793V25.0167C13.177 15.3942 23.5937 9.38009 31.927 14.1913L83.25 43.8227Z"
              class="stroke-surface-200 dark:stroke-surface-700"
            />
          </g>
          <defs>
            <filter id="filter0_d_5456_6805" x="0.676758" y="-0.00292969" width="101.323" height="109.302" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5456_6805" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5456_6805" result="shape" />
            </filter>
          </defs>
        </svg>
      </button>
    </section>
  `,
})
export class __CLASS_NAME__ {
  testimonials = signal([
    {
      id: 1,
      name: 'Robert Fox',
      job: 'Product Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-16.png',
      comment: 'Sed adipiscing diam donec adipiscing. Est lorem ipsum dolor sit amet consectetur. Auctor elit sed vulputate mi sit amet mauris commodo quis. Pulvinar neque laoreet suspendisse interdum consectetur.',
    },
    {
      id: 2,
      name: 'Jane Cooper',
      job: 'UI/UX Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-18.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet lorem.',
    },
    {
      id: 3,
      name: 'Wade Warren',
      job: 'Software Engineer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
      comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
  ]);

  currentIndex = signal(0);
  isAnimating = signal(false);
  animationDirection = signal<string | null>(null);

  visibleCards = computed(() => {
    const total = this.testimonials().length;

    if (this.animationDirection() === 'prev') {
      const newCurrentIndex = (this.currentIndex() - 1 + total) % total;
      return [this.testimonials()[newCurrentIndex], this.testimonials()[this.currentIndex()], this.testimonials()[(this.currentIndex() + 1) % total]];
    }

    return [this.testimonials()[this.currentIndex()], this.testimonials()[(this.currentIndex() + 1) % total], this.testimonials()[(this.currentIndex() + 2) % total]];
  });

  getCardClasses = (index: number) => {
    switch (index) {
      case 0:
        return 'z-30';
      case 1:
        return 'z-20';
      case 2:
        return 'z-10';
      default:
        return '';
    }
  };

  getCardStyles = (index: number) => {
    const baseTransform = '';

    if (this.isAnimating()) {
      if (this.animationDirection() === 'next') {
        switch (index) {
          case 0:
            return {
              transform: `${baseTransform} translateX(120px) translateY(60px) rotate(15deg) scale(0.85)`,
              opacity: '0.6',
              zIndex: '5',
            };
          case 1:
            return { transform: `${baseTransform} rotate(0deg) scale(1)`, opacity: '1' };
          case 2:
            return { transform: `${baseTransform} rotate(5.6deg) scale(0.95)`, opacity: '0.9' };
        }
      } else if (this.animationDirection() === 'prev') {
        switch (index) {
          case 0:
            return { transform: `${baseTransform} rotate(0deg) scale(1)`, opacity: '1' };
          case 1:
            return {
              transform: `${baseTransform} translateX(-120px) translateY(60px) rotate(-15deg) scale(0.85)`,
              opacity: '0.6',
              zIndex: '5',
            };
          case 2:
            return { transform: `${baseTransform} rotate(5.6deg) scale(0.95)`, opacity: '0.9' };
        }
      }
    }

    switch (index) {
      case 0:
        return { transform: `${baseTransform} rotate(0deg) scale(1)`, opacity: '1' };
      case 1:
        return { transform: `${baseTransform} rotate(5.6deg) scale(0.95)`, opacity: '0.9' };
      case 2:
        return { transform: `${baseTransform} rotate(-5deg) scale(0.85)`, opacity: '0.8' };
      default:
        return { transform: baseTransform, opacity: '1' };
    }
  };

  nextCard = () => {
    if (this.isAnimating()) return;

    this.isAnimating.set(true);
    this.animationDirection.set('next');

    setTimeout(() => {
      this.currentIndex.set((this.currentIndex() + 1) % this.testimonials().length);
      this.isAnimating.set(false);
      this.animationDirection.set(null);
    }, 250);
  };

  prevCard = () => {
    if (this.isAnimating()) return;

    this.isAnimating.set(true);
    this.animationDirection.set('prev');

    setTimeout(() => {
      this.currentIndex.set((this.currentIndex() - 1 + this.testimonials().length) % this.testimonials().length);
      this.isAnimating.set(false);
      this.animationDirection.set(null);
    }, 250);
  };
}
