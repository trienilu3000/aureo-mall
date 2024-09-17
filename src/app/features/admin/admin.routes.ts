import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/admin-dashboard.component').then(
        (c) => c.AdminDashboardComponent,
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.routes').then((m) => m.ADMIN_PRODUCT_ROUTES),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.routes').then((m) => m.ADMIN_ORDER_ROUTES),
  },
];
