import { Component } from '@angular/core';

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        'MAISON redefined what we expected from a production partner. Every sample arrived exactly as briefed — on time, on spec, and with a level of finish our customers immediately noticed. We have not worked with anyone else since.',
      name: 'Isabelle Fontaine',
      company: 'Fontaine & Co.',
      role: 'Creative Director',
    },
    {
      id: 2,
      quote:
        'What sets MAISON apart is the communication. You always know where your order is, what decisions have been made, and why. In an industry full of black boxes, that transparency is genuinely rare.',
      name: 'Marcus Webb',
      company: 'Webb Retail Group',
      role: 'Head of Buying',
    },
    {
      id: 3,
      quote:
        'We came to MAISON with a complex brief — deadstock fabrics, a tight window, and a custom grading requirement. They handled every part without drama. The end result was the strongest collection we have ever launched.',
      name: 'Priya Nair',
      company: 'Studio Nair',
      role: 'Founder & Designer',
    },
  ];
}
