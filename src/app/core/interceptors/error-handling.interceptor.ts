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
      let errorMessage = 'An unknown error occurred!';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        switch (error.status) {
          case 401:
            errorMessage = 'Unauthorized! Please login again.';
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
            errorMessage =
              'You do not have permission to access this resource.';
            router.navigate(['/forbidden']);
            break;
          case 404:
            errorMessage = 'Resource not found!';
            router.navigate(['/notfound']);
            break;
          case 500:
            errorMessage = 'Internal server error. Please try again later.';
            router.navigate(['/internal-server-error']);
            break;
          default:
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
      }

      return throwError(() => new Error(errorMessage));
    }),
  );
};
