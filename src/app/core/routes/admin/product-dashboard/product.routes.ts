import { Routes } from '@angular/router';

export const ADMIN_PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        'src/app/features/admin/product/list/admin-product-list.component'
      ).then((c) => c.AdminProductListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import(
        'src/app/features/admin/product/create/admin-product-create.component'
      ).then((c) => c.AdminProductCreateComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import(
        'src/app/features/admin/product/edit/admin-product-edit.component'
      ).then((c) => c.AdminProductEditComponent),
  },
];
