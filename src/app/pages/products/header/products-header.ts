import { Component, input, signal } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-header',
  imports: [],
  templateUrl: './products-header.html',
  styleUrl: './products-header.scss',
})
export class ProductsHeader {
  filteredProductsLength = input<number>(0);
  categoriesLength = input<number>(0);
}
