import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/user/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const accessKey = inject(AuthService).getAccessKey();
  let headers = req.headers.set('Content-Type', 'application/json');

  if (accessKey) {
    headers = headers.set('Authorization', `Bearer ${accessKey}`);
  }
  const newReq = req.clone({ headers, withCredentials: true });
  return next(newReq);
};
