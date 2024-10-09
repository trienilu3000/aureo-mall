import { HttpInterceptorFn } from '@angular/common/http';

export const loadingSpinnerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
