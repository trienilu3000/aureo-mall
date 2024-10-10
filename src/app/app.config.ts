import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorHandlingInterceptor } from './core/interceptors/error-handling.interceptor';
import { loadingSpinnerInterceptor } from './core/interceptors/loading-spinner.interceptor';
registerLocaleData(en);
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        // cachingInterceptor,
        // cokkieInterceptor,
        errorHandlingInterceptor,
        loadingSpinnerInterceptor,
        // loggingInterceptor,
      ]),
    ),
  ],
};
