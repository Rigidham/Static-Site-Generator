import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col gap-4 mb-8">
          <span
            class="text-primary-700 dark:text-primary-200 bg-primary-100 dark:bg-primary-400/30 border border-primary-200 dark:border-primary-700 rounded-full py-2 px-4 text-sm font-medium leading-normal w-fit"
            >Long Read</span
          >
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-medium text-surface-900 dark:text-surface-0 leading-tight">In hendrerit gravida rutrum quisque</h1>
            <div class="flex flex-wrap items-center gap-4">
              <span class="text-lg text-surface-600 dark:text-surface-200 leading-tight">by Jenny Wilson</span>
              <div class="w-2 h-2 rounded-full bg-surface-300 dark:bg-surface-700"></div>
              <span class="text-lg text-surface-600 dark:text-surface-200 leading-tight">jennyw.com</span>
              <div class="w-2 h-2 rounded-full bg-surface-300 dark:bg-surface-700"></div>
              <span class="text-lg text-surface-600 dark:text-surface-200 leading-tight">16 mins</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-start items-start gap-8">
          <div class="w-full lg:flex-1 order-2 lg:order-1 flex flex-col gap-8">
            <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
              Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at elementum
              eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper. Vitae elementum curabitur vitae
              nunc sed. Ornare massa eget egestas purus viverra accumsan in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
            </p>

            <blockquote class="pl-8 text-xl text-surface-500 dark:text-surface-400 leading-normal">
              "Science is the most reliable guide for civilization, for life, for success in the world. Searching a guide other than the science is meaning carelessness, ignorance and heresy."
            </blockquote>

            <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
              Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverра tellus in hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque viverра mauris in aliquam sem fringilla. Laculis urna id volutpat
              lacus laoreet.
            </p>

            <ul class="text-base text-surface-700 dark:text-surface-300 leading-normal list-disc pl-5">
              <li>Nunc sed velit dignissim sodales ut.</li>
              <li>Lorem mollis aliquam ut porttitor.</li>
              <li>Urna nec tincidunt praesent semper feugiat nibh sed.</li>
            </ul>

            <h2 class="text-2xl font-normal text-surface-900 dark:text-surface-0 leading-tight">Massa vitae tortor condimentum lacinia</h2>

            <p class="text-base text-surface-700 dark:text-surface-300 leading-normal">
              Lacus viverра vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac tincidunt vitae semper quis lectus
              nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo.
            </p>
          </div>

          <div class="w-full lg:flex-1 order-1 lg:order-2 flex flex-col items-center gap-4">
            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/content/content-2.png" alt="Image" class="w-full rounded-lg" />
            <p class="text-sm text-surface-700 dark:text-surface-300 leading-tight text-center">Consequat nisl vel pretium lectus quam id leo in.</p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class __CLASS_NAME__ {}
