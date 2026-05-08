import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { GalleriaImage, ProductSpec, Review } from '../product-details';

@Component({
  selector: 'app-product-gallery',
  imports: [RouterModule, GalleriaModule],
  templateUrl: './product-gallery.html',
})
export class ProductGallery {
  images = input<GalleriaImage[]>([]);
  product = input.required<{
    name: string;
    category: string;
    subCategory: string;
    season: string;
    tag?: string;
    description: string;
    moq: string;
    leadTime: string;
    fabricOrigin: string;
    construction: string;
  }>();
  specs = input<ProductSpec[]>([]);
  reviews = input<Review[]>([]);
  averageRating = input<number>(0);

  galleriaResponsiveOptions = [
    { breakpoint: '1024px', numVisible: 4 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '480px', numVisible: 2 },
  ];

  openAccordion = signal<string | null>('description');

  toggleAccordion(key: string): void {
    this.openAccordion.set(this.openAccordion() === key ? null : key);
  }

  isOpen(key: string): boolean {
    return this.openAccordion() === key;
  }

  starsArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
