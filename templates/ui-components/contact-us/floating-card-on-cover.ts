import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

interface Contact {
  first_name: string;
  last_name: string;
  company: string;
  email: string;
  message: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule],
  template: `
    <div class="relative bg-surface-0 dark:bg-surface-950 min-h-280">
      <div class="relative h-152 w-full">
        <div class="absolute inset-0 bg-black/40 dark:bg-black/60 z-10"></div>
        <img class="w-full h-full object-cover" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/contact-7-img.jpg" alt="Cover" />
      </div>

      <div class="absolute inset-0 flex flex-col items-center justify-start px-6 lg:px-8 z-30">
        <div class="flex flex-col items-center text-center mt-20 lg:mt-40">
          <h2 class="text-4xl lg:text-5xl font-semibold text-surface-0 leading-tight">Contact Us</h2>
          <p class="mt-4 text-lg lg:text-xl text-surface-0/80 max-w-xl leading-normal">Diam quis enim lobortis scelerisque fermentum dui faucibus. Adipiscing bibendum est ultricies integer.</p>
        </div>

        <div class="w-full lg:max-w-3xl mt-10 lg:mt-16 bg-surface-0 dark:bg-surface-900 rounded-2xl shadow-xl">
          <div class="p-6 lg:p-8">
            <div class="flex flex-col gap-6">
              <div class="flex flex-col md:flex-row gap-6">
                <input pInputText type="text" placeholder="First Name" [(ngModel)]="contact.first_name" class="w-full!" />
                <input pInputText type="text" placeholder="Last Name" [(ngModel)]="contact.last_name" class="w-full!" />
              </div>
              <input pInputText type="text" placeholder="Company" [(ngModel)]="contact.company" class="w-full!" />
              <input pInputText type="text" placeholder="Email Address" [(ngModel)]="contact.email" class="w-full!" />
              <textarea pInputTextarea rows="7" placeholder="Message" [(ngModel)]="contact.message" class="w-full!"></textarea>
              <button pButton class="w-full!">
                <span pButtonLabel>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  contact: Contact = {
    first_name: '',
    last_name: '',
    company: '',
    email: '',
    message: '',
  };
}
