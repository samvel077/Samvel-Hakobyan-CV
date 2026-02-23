import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SlicePipe } from '@angular/common';

import { MenuDropdownComponent } from '@shared/components';
import { fileDownload } from '@utils/file-download';

import { IMainInfo } from '../../models';
import { MainInfoSkeletonComponent } from '../main-info-skeleton/main-info-skeleton.component';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MenuDropdownComponent, SlicePipe, MainInfoSkeletonComponent],
})
export class MainInfoComponent {
  content = input<IMainInfo>();
  page = input(1, {
    transform: (value: string | number) => Number(value),
  });

  downloadFiles(fileUrls: string[]): void {
    fileDownload(fileUrls);
  }
}
