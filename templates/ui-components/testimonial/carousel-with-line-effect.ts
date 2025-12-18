import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, Button, AvatarModule],
  template: `
    <div class="py-20 px-12 relative overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-104 h-auto absolute -left-72 lg:-left-36 xl:left-0 top-1/2 -translate-y-1/2" viewBox="0 0 378 386" fill="none">
        <path
          d="M372.333 383C372.333 384.473 373.527 385.667 375 385.667C376.473 385.667 377.667 384.473 377.667 383C377.667 381.527 376.473 380.333 375 380.333C373.527 380.333 372.333 381.527 372.333 383ZM224.473 375.982L224.119 376.336L224.473 375.982ZM-138.647 12.6462C-138.842 12.4511 -139.159 12.4513 -139.354 12.6467C-139.549 12.8421 -139.549 13.1587 -139.353 13.3538L-138.647 12.6462ZM372.333 3C372.333 4.47276 373.527 5.66667 375 5.66667C376.473 5.66667 377.667 4.47276 377.667 3C377.667 1.52724 376.473 0.333333 375 0.333333C373.527 0.333333 372.333 1.52724 372.333 3ZM224.473 10.018L224.119 9.66418L224.473 10.018ZM-139.353 372.646C-139.549 372.841 -139.549 373.158 -139.354 373.353C-139.159 373.549 -138.842 373.549 -138.647 373.354L-139.353 372.646ZM375 382.5H241.432V383.5H375V382.5ZM224.826 375.628L-138.647 12.6462L-139.353 13.3538L224.119 376.336L224.826 375.628ZM241.432 382.5C235.205 382.5 229.232 380.028 224.826 375.628L224.119 376.336C228.713 380.923 234.94 383.5 241.432 383.5V382.5ZM375 2.5H241.432V3.5H375V2.5ZM224.119 9.66418L-139.353 372.646L-138.647 373.354L224.826 10.3718L224.119 9.66418ZM241.432 2.5C234.94 2.5 228.713 5.07669 224.119 9.66418L224.826 10.3718C229.232 5.97152 235.205 3.5 241.432 3.5V2.5Z"
          fill="url(#paint0_linear_8511_25327)"
        />
        <defs>
          <linearGradient id="paint0_linear_8511_25327" x1="375" y1="193" x2="-139" y2="193" gradientUnits="userSpaceOnUse">
            <stop offset="0.905" stop-color="#E4E4E7" />
            <stop offset="1" stop-color="#E4E4E7" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block w-104 h-auto absolute -right-72 lg:-right-36 xl:right-0 top-1/2 -translate-y-1/2" viewBox="0 0 378 386" fill="none">
        <path
          d="M0.333333 383C0.333333 384.473 1.52724 385.667 3 385.667C4.47276 385.667 5.66667 384.473 5.66667 383C5.66667 381.527 4.47276 380.333 3 380.333C1.52724 380.333 0.333333 381.527 0.333333 383ZM153.527 375.982L153.881 376.336L153.527 375.982ZM517.353 13.3538C517.549 13.1587 517.549 12.8421 517.354 12.6467C517.159 12.4513 516.842 12.4511 516.647 12.6462L517.353 13.3538ZM0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM153.527 10.018L153.881 9.66418L153.527 10.018ZM516.647 373.354C516.842 373.549 517.159 373.549 517.354 373.353C517.549 373.158 517.549 372.841 517.353 372.646L516.647 373.354ZM3 383.5H136.568V382.5H3V383.5ZM153.881 376.336L517.353 13.3538L516.647 12.6462L153.174 375.628L153.881 376.336ZM136.568 383.5C143.06 383.5 149.287 380.923 153.881 376.336L153.174 375.628C148.768 380.028 142.795 382.5 136.568 382.5V383.5ZM3 3.5H136.568V2.5H3V3.5ZM153.174 10.3718L516.647 373.354L517.353 372.646L153.881 9.66418L153.174 10.3718ZM136.568 3.5C142.795 3.5 148.768 5.97152 153.174 10.3718L153.881 9.66418C149.287 5.07669 143.06 2.5 136.568 2.5V3.5Z"
          fill="url(#paint0_linear_8511_25326)"
        />
        <defs>
          <linearGradient id="paint0_linear_8511_25326" x1="517" y1="193" x2="3" y2="193" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E4E4E7" stop-opacity="0" />
            <stop offset="0.095" stop-color="#E4E4E7" />
          </linearGradient>
        </defs>
      </svg>
      <div class="relative">
        <h1 class="text-3xl md:text-5xl font-semibold text-surface-900 dark:text-surface-0 text-center">What Our Clients Say</h1>
        <div class="mt-8 md:mt-28">
          <p class="max-w-2xl mx-auto text-surface-500 text-lg md:text-xl text-center">
            {{ testimonials()[currentIndex()].comment }}
          </p>
          <div class="w-fit mx-auto flex flex-col items-center mt-6">
            <span class="text-xl font-medium text-surface-900 dark:text-surface-0 text-center leading-tight">{{ testimonials()[currentIndex()].name }}</span>
            <span class="text-surface-500 text-center leading-tight">{{ testimonials()[currentIndex()].job }}</span>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4 mt-24">
          <p-button icon="pi pi-chevron-left" severity="secondary" [outlined]="true" [rounded]="true" (onClick)="prev()"></p-button>
          <div class="flex items-center gap-4">
            <p-avatar size="large" styleClass="rounded-full! shadow-lg!" [image]="testimonials()[prevIndex()].avatar"></p-avatar>
            <p-avatar size="xlarge" [image]="testimonials()[currentIndex()].avatar" styleClass="rounded-full! shadow-xl!"></p-avatar>
            <p-avatar size="large" [image]="testimonials()[nextIndex()].avatar" styleClass="rounded-full! shadow-lg!"></p-avatar>
          </div>
          <p-button icon="pi pi-chevron-right" severity="secondary" [outlined]="true" [rounded]="true" (onClick)="next()"></p-button>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  testimonials = signal([
    {
      name: 'John Smith',
      job: 'Product Manager',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-6.png',
      comment: 'Aenean sed adipiscing diam donec adipiscing. In hendrerit gravida rutrum quisque non.',
    },
    {
      name: 'Bessie Cooper',
      job: 'UI/UX Designer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-20.png',
      comment: 'Working with this team has been an incredible experience. Their attention to detail and commitment to excellence are second to none.',
    },
    {
      name: 'Michael Brown',
      job: 'Software Engineer',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
      comment: 'The project was completed ahead of schedule, and the quality exceeded my expectations. I would highly recommend them.',
    },
    {
      name: 'Sophia Davis',
      job: 'Marketing Specialist',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-5.png',
      comment: 'Their innovative approach to problem-solving is truly impressive. They bring fresh ideas to the table and execute them flawlessly.',
    },
    {
      name: 'David Wilson',
      job: 'Data Scientist',
      avatar: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-15.png',
      comment: 'From start to finish, their professionalism and expertise were evident. I am extremely satisfied with the results.',
    },
  ]);

  currentIndex = signal(0);

  prevIndex = computed(() => {
    return this.currentIndex() === 0 ? this.testimonials().length - 1 : this.currentIndex() - 1;
  });

  nextIndex = computed(() => {
    return this.currentIndex() === this.testimonials().length - 1 ? 0 : this.currentIndex() + 1;
  });

  next = () => {
    this.currentIndex.set(this.nextIndex());
  };

  prev = () => {
    this.currentIndex.set(this.prevIndex());
  };
}
