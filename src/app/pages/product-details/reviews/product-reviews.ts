import { Component, input } from '@angular/core';
import { Review } from '../product-details';

@Component({
  selector: 'app-product-reviews',
  imports: [],
  templateUrl: './product-reviews.html',
})
export class ProductReviews {
  reviews = input<Review[]>([]);
  averageRating = input<number>(0);
  ratingBreakdown = input<{ stars: number; count: number; pct: number }[]>([]);

  starsArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }
}
