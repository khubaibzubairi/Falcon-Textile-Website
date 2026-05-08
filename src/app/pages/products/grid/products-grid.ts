import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product, ViewMode } from '../products';

@Component({
  selector: 'app-products-grid',
  imports: [RouterModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {
  products = input<Product[]>([]);
  viewMode = input<ViewMode>('grid');

  mouseEnter = output<Product>();
  mouseLeave = output<Product>();
}
