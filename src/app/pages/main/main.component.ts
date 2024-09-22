import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  FooterComponent,
  HeaderComponent,
  ToggleThemeComponent,
} from '@core/components';
import { SvgIconComponent, PageWrapperComponent } from '@shared/components';

import { MainInfoComponent, MainInfoModalComponent } from './components';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ToggleThemeComponent,
    HeaderComponent,
    MainInfoComponent,
    FooterComponent,
    SvgIconComponent,
    MainInfoModalComponent,
    PageWrapperComponent,
  ],
})
export class MainComponent {}
