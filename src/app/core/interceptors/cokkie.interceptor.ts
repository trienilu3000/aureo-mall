import { HttpInterceptorFn } from '@angular/common/http';

export const cokkieInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
