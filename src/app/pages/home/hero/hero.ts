import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface HeroImage {
  src: string;
  alt: string;
  badge?: string;
  tall?: boolean;
}

interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  // ── Ticker ────────────────────────────────────────────────────────────────
  tickerItems: string[] = [
    'Free shipping over $200',
    'New arrivals weekly',
    'Sustainable materials',
    'Handcrafted in Europe',
    'Limited edition pieces',
    'Complimentary gift wrapping',
  ];

  // Duplicate 4× for seamless infinite loop
  get tickerLoop(): string[] {
    return [...this.tickerItems, ...this.tickerItems, ...this.tickerItems, ...this.tickerItems];
  }

  // ── Stats ─────────────────────────────────────────────────────────────────
  stats: StatItem[] = [
    { value: '240+', label: 'Pieces' },
    { value: '18', label: 'Collections' },
    { value: '12', label: 'Countries' },
  ];

  // ── Hero Images ───────────────────────────────────────────────────────────
  heroImages: HeroImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Editorial — long coat',
      badge: 'New Arrival',
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Editorial — tailored suit',
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1673757094096-be20fd9c8b30?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Editorial — minimal dress',
      badge: 'Bestseller',
    },
  ];
}
