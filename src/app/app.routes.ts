import { Routes } from '@angular/router';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { SERVER_ROUTES } from './core/routes/server/server.routes';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/routes/client/client.routes').then((m) => m.CLIENT_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./core/routes/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  ...SERVER_ROUTES,
  {
    path: '**',
    component: NotfoundComponent,
  },
];
