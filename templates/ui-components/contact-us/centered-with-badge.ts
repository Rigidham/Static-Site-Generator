import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TextareaModule, AvatarModule, AvatarGroupModule, DividerModule],
  template: `
    <div class="py-20 px-8 lg:px-20 bg-surface-0 dark:bg-surface-950">
      <div class="w-fit mx-auto flex items-center p-1 pr-2 rounded-full border border-surface-200 dark:border-surface-700">
        <p-avatargroup class="-space-x-2!">
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-1.png" shape="circle"></p-avatar>
          <p-avatar class="bg-sky-200!" shape="circle"></p-avatar>
          <p-avatar class="bg-orange-200!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-21.png" shape="circle"></p-avatar>
          <p-avatar class="bg-purple-200!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" shape="circle"></p-avatar>
          <p-avatar class="bg-purple-200!" shape="circle"></p-avatar>
          <p-avatar image="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-m-3.png" shape="circle"></p-avatar>
        </p-avatargroup>
        <p-divider layout="vertical" class="h-3! mx-2!"></p-divider>
        <span class="text-sm text-surface-500 leading-tight">Happy Customers</span>
      </div>
      <div class="flex flex-col items-center gap-6 mt-4">
        <h1 class="text-5xl md:text-7xl font-semibold text-surface-900 dark:text-surface-0 text-center max-w-md md:max-w-sm mx-auto tracking-tight leading-tight">Let's Make Your Dreams Come True</h1>
        <p class="text-xl text-surface-500 text-center max-w-xl mx-auto leading-normal">We are here to help you. Our expert teams are here to help you get one step closer to your dreams</p>
      </div>
      <form class="mt-12 max-w-sm mx-auto space-y-6">
        <input pInputText class="rounded-2xl! px-3! py-2! text-base! shadow-sm! border-surface-200! dark:border-surface-700!" fluid placeholder="First Name" />
        <input pInputText class="rounded-2xl! px-3! py-2! text-base! shadow-sm! border-surface-200! dark:border-surface-700!" fluid placeholder="Last Name" />
        <input pInputText class="rounded-2xl! px-3! py-2! text-base! shadow-sm! border-surface-200! dark:border-surface-700!" fluid placeholder="Email Address" />
        <input pInputText class="rounded-2xl! px-3! py-2! text-base! shadow-sm! border-surface-200! dark:border-surface-700!" fluid placeholder="Phone Number" />
        <textarea pInputTextarea class="rounded-2xl! px-3! py-2! text-base! shadow-sm! border-surface-200! dark:border-surface-700!" fluid placeholder="Message" rows="5" cols="30"></textarea>
        <button pButton type="submit" fluid class="rounded-3xl! px-3! py-2! text-base! font-medium! bg-primary! border-primary! hover:bg-primary-600! hover:border-primary-600!">
          <span pButtonLabel>Submit</span>
        </button>
      </form>
    </div>
  `,
})
export class __CLASS_NAME__ {}
