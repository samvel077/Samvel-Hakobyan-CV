import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ThemeService } from '@core/services';
import { SvgIconComponent } from '@shared/components';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent],
  host: {
    class: 'absolute right-0',
  },
})
export class ToggleThemeComponent {
  private themeService = inject(ThemeService);

  onToggleThemeMode() {
    this.themeService.toggleThemeMode();
  }
}
