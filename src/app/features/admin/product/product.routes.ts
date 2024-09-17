import { Routes } from '@angular/router';

export const ADMIN_PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/admin-product-list.component').then(
        (c) => c.AdminProductListComponent,
      ),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./create/admin-product-create.component').then(
        (c) => c.AdminProductCreateComponent,
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./edit/admin-product-edit.component').then(
        (c) => c.AdminProductEditComponent,
      ),
  },
];
