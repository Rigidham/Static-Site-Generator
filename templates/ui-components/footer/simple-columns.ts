import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '__SELECTOR__',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-surface-900 text-surface-100 py-16">
      <div class="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-4">
        <div>
          <p class="font-semibold text-lg">Acme Co</p>
          <p class="text-sm text-surface-200 mt-3">Shipping quality experiences since 2010.</p>
        </div>
        <div>
          <p class="font-semibold mb-3">Company</p>
          <ul class="space-y-2 text-sm text-surface-200">
            <li><a href="#" class="hover:text-white transition">About</a></li>
            <li><a href="#" class="hover:text-white transition">Work</a></li>
            <li><a href="#" class="hover:text-white transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-3">Resources</p>
          <ul class="space-y-2 text-sm text-surface-200">
            <li><a href="#" class="hover:text-white transition">Guides</a></li>
            <li><a href="#" class="hover:text-white transition">Case studies</a></li>
            <li><a href="#" class="hover:text-white transition">Support</a></li>
          </ul>
        </div>
        <div>
          <p class="font-semibold mb-3">Get updates</p>
          <div class="flex flex-col gap-3">
            <input type="email" placeholder="Email" class="rounded-xl bg-surface-800 border border-surface-700 px-4 py-3" />
            <button class="rounded-xl bg-primary text-primary-contrast py-3 font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center text-xs text-surface-500">© {{ new Date().getFullYear() }} Acme Co. All rights reserved.</div>
    </footer>
  `,
})
export class __CLASS_NAME__ {}
