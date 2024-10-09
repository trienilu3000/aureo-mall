import { HttpInterceptorFn } from '@angular/common/http';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
