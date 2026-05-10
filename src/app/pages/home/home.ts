import { Component, OnInit, inject } from '@angular/core';
import { Hero } from './hero/hero';
import { BrandStory } from './brand-story/brand-story';
import { FeaturedWork } from './featured-work/featured-work';
import { WhyUs } from './why-us/why-us';
import { LookBook } from './look-book/look-book';
import { Testimonials } from './testimonials/testimonials';
import { SeoService } from '../../shared/seo.service';

@Component({
  selector: 'app-home',
  imports: [Hero, BrandStory, FeaturedWork, WhyUs, LookBook, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Falcon Textile Garments - Premium Wholesale Fashion Manufacturing',
      description:
        'Falcon Textile Garments offers premium wholesale fashion manufacturing, custom orders, and private label production. Quality craftsmanship with fast turnaround times.',
      keywords:
        'wholesale fashion, custom clothing manufacturing, private label, fashion production, premium garments, wholesale clothing',
      url: 'https://falcontextilegarments.com/',
      type: 'website',
    });
  }
}
