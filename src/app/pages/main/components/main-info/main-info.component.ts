import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { MenuDropdownComponent } from '@shared/components';
import { fileDownload } from '@utils/file-download';

import { MainService } from '../../services';
import { IMainInfo } from '../../models';
import { MainInfoSkeletonComponent } from '../main-info-skeleton/main-info-skeleton.component';

@Component({
  selector: 'app-main-info',
  standalone: true,
  templateUrl: './main-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MenuDropdownComponent,
    AsyncPipe,
    SlicePipe,
    MainInfoSkeletonComponent,
  ],
  providers: [MainService],
})
export class MainInfoComponent {
  page = input(1, {
    transform: (value: string | number) => Number(value),
  });

  mainService = inject(MainService);

  content = toSignal<IMainInfo>(this.mainService.getMainContent());

  downloadFiles(fileUrls: string[]): void {
    fileDownload(fileUrls);
  }
}
