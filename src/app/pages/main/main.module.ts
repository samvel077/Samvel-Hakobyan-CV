import { NgModule } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { SharedModule } from '@shared/shared.module';
import {
  MainComponent,
  MainInfoComponent,
  MainInfoModalComponent,
} from '@app/pages';
import { CoreModule } from '@core/core.module';
import { MainRoutingModule } from '@pages/main/main-routing.module';
import { MainService } from '@pages/main/services';

@NgModule({
  declarations: [MainComponent, MainInfoComponent, MainInfoModalComponent],
  imports: [
    MainRoutingModule,
    SharedModule,
    CoreModule,
    NgOptimizedImage,
    NgIf,
    AsyncPipe,
    NgForOf,
  ],
  providers: [MainService, provideHttpClient(withInterceptorsFromDi())],
})
export class MainModule {}
