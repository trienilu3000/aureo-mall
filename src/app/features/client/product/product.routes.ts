import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/product-list.component').then(
        (c) => c.ProductListComponent,
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./detail/product-detail.component').then(
        (c) => c.ProductDetailComponent,
      ),
  },
];
