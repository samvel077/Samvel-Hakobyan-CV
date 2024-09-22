import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { Observable } from 'rxjs';

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

  content$: Observable<IMainInfo>;

  private mainService = inject(MainService);

  constructor() {
    this.initContent();
  }

  downloadFiles(fileUrls: string[]): void {
    fileDownload(fileUrls);
  }

  private initContent(): void {
    this.content$ = this.mainService.getMainContent();
  }
}
