import {
  ApplicationConfig,
  inject,
  isDevMode,
  provideAppInitializer,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { ThemeService } from '@core/services';

import { appRoutes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

const appInitializer = () => {
  const themeService = inject(ThemeService);

  themeService.initTheme();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAppInitializer(appInitializer),
    provideHttpClient(withInterceptorsFromDi()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    // If you change the "baseHref" for local in angular.json "architect" -> "build" -> "options"
    // you also need to pass this provider for routing
    // {
    //     provide: APP_BASE_HREF,
    //     useValue: environment.BASE_HREF
    // },
  ],
};
