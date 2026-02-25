import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import {
  FooterComponent,
  HeaderComponent,
  ToggleThemeComponent,
} from '@core/components';
import { PageWrapperComponent } from '@shared/components';
import { MainService } from '@pages/main/services';
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
    PageWrapperComponent,
  ],
  providers: [MainService],
})
export class MainComponent implements OnInit {
  private cookieService = inject(CookieService);
  private viewContainerRef = inject(ViewContainerRef);
  private mainService = inject(MainService);

  content = this.mainService.getMainContent();

  pages = computed<number[]>(() => {
    const pages = [];
    const experience = this.content.value()?.experience.items || [];

    // Calculate pages count from experience
    // Start from seconde page, because the first page is static with header for lazy loading other pages
    for (let i = 2; i <= Math.round(experience.length / 2); i++) {
      pages.push(i);
    }

    return pages;
  });

  ngOnInit(): void {
    if (!this.cookieService.get('main-info-modal-closed')) {
      this.viewContainerRef.createComponent(MainInfoModalComponent);
    }
  }
}
