import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  standalone: true,
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {}
