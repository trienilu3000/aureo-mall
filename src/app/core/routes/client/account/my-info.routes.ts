import { Routes } from '@angular/router';

export const MYINFO_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('src/app/features/client/account/my-info/my-info.component').then(
        (c) => c.MyInfoComponent,
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            'src/app/features/client/account/account-dashboard/account-dashboard.component'
          ).then((c) => c.AccountDashboardComponent),
      },
      {
        path: 'addresses',
        loadComponent: () =>
          import(
            'src/app/features/client/account/account-address/account-address.component'
          ).then((c) => c.AccountAddressComponent),
      },
    ],
  },
];
