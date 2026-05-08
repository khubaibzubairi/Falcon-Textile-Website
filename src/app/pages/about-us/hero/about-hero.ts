import { Component, input } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  imports: [],
  templateUrl: './about-hero.html',
})
export class AboutHero {
  stats = input<{ value: string; label: string; sub: string }[]>([]);
}
