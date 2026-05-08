import { Component, input } from '@angular/core';

export interface Value {
  number: string;
  title: string;
  body: string;
  icon: string;
}

@Component({
  selector: 'app-about-values',
  imports: [],
  templateUrl: './about-values.html',
})
export class AboutValues {
  values = input<Value[]>([]);
}
