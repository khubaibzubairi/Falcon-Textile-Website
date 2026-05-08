import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'MAISON',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'contact',
    title: 'Contact - MAISON',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'products',
    title: 'Products & Services',
    loadComponent: () => import('./pages/products/products').then((m) => m.Products),
  },
  {
    path: 'product-details/:id',
    title: 'Products Details',
    loadComponent: () =>
      import('./pages/product-details/product-details').then((m) => m.ProductDetails),
  },
  {
    path: 'about-us',
    title: 'Our Story',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
];
