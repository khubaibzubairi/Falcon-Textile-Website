import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private defaultConfig: SeoConfig = {
    title: 'Falcon Textile Garments - Premium Wholesale Fashion Manufacturing',
    description:
      'Falcon Textile Garments offers premium wholesale fashion manufacturing, custom orders, and private label production. Quality craftsmanship with fast turnaround times.',
    keywords:
      'wholesale fashion, custom clothing manufacturing, private label, fashion production, premium garments, wholesale clothing',
    image: 'https://falcontextilegarments.com/assets/images/og-image.jpg',
    url: 'https://falcontextilegarments.com',
    type: 'website',
    author: 'Falcon Textile Garments',
  };

  updateMetaTags(config: SeoConfig): void {
    const seoConfig = { ...this.defaultConfig, ...config };

    // Set page title
    if (seoConfig.title) {
      this.titleService.setTitle(seoConfig.title);
    }

    // Basic meta tags
    this.updateTag('description', seoConfig.description);
    this.updateTag('keywords', seoConfig.keywords);
    this.updateTag('author', seoConfig.author);

    // Open Graph tags
    this.updateTag('og:title', seoConfig.title, 'property');
    this.updateTag('og:description', seoConfig.description, 'property');
    this.updateTag('og:image', seoConfig.image, 'property');
    this.updateTag('og:url', seoConfig.url, 'property');
    this.updateTag('og:type', seoConfig.type, 'property');
    this.updateTag('og:site_name', 'Falcon Textile Garments', 'property');

    // Twitter Card tags
    this.updateTag('twitter:card', 'summary_large_image');
    this.updateTag('twitter:title', seoConfig.title);
    this.updateTag('twitter:description', seoConfig.description);
    this.updateTag('twitter:image', seoConfig.image);

    // Article specific tags
    if (seoConfig.publishedTime) {
      this.updateTag('article:published_time', seoConfig.publishedTime, 'property');
    }
    if (seoConfig.modifiedTime) {
      this.updateTag('article:modified_time', seoConfig.modifiedTime, 'property');
    }

    // Canonical URL
    this.updateCanonicalUrl(seoConfig.url || this.defaultConfig.url!);
  }

  private updateTag(name: string, content?: string, attribute: string = 'name'): void {
    if (!content) return;

    const selector = `${attribute}="${name}"`;
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ [attribute]: name, content });
    } else {
      this.meta.addTag({ [attribute]: name, content });
    }
  }

  private updateCanonicalUrl(url: string): void {
    if (!this.isBrowser) return;
    
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  addStructuredData(data: any): void {
    if (!this.isBrowser) return;
    
    let script: HTMLScriptElement | null = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }

  removeStructuredData(): void {
    if (!this.isBrowser) return;
    
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      script.remove();
    }
  }
}
