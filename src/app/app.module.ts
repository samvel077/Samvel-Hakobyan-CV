import { NgModule, isDevMode, APP_INITIALIZER, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { ThemeService } from '@core/services';

const appInitFactory = () => {
  const themeService = inject(ThemeService);

  return () => {
    themeService.initTheme();
  };
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    // If you change the "baseHref" for local in angular.json "architect" -> "build" -> "options"
    // you also need to pass this provider for routing

    // {
    //     provide: APP_BASE_HREF,
    //     useValue: environment.BASE_HREF
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
