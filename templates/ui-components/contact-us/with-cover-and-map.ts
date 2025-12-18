import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

interface Contact {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  message: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950">
      <div class="flex flex-col items-center gap-16 pb-20">
        <div class="w-full relative h-[280px] overflow-hidden">
          <div
            class="absolute inset-0 bg-cover! bg-center! bg-no-repeat!"
            style="background-image: url(https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/contactbg.png)"
          ></div>
          <div class="absolute inset-0 bg-black/40"></div>
          <div class="relative flex justify-center items-center h-full">
            <div class="flex flex-col items-center gap-4 px-6">
              <h2 class="text-4xl leading-tight font-semibold text-white">Contact Us</h2>
              <p class="text-md leading-tight text-white/70 text-center max-w-md">It's one of the most user-friendly and aesthetic UI kits I've used recently.</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-12 md:gap-16 px-8 md:px-12 lg:px-20">
          <div class="w-full shadow-inner rounded-md border border-surface-200 dark:border-surface-700 overflow-hidden">
            <img class="w-full h-full object-cover" src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-2.jpg" alt="Map" />
          </div>

          <div class="w-full md:p-7 rounded-2xl">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <input pInputText type="text" placeholder="First Name" [(ngModel)]="contact.first_name" class="w-full!" />
                  <input pInputText type="text" placeholder="Last Name" [(ngModel)]="contact.last_name" class="w-full!" />
                </div>
                <input pInputText type="text" placeholder="Company" [(ngModel)]="contact.company" class="w-full!" />
                <input pInputText type="text" placeholder="Email address" [(ngModel)]="contact.email" class="w-full!" />
                <textarea pInputTextarea [(ngModel)]="contact.message" placeholder="Message" rows="8" class="w-full!"></textarea>
                <button pButton label="Send Message" class="w-full!">
                  <span pButtonLabel>Send Message</span>
                </button>
              </div>
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
    email: '',
    company: '',
    message: '',
  };
}
