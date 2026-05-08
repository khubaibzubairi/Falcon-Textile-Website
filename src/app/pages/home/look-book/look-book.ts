import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

export interface LookbookImage {
  id: number;
  src: string;
  thumb: string;
  alt: string;
  caption: string;
  season: string;
  span: 'tall' | 'wide' | 'normal'; // controls masonry cell size
}

@Component({
  selector: 'app-look-book',
  imports: [CommonModule],
  templateUrl: './look-book.html',
  styleUrl: './look-book.scss',
})
export class LookBook implements AfterViewInit {
  @ViewChild('strip') stripRef!: ElementRef<HTMLElement>;

  lightboxOpen = false;
  activeIndex = 0;

  // Drag-to-scroll
  private dragging = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    const el = this.stripRef?.nativeElement;
    if (!el) return;
    el.addEventListener('mousedown', (e: MouseEvent) => {
      this.dragging = true;
      this.startX = e.pageX - el.offsetLeft;
      this.scrollLeft = el.scrollLeft;
    });
    el.addEventListener('mouseleave', () => this.dragging = false);
    el.addEventListener('mouseup', () => this.dragging = false);
    el.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.dragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = this.scrollLeft - (x - this.startX) * 1.5;
    });
  }

  images: LookbookImage[] = [
    {
      id: 1,
      span: 'tall',
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=70',
      alt: 'SS25 — Tailored linen suit editorial',
      caption: 'Tailored Linen Suit',
      season: 'SS 2025',
    },
    {
      id: 2,
      span: 'normal',
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=70',
      alt: 'SS25 — Minimal shift dress',
      caption: 'Minimal Shift Dress',
      season: 'SS 2025',
    },
    {
      id: 3,
      span: 'normal',
      src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=70',
      alt: 'AW24 — Oversized cashmere coat',
      caption: 'Oversized Cashmere Coat',
      season: 'AW 2024',
    },
    {
      id: 4,
      span: 'wide',
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
      thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
      alt: 'AW24 — Campaign editorial wide shot',
      caption: 'Campaign Editorial',
      season: 'AW 2024',
    },
    {
      id: 5,
      span: 'normal',
      src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=70',
      alt: 'SS25 — Structured midi skirt',
      caption: 'Structured Midi Skirt',
      season: 'SS 2025',
    },
    {
      id: 6,
      span: 'normal',
      src: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=70',
      alt: 'SS25 — Fluid silk blouse',
      caption: 'Fluid Silk Blouse',
      season: 'SS 2025',
    },
    {
      id: 7,
      span: 'tall',
      src: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=70',
      alt: 'AW24 — Wide leg trouser editorial',
      caption: 'Wide Leg Trouser',
      season: 'AW 2024',
    },
    {
      id: 8,
      span: 'normal',
      src: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=85',
      thumb: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=70',
      alt: 'SS25 — Relaxed linen shirt',
      caption: 'Relaxed Linen Shirt',
      season: 'SS 2025',
    },
  ];

  get activeImage(): LookbookImage {
    return this.images[this.activeIndex];
  }

  openLightbox(index: number): void {
    this.activeIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  goTo(index: number): void {
    this.activeIndex = index;
  }

  scrollStrip(dir: 'prev' | 'next'): void {
    const el = this.stripRef?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
