import { InternalServerErrorComponent } from '../../../shared/pages/internal-server-error/internal-server-error.component';
import { Routes } from '@angular/router';

export const SERVER_ROUTES: Routes = [
  {
    path: 'notfound',
    loadComponent: () =>
      import('src/app/shared/pages/notfound/notfound.component').then(
        (c) => c.NotfoundComponent,
      ),
  },
  {
    path: 'internal-server-error',
    loadComponent: () =>
      import(
        'src/app/shared/pages/internal-server-error/internal-server-error.component'
      ).then((c) => c.InternalServerErrorComponent),
  },
  {
    path: 'forbidden',
    loadComponent: () =>
      import('src/app/shared/pages/forbidden/forbidden.component').then(
        (c) => c.ForbiddenComponent,
      ),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('src/app/shared/pages/unauthorized/unauthorized.component').then(
        (c) => c.UnauthorizedComponent,
      ),
  },
];
