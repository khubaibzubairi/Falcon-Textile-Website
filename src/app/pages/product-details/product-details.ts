import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { GalleriaModule } from 'primeng/galleria';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { ProductGallery } from './gallery/product-gallery';
import { ProductReviews } from './reviews/product-reviews';
import { ProductRelated } from './related/product-related';
import { AllProducts, Product } from '../../data/products.data';
import { Title } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { SeoService } from '../../shared/seo.service';

export interface GalleriaImage {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Review {
  id: number;
  name: string;
  company: string;
  role: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export interface RelatedProduct {
  id: number;
  name: string;
  category: string;
  primaryImage: string;
  hoverImage: string;
  isHovered: boolean;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterModule,
    GalleriaModule,
    Breadcrumb,
    ProductGallery,
    ProductReviews,
    ProductRelated,
  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private title = inject(Title);
  private seo = inject(SeoService);

  currentProduct: Product | null = null;
  galleriaImages: GalleriaImage[] = [];
  product: any = {};
  specs: ProductSpec[] = [];
  relatedProducts: RelatedProduct[] = [];
  $destroy = new Subject();

  galleriaResponsiveOptions = [
    { breakpoint: '1024px', numVisible: 4 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '480px', numVisible: 2 },
  ];

  // Mock reviews (static for now)
  reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      verified: true,
      name: 'Isabelle Fontaine',
      company: 'Fontaine & Co.',
      role: 'Creative Director',
      date: 'March 2025',
      title: 'Exactly what a hero outerwear piece should be',
      body: 'We ordered 120 units across three colourways for our AW24 drop. Every single piece arrived to spec — the cashmere weight is exceptional and the hand-finishing is something our customers immediately noticed. Reordering for SS25.',
    },
    {
      id: 2,
      rating: 5,
      verified: true,
      name: 'Marcus Webb',
      company: 'Webb Retail Group',
      role: 'Head of Buying',
      date: 'January 2025',
      title: 'Best performing coat in our AW range',
      body: "Sold out in 3 weeks across all five of our locations. The quality-to-price ratio for wholesale is unlike anything else we've stocked. Lead times were honoured exactly as quoted — which, in this industry, is worth more than it sounds.",
    },
    {
      id: 3,
      rating: 4,
      verified: true,
      name: 'Priya Nair',
      company: 'Studio Nair',
      role: 'Founder & Designer',
      date: 'November 2024',
      title: 'Superb fabric, minor sampling note',
      body: "The cashmere is everything — genuinely one of the best handles I've worked with at this price point. We requested a slightly longer hem on our custom run and MAISON accommodated without fuss. One star off only because the first sample had a button placement we needed to adjust — resolved quickly.",
    },
    {
      id: 4,
      rating: 5,
      verified: false,
      name: 'Thomas Brauer',
      company: 'Brauer Berlin',
      role: 'Co-founder',
      date: 'October 2024',
      title: 'A coat our customers come back for',
      body: 'Second season stocking this piece. Our Berlin customers are discerning — they know fabric, they know cut. The Atelier Coat passes both tests without effort. Already confirmed our AW25 order.',
    },
  ];

  get averageRating(): number {
    const sum = this.reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.round((sum / this.reviews.length) * 10) / 10;
  }

  get ratingBreakdown(): { stars: number; count: number; pct: number }[] {
    return [5, 4, 3, 2, 1].map((stars) => {
      const count = this.reviews.filter((r) => r.rating === stars).length;
      return { stars, count, pct: Math.round((count / this.reviews.length) * 100) };
    });
  }

  starsArray(n: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.$destroy)).subscribe((params) => {
      const productId = +params['id'];
      this.loadProduct(productId);
    });
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

  private loadProduct(id: number): void {
    this.currentProduct = AllProducts.find((p) => p.id === id) || null;

    if (!this.currentProduct) {
      this.currentProduct = AllProducts[0];
    }

    this.title.setTitle(`${this.currentProduct.name} - Falcon Textile Garments`);

    // SEO Meta Tags
    this.seo.updateMetaTags({
      title: `${this.currentProduct.name} - Falcon Textile Garments`,
      description: this.currentProduct.description || `${this.currentProduct.name} - Premium ${this.currentProduct.category} wholesale manufacturing`,
      keywords: `${this.currentProduct.name}, ${this.currentProduct.category}, wholesale ${this.currentProduct.subCategory}, custom manufacturing`,
      image: this.currentProduct.primaryImage,
      url: `https://falcontextilegarments.com/product-details/${this.currentProduct.id}`,
      type: 'product',
    });

    // Structured Data - Product
    this.seo.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.currentProduct.name,
      description: this.currentProduct.description,
      image: this.currentProduct.primaryImage,
      brand: {
        '@type': 'Brand',
        name: 'Falcon Textile Garments',
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: this.averageRating,
        reviewCount: this.reviews.length,
      },
    });

    // Map product data to component properties
    this.product = {
      name: this.currentProduct.name,
      category: this.currentProduct.category,
      subCategory: this.currentProduct.subCategory || '',
      season: this.currentProduct.season || 'N/A',
      tag: this.currentProduct.tag,
      description: this.currentProduct.description || 'No description available.',
      moq: this.currentProduct.moq || 'Contact us',
      leadTime: this.currentProduct.leadTime || 'Contact us',
      fabricOrigin: this.currentProduct.fabricOrigin || 'N/A',
      construction: this.currentProduct.construction || 'N/A',
    };

    this.specs = this.currentProduct.specs || [];

    // Gallery images
    this.galleriaImages = this.currentProduct.galleryImages || [
      {
        itemImageSrc: this.currentProduct.primaryImage,
        thumbnailImageSrc: this.currentProduct.primaryImage,
        alt: this.currentProduct.name,
      },
      {
        itemImageSrc: this.currentProduct.hoverImage,
        thumbnailImageSrc: this.currentProduct.hoverImage,
        alt: `${this.currentProduct.name} - alternate view`,
      },
    ];

    // Related products (same category, exclude current)
    this.relatedProducts = AllProducts.filter(
      (p) => p.category === this.currentProduct!.category && p.id !== this.currentProduct!.id,
    )
      .slice(0, 4)
      .map((p) => ({
        id: p.id,
        name: p.name,
        category: p.category,
        primaryImage: p.primaryImage,
        hoverImage: p.hoverImage,
        isHovered: false,
      }));
  }

  onMouseEnter(p: RelatedProduct): void {
    p.isHovered = true;
  }

  onMouseLeave(p: RelatedProduct): void {
    p.isHovered = false;
  }
}
