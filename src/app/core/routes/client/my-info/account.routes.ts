import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        '../../../../features/client/account/my-info/my-info.component'
      ).then((c) => c.MyInfoComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../../../../features/client/account/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        '../../../../features/client/account/register/register.component'
      ).then((c) => c.RegisterComponent),
  },
];
