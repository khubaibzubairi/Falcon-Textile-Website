import { Component, inject, input, output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { RelatedProduct } from '../product-details';

@Component({
  selector: 'app-product-related',
  imports: [RouterModule],
  templateUrl: './product-related.html',
})
export class ProductRelated {
  private router = inject(Router);
  products = input<RelatedProduct[]>([]);
  mouseEnter = output<RelatedProduct>();
  mouseLeave = output<RelatedProduct>();

  inquire(event: Event, name: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/contact'], { queryParams: { type: 'custom', product: name } });
  }
}
