import { Component, input, output } from '@angular/core';
import { ViewMode } from '../products';

export interface Category {
  label: string;
  count: number;
}

@Component({
  selector: 'app-products-sidebar',
  imports: [],
  templateUrl: './products-sidebar.html',
  styleUrl: './products-sidebar.scss',
})
export class ProductsSidebar {
  categories = input<Category[]>([]);
  activeCategory = input<string>('All');
  viewMode = input<ViewMode>('grid');

  categoryChange = output<string>();
  viewChange = output<ViewMode>();
}
