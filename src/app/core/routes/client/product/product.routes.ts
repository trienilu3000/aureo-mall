import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        'src/app/features/client/product/list/product-list.component'
      ).then((c) => c.ProductListComponent),
  },
  {
    path: ':id',
    loadComponent: () =>
      import(
        'src/app/features/client/product/detail/product-detail.component'
      ).then((c) => c.ProductDetailComponent),
  },
];
