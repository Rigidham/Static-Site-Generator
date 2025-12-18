import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 p-8 md:p-12 lg:p-20">
      <div class="flex flex-col items-center gap-14">
        <h1 class="text-3xl md:text-5xl text-surface-900 dark:text-surface-0 font-semibold leading-tight text-center">Comments from our customers</h1>

        <div class="flex flex-col items-center gap-8">
          <div class="flex items-center gap-8">
            <button pButton severity="secondary" class="w-10! h-10! p-2! border-surface-200! dark:border-surface-700!" outlined="true" rounded="true" (click)="back()">
              <i pButtonIcon class="pi pi-chevron-left text-xl! leading-none!"></i>
            </button>
            <div class="w-[8.57rem] h-[8.57rem] shadow-[0px_0px_0px_1px_rgba(18,55,105,0.08),0px_1px_2px_0px_rgba(164,172,185,0.24)] rounded-full">
              <img class="w-full h-full object-cover rounded-full" [src]="testimonials()[selectedTestimonial()].image" [alt]="testimonials()[selectedTestimonial()].name" />
            </div>
            <button pButton severity="secondary" class="w-10! h-10! p-2! border-surface-200! dark:border-surface-700!" outlined="true" rounded="true" (click)="next()">
              <i pButtonIcon class="pi pi-chevron-right text-xl! leading-none!"></i>
            </button>
          </div>

          <div class="flex flex-col items-center gap-6">
            <div class="flex flex-col items-center gap-2">
              <h2 class="text-2xl font-semibold text-surface-900 dark:text-surface-0 leading-tight">{{ testimonials()[selectedTestimonial()].name }}</h2>
              <p class="text-lg text-surface-500 dark:text-surface-400 leading-tight">{{ testimonials()[selectedTestimonial()].title }}</p>
            </div>
            <p class="max-w-[64.29rem] text-lg text-surface-500 dark:text-surface-400 leading-normal text-center">{{ testimonials()[selectedTestimonial()].comment }}</p>
          </div>
        </div>

        <div class="flex items-center gap-6">
          @for (item of testimonials(); track item.name; let index = $index) {
            <button
              [ngClass]="{
                'w-14 h-14 rounded-full transition-all cursor-pointer': true,
                'opacity-40 hover:opacity-70': selectedTestimonial() !== index,
                'opacity-100': selectedTestimonial() === index
              }"
              (click)="selectedTestimonial.set(index)"
            >
              <img class="w-full h-full object-cover rounded-full" [src]="item.image" [alt]="item.name" />
            </button>
          }
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {
  testimonials = signal([
    {
      name: 'Olivia Holt',
      title: 'Product Designer',
      comment: 'Magna eget est lorem ipsum dolor. Malesuada fames ac turpis egestas maecenas pharetra convallis. Leo vel fringilla est ullamcorper eget nulla facilisi.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-19@2x.png',
    },
    {
      name: 'James Smith',
      title: 'Software Engineer',
      comment: 'Ut tristique et egestas quis ipsum suspendisse ultrices gravida. In hac habitasse platea dictumst quisque sagittis purus sit amet volutpat.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-5.png',
    },
    {
      name: 'Liam Johnson',
      title: 'Project Manager',
      comment: 'Enim nunc faucibus a pellentesque sit amet porttitor eget dolor morbi non arcu risus. Amet cursus sit amet dictum sit amet justo donec.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-8.png',
    },
    {
      name: 'Ethan Brown',
      title: 'UX Designer',
      comment: 'Euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus.',
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-10@2x.png',
    },
  ]);

  selectedTestimonial = signal(0);

  next = () => {
    this.selectedTestimonial.set((this.selectedTestimonial() + 1) % this.testimonials().length);
  };

  back = () => {
    this.selectedTestimonial.set((this.selectedTestimonial() - 1 + this.testimonials().length) % this.testimonials().length);
  };
}
