import { Component, input } from '@angular/core';

export interface Milestone {
  year: string;
  title: string;
  body: string;
}

@Component({
  selector: 'app-about-timeline',
  imports: [],
  templateUrl: './about-timeline.html',
})
export class AboutTimeline {
  milestones = input<Milestone[]>([]);
}
