import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/page/notfound/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/client/client.routes').then((m) => m.CLIENT_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];
