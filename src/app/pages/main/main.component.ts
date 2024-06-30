import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ThemeService } from '@core/services';
import { ETheme } from '@app/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  themeService = inject(ThemeService);

  ETheme = ETheme;

  pageBgImageUrl = "url('/assets/images/background.webp')";
  pageBgImageUrlDark = "url('/assets/images/background-dark.webp')";
}
