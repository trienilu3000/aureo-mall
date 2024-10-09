import { Routes } from '@angular/router';
import { authenticatedGuard } from 'src/app/core/guards/authenticated.guard';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/core/routes/client/account/my-info.routes').then(
        (m) => m.MYINFO_ROUTES,
      ),
    canActivate: [authenticatedGuard],
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
