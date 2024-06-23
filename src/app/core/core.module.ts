import { NgModule } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import {
  FooterComponent,
  HeaderComponent,
  ToggleThemeComponent,
} from '@core/components';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ToggleThemeComponent],
  imports: [NgOptimizedImage, SharedModule],
  exports: [HeaderComponent, FooterComponent, ToggleThemeComponent],
})
export class CoreModule {}
