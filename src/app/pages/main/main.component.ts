import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import {
  FooterComponent,
  HeaderComponent,
  ToggleThemeComponent,
} from '@core/components';
import { SvgIconComponent, PageWrapperComponent } from '@shared/components';
import { CookieService } from 'ngx-cookie-service';

import { MainInfoComponent, MainInfoModalComponent } from './components';

@Component({
  selector: 'app-main',
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
export class MainComponent implements OnInit {
  private cookieService = inject(CookieService);
  private viewContainerRef = inject(ViewContainerRef);

  ngOnInit(): void {
    if (!this.cookieService.get('main-info-modal-closed')) {
      this.viewContainerRef.createComponent(MainInfoModalComponent);
    }
  }
}
