import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 p-8 lg:p-20">
      <div class="flex flex-col items-center gap-8">
        <div class="flex flex-col items-center gap-4">
          <span class="text-lg font-medium text-primary leading-tight">Exclusive Community</span>
          <h1 class="text-4xl font-medium text-surface-900 dark:text-surface-0 leading-tight text-center">Join tens of thousands of top-notch developers</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="bg-surface-0 dark:bg-surface-900 rounded-xl shadow-sm p-8 flex gap-6">
              <img [src]="testimonial.image" class="w-16 h-16 rounded-full object-cover shrink-0" [alt]="testimonial.name" />
              <div class="flex flex-col flex-1 gap-4">
                <p class="text-lg text-surface-700 dark:text-surface-0/70 leading-normal flex-1">{{ testimonial.comment }}</p>
                <div class="flex flex-col gap-1">
                  <h3 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{ testimonial.name }}</h3>
                  <p class="text-base text-surface-500 dark:text-surface-400 leading-tight">{{ testimonial.company }}</p>
                </div>
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
      comment: "No matter where you go, Blocks is the coolest, most happening thing around! We can't understand how we've been living without Blocks.",
      name: 'Jane Cooper',
      company: 'Meta',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png',
      comment: "I use Blocks often. We can't understand how we've been living without Blocks. Keep up the excellent work.",
      name: 'Jacob Jones',
      company: 'Louis Vuitton',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-2.png',
      comment: 'Just what I was looking for. I would like to personally thank you for your outstanding product.',
      name: 'Leslie Alexander',
      company: 'Starbucks',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-3.png',
      comment: "Really good. If you want real marketing that works and effective implementation - Blocks's got you covered.",
      name: 'Kristin Watson',
      company: 'General Electric',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-4.png',
      comment: "I will recommend you to my colleagues. Thanks guys, keep up the good work! Blocks is awesome! It's really wonderful.",
      name: 'Cody Fisher',
      company: 'The Walt Disney Company',
    },
    {
      image: 'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-5.png',
      comment: "We can't understand how we've been living without Blocks. Blocks impressed me on multiple levels. It's really wonderful.",
      name: 'Floyd Miles',
      company: "L'Oréal",
    },
  ];
}
