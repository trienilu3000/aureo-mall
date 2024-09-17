import { Routes } from '@angular/router';

export const ADMIN_ORDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-order.component').then((c) => c.AdminOrderComponent),
  },
  //   {
  //     path: ':id',
  //     loadComponent: () => import('./detail/admin-order-detail.component').then(c => c.AdminOrderDetailComponent)
  //   }
];
