import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex lg:flex-row flex-col-reverse gap-12">
        <div class="w-full flex-1 flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-surface-800 dark:text-surface-100 font-medium">Name</label>
            <input pInputText id="name" [(ngModel)]="contact.name" name="name" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="email1" class="text-surface-800 dark:text-surface-100 font-medium">Email</label>
            <input pInputText id="email1" [(ngModel)]="contact.email" name="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="company" class="text-surface-800 dark:text-surface-100 font-medium">Company</label>
            <input pInputText id="company" [(ngModel)]="contact.company" name="company" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="message" class="text-surface-800 dark:text-surface-100 font-medium">Message</label>
            <textarea pInputTextarea rows="5" cols="30" [(ngModel)]="contact.message" name="message"></textarea>
          </div>
          <button pButton type="button" icon="pi pi-send" class="w-fit">
            <span pButtonLabel>Send Message</span>
          </button>
        </div>
        <div class="overflow-hidden relative w-full flex-1 flex flex-col gap-12">
          <div class="flex flex-col gap-4">
            <div class="text-surface-900 dark:text-surface-0 text-4xl font-medium">Contact Us</div>
            <div class="text-surface-700 dark:text-surface-0/70 leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>

          <a class="inline-flex items-center text-primary font-bold no-underline cursor-pointer gap-2">
            <span>View Address on Google Maps</span>
            <i class="pi pi-arrow-right"></i>
          </a>
          <ul class="list-none p-0 m-0 text-surface-700 dark:text-surface-0/70">
            <li class="flex items-center mb-4">
              <i class="pi pi-phone text-lg! leading-none! mr-4"></i>
              <span>+123456789</span>
            </li>
            <li class="flex items-center mb-4">
              <i class="pi pi-twitter text-lg! leading-none! mr-4"></i>
              <span>@primevue</span>
            </li>
            <li class="flex items-center">
              <i class="pi pi-inbox text-lg! leading-none! mr-4"></i>
              <span>contact@primetek.com.tr</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {
  contact: ContactForm = {
    name: '',
    email: '',
    company: '',
    message: '',
  };
}
