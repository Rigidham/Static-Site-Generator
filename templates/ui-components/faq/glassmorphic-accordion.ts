import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="relative bg-surface-950 p-12 lg:p-20">
      <div class="absolute inset-0 z-0">
        <img
          class="object-cover w-full h-full relative z-0"
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/faq/glassmorphic-accordion-bg.jpg"
          alt="Glassmorphic Accordion Background Image"
        />
        <div class="absolute inset-0 z-10 bg-black/4 backdrop-blur-[30px]"></div>
      </div>

      <div class="relative z-20 flex flex-col items-center gap-14">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-3xl font-semibold text-white leading-tight">Frequently Asked Questions</h1>
          <p class="text-base text-white/70 leading-normal max-w-xl text-center">
            Excepteur sint occaecat cupidatat non proident, suntin culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="w-full max-w-[682px]">
          <p-accordion [multiple]="true" class="rounded-xl!" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
            @for (tab of faqs; track tab.title; let index = $index) {
              <p-accordion-panel
                [value]="index"
                class="border-b! border-white/10! last:border-none! overflow-hidden first:rounded-tl-xl first:rounded-tr-xl last:rounded-bl-xl last:rounded-br-xl"
              >
                <p-accordion-header class="bg-white/10! p-6! text-lg! font-medium! text-white! leading-tight!">
                  {{ tab.title }}
                </p-accordion-header>
                <p-accordion-content class="bg-black/10!">
                  <div class="p-6">
                    <p class="text-base text-white/80! leading-normal">{{ tab.description }}</p>
                  </div>
                </p-accordion-content>
              </p-accordion-panel>
            }
          </p-accordion>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .p-accordioncontent-content {
        background-color: transparent !important;
        padding-bottom: 0 !important;
        padding-inline: 0 !important;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class __CLASS_NAME__ {
  faqs = [
    {
      title: 'How do I become a webmaster?',
      description:
        'To become a webmaster, start by learning the basics of web development, including HTML, CSS, and JavaScript. Gain experience by building websites, understanding web hosting, and managing content management systems like WordPress.',
    },
    {
      title: 'What is web traffic?',
      description:
        'Web traffic refers to the number of users visiting a website. It can be tracked and analyzed using tools like Google Analytics to understand user behavior and improve website performance.',
    },
    {
      title: 'What is an easy way to make a website?',
      description:
        'An easy way to create a website is by using website builders like Wix or Squarespace, or content management systems like WordPress. These platforms offer user-friendly interfaces and pre-designed templates.',
    },
    {
      title: 'How do you know if something is true?',
      description:
        'To verify if something is true, cross-check the information with credible sources, consult expert opinions, and look for evidence or data that supports the claim.',
    },
  ];
}
