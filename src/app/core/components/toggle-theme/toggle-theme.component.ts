import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeService } from '@core/services';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleThemeComponent {
  constructor(public themeService: ThemeService) {}

  onToggleThemeMode() {
    this.themeService.toggleThemeMode();
  }
}
