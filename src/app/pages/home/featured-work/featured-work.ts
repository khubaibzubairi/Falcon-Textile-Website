import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  primaryImage: string;
  hoverImage: string;
  tag?: string; // 'New', 'Bestseller', 'Limited' etc.
  isHovered: boolean;
}

@Component({
  selector: 'app-featured-work',
  imports: [],
  templateUrl: './featured-work.html',
  styleUrl: './featured-work.scss',
})
export class FeaturedWork {
  products: Product[] = [
    {
      id: 1,
      name: 'Atelier Coat',
      category: 'Outerwear',
      description: 'Double-faced cashmere, minimal lapel, single button closure.',
      primaryImage: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80',
      tag: 'New',
      isHovered: false,
    },
    {
      id: 2,
      name: 'Fluid Silk Shirt',
      category: 'Tops',
      description: 'Deadstock silk charmeuse, oversized cut, raw hem finish.',
      primaryImage: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
      tag: 'Bestseller',
      isHovered: false,
    },
    {
      id: 3,
      name: 'Tailored Trouser',
      category: 'Bottoms',
      description: 'Italian wool blend, wide leg, invisible side zip, extra comfortable.',
      primaryImage: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80',
      isHovered: false,
    },
    {
      id: 4,
      name: 'Minimal Shift Dress',
      category: 'Dresses',
      description: 'Organic linen, A-line silhouette, hand-finished seams.',
      primaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
      hoverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
      tag: 'Limited',
      isHovered: false,
    },
  ];

  onMouseEnter(product: Product): void {
    product.isHovered = true;
  }

  onMouseLeave(product: Product): void {
    product.isHovered = false;
  }
}
