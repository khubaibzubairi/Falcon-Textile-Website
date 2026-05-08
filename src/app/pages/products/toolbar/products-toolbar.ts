import { Component, input, output } from '@angular/core';
import { ViewMode } from '../products';

@Component({
  selector: 'app-products-toolbar',
  imports: [],
  templateUrl: './products-toolbar.html',
  styleUrl: './products-toolbar.scss',
})
export class ProductsToolbar {
  filteredCount = input<number>(0);
  activeCategory = input<string>('All');
  viewMode = input<ViewMode>('grid');

  viewChange = output<ViewMode>();
}
