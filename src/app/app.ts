import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { isPlatformBrowser } from '@angular/common';
import * as AOS from 'aos';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAOS();
    }
  }

  async initAOS() {
    const AOS = await import('aos'); // ✅ dynamic import (browser only)
    AOS.default.init({
      duration: 1000,
      once: true,
    });
  }
}
