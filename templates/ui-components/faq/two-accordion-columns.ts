import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  template: `
    <div class="bg-surface-50 dark:bg-surface-950 p-12 lg:p-20">
      <div class="flex flex-col gap-14">
        <div class="flex flex-col gap-4">
          <h1 class="text-3xl font-semibold text-surface-900 dark:text-surface-0 leading-tight tracking-tight">Frequently Asked Questions</h1>
          <p class="text-lg text-surface-700 dark:text-surface-0/70 leading-normal max-w-2xl">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
            deserunt mollit anim id est laborum.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          @for (item of faqs; track item.title; let index = $index) {
            <div class="flex-1 flex flex-col gap-8">
              <h2 class="text-lg font-semibold text-surface-500 dark:text-surface-400 uppercase leading-tight">{{ item.title }}</h2>
              <div class="flex flex-col gap-4">
                <p-accordion [multiple]="true" class="space-y-4!" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                  @for (tab of item.qas; track tab.title; let tabIndex = $index) {
                    <p-accordion-panel [value]="tabIndex" class="border-none! rounded-xl! overflow-hidden! shadow-sm! bg-surface-0! dark:bg-surface-900!">
                      <p-accordion-header class="text-xl! font-medium! text-surface-900! dark:text-surface-0! leading-tight!">
                        {{ tab.title }}
                      </p-accordion-header>
                      <p-accordion-content>
                        <p class="px-4! pb-6! text-base text-surface-500 dark:text-surface-400 leading-normal">{{ tab.description }}</p>
                      </p-accordion-content>
                    </p-accordion-panel>
                  }
                </p-accordion>
              </div>
            </div>
          }
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
      title: 'Website',
      qas: [
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
      ],
    },
    {
      title: 'Design',
      qas: [
        {
          title: 'How do I become a designer?',
          description:
            'To become a designer, start by learning the fundamentals of design, such as color theory, typography, and composition. Use tools like Adobe Creative Suite or Figma and build a portfolio to showcase your skills.',
        },
        {
          title: 'What are the essential design tools?',
          description:
            'Essential design tools include Adobe Photoshop for image editing, Illustrator for vector graphics, Figma or Sketch for UI/UX design, and Canva for quick and easy design projects.',
        },
        {
          title: 'What is user experience (UX) design?',
          description:
            'UX design focuses on creating a seamless and enjoyable experience for users when interacting with a product, like a website or app. It involves research, wireframing, prototyping, and usability testing.',
        },
        {
          title: 'How do I improve my design skills?',
          description:
            'To improve design skills, practice regularly, study design principles, seek feedback from peers, and stay updated with industry trends. Joining online courses or attending workshops can also help.',
        },
      ],
    },
  ];
}
