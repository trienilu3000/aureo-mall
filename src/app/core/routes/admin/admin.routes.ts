import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/features/admin/dashboard/admin-dashboard.component').then(
        (c) => c.AdminDashboardComponent,
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('src/app/core/routes/admin/product-dashboard/product.routes').then(
        (m) => m.ADMIN_PRODUCT_ROUTES,
      ),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('src/app/core/routes/admin/order-dashboard/order.routes').then(
        (m) => m.ADMIN_ORDER_ROUTES,
      ),
  },
];
