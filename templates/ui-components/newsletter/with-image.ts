import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  template: `
    <section class="flex flex-col lg:flex-row justify-between overflow-hidden gap-8 bg-surface-0 dark:bg-surface-950 py-8 px-12 lg:px-0">
      <div class="flex flex-col gap-8 pl-0 md:pl-12 lg:pl-20 py-12 max-w-2xl w-full lg:min-w-152">
        <h2 class="m-0 font-bold text-surface-900 dark:text-surface-0 text-4xl leading-tight max-w-md">Enhance Your User Experience</h2>
        <article class="flex flex-col gap-4">
          <p class="flex items-center gap-2 text-lg text-surface-700 dark:text-surface-100 mb-0 mt-0">
            <i class="pi pi-check-circle text-primary text-xl! leading-none!"></i>Fully responsive sections.
          </p>
          <p class="flex items-center gap-2 text-lg text-surface-700 dark:text-surface-100 mb-0 mt-0">
            <i class="pi pi-check-circle text-primary text-xl! leading-none!"></i>Clean code blocks.
          </p>
          <p class="flex items-center gap-2 text-lg text-surface-700 dark:text-surface-100 mb-0 mt-0">
            <i class="pi pi-check-circle text-primary text-xl! leading-none!"></i>Lifetime accessing to source code.
          </p>
        </article>
        <form class="flex flex-col gap-4 lg:gap-4" (submit)="$event.preventDefault()">
          <div class="flex items-center gap-2">
            <input pInputText [(ngModel)]="email" placeholder="Email" [fluid]="true" />
            <button pButton class="shrink-0">
              <span pButtonLabel>Subscribe</span>
            </button>
          </div>
          <span class="flex items-center gap-1">
            <span class="leading-normal text-surface-600 dark:text-surface-200">We ensure to protect your privacy.</span>
            <a class="cursor-pointer text-primary hover:underline leading-normal">Privacy Policy</a>
          </span>
        </form>
      </div>
      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/newsletter/aura.jpg"
        alt="Image"
        class="-mb-80 -mr-20 md:ml-12 lg:ml-0 border-[.5rem] border-r-0 border-b-0 border-surface-700 rounded-3xl rounded-bl-none rounded-tr-none"
      />
    </section>
  `,
})
export class __CLASS_NAME__ {
  email: string = '';
}
