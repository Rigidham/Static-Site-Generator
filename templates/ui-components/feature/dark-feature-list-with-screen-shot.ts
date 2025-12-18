import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-900 px-6 py-20 md:px-12 lg:px-20 gap-16 flex overflow-hidden flex-col xl:flex-row">
      <div class="flex-1">
        <h3 class="text-5xl font-bold text-surface-0 leading-tight">One Product, Many Solutions</h3>
        <p class="text-surface-500 text-xl leading-normal mt-4 mb-8">
          Lectus urna duis convallis convallis tellus id interdum velit laoreet. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Volutpat lacus laoreet non curabitur gravida arcu ac.
        </p>
        <div class="h-px w-full bg-surface-800 mb-8"></div>
        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-4">
            <span><i class="pi pi-desktop text-xl! leading-none! text-surface-0"></i></span>
            <div>
              <h5 class="text-surface-0 text-xl font-medium mb-2 leading-tight">Built for Developers</h5>
              <p class="text-surface-500 leading-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span><i class="pi pi-thumbs-up text-xl! leading-none! text-surface-0"></i></span>
            <div>
              <h5 class="text-surface-0 text-xl font-medium mb-2 leading-tight">Easy to Use</h5>
              <p class="text-surface-500 leading-normal">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <span><i class="pi pi-lock text-xl! leading-none! text-surface-0"></i></span>
            <div>
              <h5 class="text-surface-0 text-xl font-medium mb-2 leading-tight">End-to-End Encryption</h5>
              <p class="text-surface-500 leading-normal">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:flex-1 relative xl:h-auto min-h-80 xl:min-h-full w-full xl:w-auto">
        <img
          class="absolute top-0 left-0 w-[calc(100%+5rem)] xl:w-200 max-w-none h-auto border border-surface-800 rounded-2xl"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/feature/block-15-image.png"
          alt="Feature screenshot"
        />
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
