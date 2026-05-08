import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterModule],
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  items = input<BreadcrumbItem[]>([]);
}
