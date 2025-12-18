import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-20 md:px-12 lg:px-20">
      <div class="flex lg:flex-row flex-col items-center gap-12">
        <div class="flex-1 flex flex-col gap-4 text-center lg:text-start">
          <div class="font-bold text-surface-900 dark:text-surface-0 text-4xl leading-tight">The companies you trust, trust us</div>
          <p class="text-surface-700 dark:text-surface-100 m-0 text-xl leading-normal max-w-xl">
            Millions of individuals, corporations, startups and institutes work with us.
          </p>
        </div>
        <div class="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 justify-between">
          <div class="flex-1 flex items-center justify-center gap-4 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" class="w-10 h-10 min-w-8">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.2217 0C9.41656 0 7.68544 0.71707 6.40905 1.99346L2.24348 6.159C0.967076 7.4354 0.25 9.16657 0.25 10.9717C0.25 12.9634 1.10555 14.7554 2.46921 16C1.10555 17.2446 0.25 19.0366 0.25 21.0283C0.25 22.8334 0.967075 24.5646 2.24348 25.841L6.40905 30.0066C7.68544 31.283 9.41656 32 11.2217 32C13.2134 32 15.0054 31.1445 16.25 29.7808C17.4946 31.1445 19.2866 32 21.2783 32C23.0834 32 24.8146 31.283 26.091 30.0066L30.2565 25.841C31.5329 24.5646 32.25 22.8334 32.25 21.0283C32.25 19.0366 31.3945 17.2446 30.0308 16C31.3945 14.7554 32.25 12.9634 32.25 10.9717C32.25 9.16657 31.5329 7.4354 30.2565 6.159L26.091 1.99346C24.8146 0.71707 23.0834 0 21.2783 0C19.2866 0 17.4946 0.85555 16.25 2.21921C15.0054 0.85555 13.2134 0 11.2217 0ZM20.6313 16.2157C20.7498 16.0971 20.7498 15.9028 20.6313 15.7843L18.3713 13.5244C17.1997 12.3528 15.3003 12.3528 14.1287 13.5244L11.8687 15.7843C11.7502 15.9028 11.7502 16.0971 11.8687 16.2157L14.1287 18.4756C15.3003 19.6472 17.1997 19.6472 18.3713 18.4756L20.6313 16.2157ZM18.9798 22.8955C18.3702 23.5051 18.0278 24.3318 18.0278 25.1939C18.0278 26.9891 19.4831 28.4445 21.2783 28.4445C22.1404 
