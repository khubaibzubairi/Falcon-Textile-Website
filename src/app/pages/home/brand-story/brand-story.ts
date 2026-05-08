import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pillar {
  number: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-brand-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-story.html',
  styleUrl: './brand-story.scss',
})
export class BrandStory {
  foundedYear = 2018;

  pillars: Pillar[] = [
    {
      number: '01',
      title: 'Craftsmanship',
      body: 'Every piece is constructed with obsessive attention to detail — from pattern cutting to final stitch. We work only with artisans who share our uncompromising standards.',
    },
    {
      number: '02',
      title: 'Considered Materials',
      body: 'We source fabrics that earn their place — deadstock silks, organic linens, Italian wools. Materials chosen for longevity, not trend cycles.',
    },
    {
      number: '03',
      title: 'Timeless Vision',
      body: 'We design for a wardrobe that outlasts seasons. No fast fashion, no disposable collections — only pieces worth keeping for a decade.',
    },
  ];
}
