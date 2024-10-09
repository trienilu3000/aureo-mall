import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const accessKey = localStorage.getItem('accessKey');
  if (!accessKey) {
    router.navigate(['/account/login']);
    return false;
  }

  return true;
};
