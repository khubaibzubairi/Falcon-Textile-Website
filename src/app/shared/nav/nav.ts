import { Component, inject, signal, HostListener, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ThemeService } from '../theme.service';
import { Categories, AllProducts } from '../../pages/products/products.utils';

export interface MegaMenuCategory {
  label: string;
  items: { label: string; route: string; tag?: string }[];
}

export interface NavLink {
  label: string;
  route?: string;
  hasMega?: boolean;
}

@Component({
  selector: 'app-nav',
  imports: [RouterModule, DrawerModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav implements OnInit {
  theme = inject(ThemeService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  drawerVisible = false;
  megaOpen = signal(false);
  mobileProductsOpen = signal(false);

  links: NavLink[] = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about-us' },
    { label: 'Products & Services', route: '/products', hasMega: true },
    { label: 'Contact', route: '/contact' },
  ];

  allCategories = Categories;
  allProducts = AllProducts;

  megaCategories: MegaMenuCategory[] = [
    {
      label: 'All Categories',
      items: this.allCategories.map((c) => ({
        label: c.label,
        route: '/products',
        tag: undefined,
      })),
    },
  ].filter((c) => c.items.length > 0);

  ngOnInit(): void {}

  navigateToCategory(category: string): void {
    this.router.navigate(['/products'], { queryParams: { category } });
    this.closeMega();
  }

  openMega(): void {
    this.megaOpen.set(true);
  }

  closeMega(): void {
    this.megaOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.megaOpen.set(false);
  }
}
