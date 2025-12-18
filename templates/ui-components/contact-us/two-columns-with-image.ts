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
  message: string;
}

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-900 w-full min-h-full">
      <div class="flex justify-start items-stretch w-full min-h-full flex-col lg:flex-row">
        <div class="flex-1 relative w-full min-h-80 lg:min-h-full order-2 lg:order-1">
          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/contact/map-4.jpg" alt="Contact" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 p-20 bg-linear-to-b from-white/0 to-white dark:from-surface-900/0 dark:to-surface-900 flex flex-col justify-end items-start gap-4">
            <div class="inline-flex justify-center items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.9717 0C9.16656 0 7.43544 0.71707 6.15905 1.99346L1.99348 6.159C0.717076 7.4354 0 9.16657 0 10.9717C0 12.9634 0.855552 14.7554 2.21921 16C0.855552 17.2446 0 19.0366 0 21.0283C0 22.8334 0.717075 24.5646 1.99348 25.841L6.15905 30.0066C7.43544 31.283 9.16656 32 10.9717 32C12.9634 32 14.7554 31.1445 16 29.7808C17.2446 31.1445 19.0366 32 21.0283 32C22.8334 32 24.5646 31.283 25.841 30.0066L30.0065 25.841C31.2829 24.5646 32 22.8334 32 21.0283C32 19.0366 31.1445 17.2446 29.7808 16C31.1445 14.7554 32 12.9634 32 10.9717C32 9.16657 31.2829 7.4354 30.0065 6.159L25.841 1.99346C24.5646 0.71707 22.8334 0 21.0283 0C19.0366 0 17.2446 0.85555 16 2.21921C14.7554 0.85555 12.9634 0 10.9717 0ZM20.3813 16.2157C20.4998 16.0971 20.4998 15.9028 20.3813 15.7843L18.1213 13.5244C16.9497 12.3528 15.0503 12.3528 13.8787 13.5244L11.6187 15.7843C11.5002 15.9028 11.5002 16.0971 11.6187 16.2157L13.8787 18.4756C15.0503 19.6472 16.9497 19.6472 18.1213 18.4756L20.3813 16.2157ZM18.7298 22.8955C18.1202 23.5051 17.7778 24.3318 17.7778 25.1939C17.7778 26.9891 19.2331 28.4445 21.0283 28.4445C21.8904 28.4445 22.7172 28.102 23.3268 27.4924L27.4924 23.3268C28.102 22.7172 28.4445 21.8904 28.4445 21.0283C28.4445 19.2331 26.9891 17.7778 25.1939 17.7778C24.3318 17.7778 23.505 18.1202 22.8954 18.7298L18.7298 22.8955ZM14.2222 25.1939C14.2222 24.3318 13.8798 23.5051 13.2702 22.8955L9.10456 18.7298C8.49496 18.1202 7.66819 17.7778 6.8061 17.7778C5.01087 17.7778 3.55555 19.2331 3.55555 21.0283C3.55555 21.8904 3.89801 22.7172 4.5076 23.3268L8.6732 27.4924C9.2828 28.102 10.1096 28.4445 10.9717 28.4445C12.7669 28.4445 14.2222 26.9891 14.2222 25.1939ZM14.2222 6.8061C14.2222 7.66817 13.8798 8.49493 13.2702 9.1045L9.10456 13.2702C8.49496 13.8798 7.66819 14.2222 6.8061 14.2222C5.01087 14.2222 3.55555 12.7669 3.55555 10.9717C3.55555 10.1096 3.89801 9.28281 4.5076 8.67322L8.6732 4.50762C9.2828 3.89802 10.1096 3.55556 10.9717 3.55556C12.7669 3.55556 14.2222 5.01087 14.2222 6.8061ZM22.8954 13.2702L18.7298 9.10451C18.1202 8.49493 17.7778 7.66817 17.7778 6.8061C17.7778 5.01087 19.2331 3.55556 21.0283 3.55556C21.8904 3.55556 22.7172 3.89802 23.3268 4.50762L27.4924 8.67323C28.102 9.28281 28.4445 10.1096 28.4445 10.9717C28.4445 12.7669 26.9891 14.2222 25.1939 14.2222C24.3318 14.2222 23.505 13.8798 22.8954 13.2702Z"
                  fill="#18181B"
                  class="dark:fill-surface-0"
                />
              </svg>
              <div class="text-surface-900 dark:text-surface-0 text-lg font-semibold leading-normal">Mistranet</div>
            </div>
            <div class="text-surface-600 dark:text-surface-400 text-base leading-normal">Innovation meets creativity.</div>
            <div class="inline-flex justify-start items-start gap-2">
              <div class="p-2 rounded-md border border-surface-200 dark:border-surface-700 cursor-pointer">
                <div class="w-6 h-6 relative">
                  <i class="pi pi-twitter absolute left-1 top-1 text-surface-900 dark:text-surface-0 text-base! leading-none!"></i>
                </div>
              </div>
              <div class="p-2 rounded-md border border-surface-200 dark:border-surface-700 cursor-pointer">
                <div class="w-6 h-6 relative">
                  <i class="pi pi-linkedin absolute left-1 top-1 text-surface-900 dark:text-surface-0 text-base! leading-none!"></i>
                </div>
              </div>
              <div class="p-2 rounded-md border border-surface-200 dark:border-surface-700 cursor-pointer">
                <div class="w-6 h-6 relative">
                  <i class="pi pi-instagram absolute left-1 top-1 text-surface-900 dark:text-surface-0 text-base! leading-none!"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 p-12 lg:p-20 flex flex-col justify-start items-start gap-8 order-1 lg:order-2">
          <div class="w-full flex flex-col justify-start items-start gap-4">
            <div class="w-full text-surface-900 dark:text-surface-0 text-3xl font-semibold leading-tight">Contact Us</div>
            <div class="w-full text-surface-700 dark:text-surface-400 text-base leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Venenatis urna cursus eget nunc scelerisque viverra.
            </div>
          </div>
          <div class="flex flex-col justify-center items-start gap-6 w-full">
            <div class="w-full flex justify-start items-start gap-6">
              <div class="flex-1">
                <input pInputText [(ngModel)]="contact.first_name" placeholder="First Name" class="w-full" />
              </div>
              <div class="flex-1">
                <input pInputText [(ngModel)]="contact.last_name" placeholder="Last Name" class="w-full" />
              </div>
            </div>
            <div class="w-full">
              <input pInputText [(ngModel)]="contact.email" placeholder="Email" class="w-full" />
            </div>
            <div class="w-full">
              <textarea pInputTextarea [(ngModel)]="contact.message" placeholder="Message" rows="5" class="w-full"></textarea>
            </div>
            <button pButton>
              <span pButtonLabel>Submit</span>
            </button>
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
    message: '',
  };
}
