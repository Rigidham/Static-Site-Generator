import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `
    <div class="p-8 md:p-12 lg:p-20 bg-surface-50 dark:bg-surface-950">
      <div class="flex flex-col lg:flex-row gap-20">
        <div class="flex-1 flex flex-col gap-8">
          <div class="flex flex-col gap-6">
            <h1 class="text-3xl lg:text-5xl font-bold text-surface-900 dark:text-surface-0 leading-tight">Cursus metus aliquam</h1>
            <p class="text-xl text-surface-500 dark:text-surface-400 leading-normal">
              Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Viverra vitae congue eu consequat ac felis. Magna eget est lorem ipsum dolor sit.
            </p>
          </div>
          <button pButton severity="contrast" class="w-fit shrink-0" [rounded]="true">
            <span pButtonLabel> Learn More </span>
          </button>
        </div>

        <div class="flex-1 flex flex-col gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="bg-surface-0 dark:bg-surface-900 rounded-xl shadow-sm p-8 flex flex-col gap-6">
              <div class="flex gap-4">
                <img [src]="testimonial.image" class="w-16 h-16 rounded-full object-cover shrink-0" [alt]="testimonial.name" />
                <p class="text-lg text-surface-700 dark:text-surface-0/70 leading-normal">{{ testimonial.comment }}</p>
              </div>
              <div class="flex flex-col items-end gap-2">
                <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.company }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  testimonials = [
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png',
      comment: "I will recommend you to my colleagues. Thanks guys, keep up the good work! Blocks is awesome! It's really wonderful.",
      name: 'Darlene Robertson',
      company: "L'Oréal",
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
      comment: "We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.",
      name: 'Ronald Richards',
      company: 'Louis Vuitton',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
      comment: "Really good. If you want real marketing that works and effective implementation - Blocks's got you covered.",
      name: 'Jenny Wilson',
      company: 'General Electric',
    },
  ];
}
