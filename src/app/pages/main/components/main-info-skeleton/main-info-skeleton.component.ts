import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-info-skeleton',
  standalone: true,
  templateUrl: './main-info-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoSkeletonComponent {
  loadingTemplates: void[] = Array(8).fill(null);
}
