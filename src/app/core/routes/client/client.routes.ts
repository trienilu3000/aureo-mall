import { Routes } from '@angular/router';

export const CLIENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../../features/client/home/home.component').then(
        (c) => c.HomeComponent,
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./my-info/account.routes').then((m) => m.ACCOUNT_ROUTES),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.routes').then((m) => m.PRODUCT_ROUTES),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('../../../features/client/cart/cart.component').then(
        (c) => c.CartComponent,
      ),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('../../../features/client/checkout/checkout.component').then(
        (c) => c.CheckoutComponent,
      ),
  },
];
