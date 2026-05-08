import { Component } from '@angular/core';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { AboutHero } from './hero/about-hero';
import { AboutNarrative } from './narrative/about-narrative';
import { AboutTimeline, Milestone } from './timeline/about-timeline';
import { AboutValues, Value } from './values/about-values';
import { AboutFounder } from './founder/about-founder';
import { AboutCta } from './cta/about-cta';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [Breadcrumb, AboutHero, AboutNarrative, AboutTimeline, AboutValues, AboutFounder, AboutCta],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  stats = [
    { value: '2018', label: 'Founded', sub: 'London, UK' },
    { value: '40+', label: 'Brand partners', sub: 'across 12 countries' },
    { value: '98%', label: 'On-time delivery', sub: 'across all orders' },
    { value: '100%', label: 'Audited supply', sub: 'chain partners' },
  ];

  milestones: Milestone[] = [
    {
      year: '2018',
      title: 'Founded in London',
      body: 'Sofia Laurent left a senior role at a Mayfair atelier to start MAISON with a single conviction — that the fashion industry needed less noise and more intention. The first collection was 12 pieces, produced in a rented studio in Bermondsey.',
    },
    {
      year: '2019',
      title: 'First Wholesale Partnership',
      body: 'MAISON secured its first wholesale account with a Parisian concept store. The relationship led to three further partnerships across Europe within the season and validated the B2B production model.',
    },
    {
      year: '2020',
      title: 'Production Studio Established',
      body: 'We opened our own production studio on Savile Row — a space that formalised our end-to-end service offering. Sampling, grading, and quality control all moved in-house.',
    },
    {
      year: '2022',
      title: 'Sustainability Charter',
      body: 'MAISON signed its Sustainability Charter, committing to deadstock-first fabric sourcing, carbon-neutral logistics, and a full living wage supply chain. All active partners were audited and recertified.',
    },
    {
      year: '2023',
      title: '40 Brand Partners',
      body: 'The network grew to 40 active brand partners across 12 countries. Our first private label commission launched under a major European retailer — a run of 2,000 units across four styles.',
    },
    {
      year: '2025',
      title: 'SS25 Collection',
      body: 'Our most ambitious seasonal collection to date — 24 styles, three fabric stories, and a campaign shot entirely on location in Lisbon. Available for wholesale and private label from Q1.',
    },
  ];

  values: Value[] = [
    {
      number: '01',
      title: 'Intention over trend',
      body: 'We do not design for seasons. We design for longevity. Every piece is considered against a simple question — will this still be relevant in ten years?',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    {
      number: '02',
      title: 'Craft as standard',
      body: 'Hand-finishing, considered construction, materials that earn their place. These are not premium add-ons — they are the baseline from which every MAISON piece begins.',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    },
    {
      number: '03',
      title: 'Transparency always',
      body: 'Every quote is itemised. Every production decision is communicated. We believe our partners deserve to understand exactly what they are paying for, and why.',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    },
    {
      number: '04',
      title: 'Relationships over transactions',
      body: "We work with fewer brands, more deeply. Our best partnerships span multiple seasons because we invest in understanding each brand's aesthetic, calendar, and customer.",
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    },
  ];
}
