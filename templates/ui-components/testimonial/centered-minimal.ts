import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 p-16 lg:p-48 space-y-14 lg:space-y-28">
      @for (item of testimonials; track item.user) {
        <div class="flex flex-col gap-8 max-w-5xl mx-auto">
          <p class="text-surface-950 dark:text-surface-0 text-3xl lg:text-4xl font-semibold">{{ item.comment }}</p>
          <span class="text-surface-400 dark:text-surface-500 text-xl lg:text-2xl font-medium">- {{ item.user }}</span>
        </div>
      }
    </div>
  `,
})
export class __CLASS_NAME__ {
  testimonials = [
    {
      comment: '"Aenean sed adipiscing diam donec adipiscing. In hendrerit gravida rutrum quisque non. Adipiscing commodo elit at imperdiet dui. Ac feugiat sed lectus vestibulum mattis ullamcorper."',
      user: 'Robert William',
    },
    {
      comment: '"Viverra sed non dolor suspendisse malesuada eget; pulvinar duis primis. Dictum sollicitudin ex vehicula vulputate congue est vitae."',
      user: 'Olivia Holt',
    },
    {
      comment:
        '"Venenatis sed egestas eu ultricies adipiscing. Et magna potenti convallis ultrices faucibus a torquent tempor. Pulvinar hac potenti, luctus libero est dictumst interdum. Vel nisi nascetur tortor ultrices efficitur consequat facilisi ultrices."',
      user: 'Bessie Cooper',
    },
    {
      comment: '"Urna laoreet ipsum enim mauris fames imperdiet. Molestie auctor praesent semper, vehicula dolor lectus penatibus."',
      user: 'Darlene Robertson',
    },
  ];
}
