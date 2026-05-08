import { Component, computed, signal, OnInit, inject } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProductsHeader } from './header/products-header';
import { ProductsSidebar } from './sidebar/products-sidebar';
import { ProductsToolbar } from './toolbar/products-toolbar';
import { ProductsGrid } from './grid/products-grid';
import { AllProducts, Categories } from './products.utils';

export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory?: string;
  primaryImage: string;
  hoverImage: string;
  tag?: string;
  isHovered: boolean;
}

export type ViewMode = 'grid' | 'list';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, ProductsHeader, ProductsSidebar, ProductsToolbar, ProductsGrid],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  private route = inject(ActivatedRoute);
  // ── View mode toggle ──────────────────────────────────────────────────────
  viewMode = signal<ViewMode>('grid');

  setView(mode: ViewMode): void {
    this.viewMode.set(mode);
  }

  // ── Category filter ───────────────────────────────────────────────────────
  activeCategory = signal<string>('All');

  categories = Categories;

  // ── Products data ─────────────────────────────────────────────────────────
  allProducts: Product[] = AllProducts;

  // ── Computed filtered list ─────────────────────────────────────────────────
  filteredProducts = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.allProducts
      : this.allProducts.filter((p) => p.category === cat || p.subCategory === cat);
  });

  // ── Category counts ────────────────────────────────────────────────────────
  constructor() {
    this.categories = this.categories.map((c) => ({
      ...c,
      count:
        c.label === 'All'
          ? this.allProducts.length
          : this.allProducts.filter((p) => p.category === c.label || p.subCategory === c.label)
              .length,
    }));
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['category']) {
        this.activeCategory.set(params['category']);
      }
    });
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  onMouseEnter(p: Product): void {
    p.isHovered = true;
  }
  onMouseLeave(p: Product): void {
    p.isHovered = false;
  }
}
