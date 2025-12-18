import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-surface-0 dark:bg-surface-950 p-8 md:p-12 lg:p-20">
      <div class="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div class="w-full md:w-5/12 rounded-4xl overflow-hidden md:min-w-104">
          <img class="w-full h-full object-cover rounded-4xl" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/testimonial/testimonials-1.jpg" alt="Testimonial" />
        </div>

        <div class="flex-1 flex flex-col gap-10">
          <div class="flex items-center gap-2">
            @for (n of [1, 2, 3, 4, 5]; track n) {
              <i class="pi pi-star-fill text-xl! leading-none! text-yellow-500"></i>
            }
          </div>

          <p class="text-xl leading-normal text-surface-600 dark:text-surface-400">
            "Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Amet cursus sit amet dictum sit amet justo donec. Neque convallis a cras semper auctor. Amet dictum sit amet justo. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Velit egestas dui id ornare arcu odio ut sem."
          </p>

          <div class="flex flex-col gap-2">
            <h5 class="text-lg font-semibold leading-tight text-surface-900 dark:text-surface-0">Olivia Holt</h5>
            <div class="text-base leading-tight text-surface-600 dark:text-surface-400">Product Manager</div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class __CLASS_NAME__ {}
