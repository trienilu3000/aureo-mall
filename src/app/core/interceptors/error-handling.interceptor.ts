import { routes } from './../../app.routes';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError, timeout } from 'rxjs';
import { AuthService } from '../services/user/auth.service';
export const errorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.error instanceof ErrorEvent) {
   
      } else {
        switch (error.error.error.errorCode) {
          case 'TOKEN_EXPIRED':
            localStorage.removeItem('accessKey');
            router.navigate(['/unauthorized']);
            return authService.refreshToken().pipe(
              switchMap((res) => {
                const newAccessKey = res.data.newAccessKey;
                localStorage.setItem('accessKey', newAccessKey);
                const newAuthReq = req.clone({
                  headers: req.headers.set(
                    'Authorization',
                    `Bearer ${newAccessKey}`,
                  ),
                });
                return next(newAuthReq);
              }),
              catchError((err) => {
                authService.logout();
                return throwError(() => new Error());
              }),
            );
          case 403:
        
            router.navigate(['/forbidden']);
            break;
          case 404:
           
            router.navigate(['/notfound']);
            break;
          case 500:
           
            router.navigate(['/internal-server-error']);
            break;
          default:
            break;
        }
      }

      return throwError(() => new Error());
    }),
  );
};
