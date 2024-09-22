import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SvgIconComponent } from '@shared/components';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent],
})
export class FooterComponent {}
