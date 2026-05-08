import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { BrandStory } from './brand-story/brand-story';
import { FeaturedWork } from './featured-work/featured-work';
import { WhyUs } from './why-us/why-us';
import { LookBook } from './look-book/look-book';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero, BrandStory, FeaturedWork, WhyUs, LookBook, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
