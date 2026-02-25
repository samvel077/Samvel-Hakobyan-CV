import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { SlicePipe } from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';

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
  content = input.required<HttpResourceRef<IMainInfo | undefined>>();

  page = input(1, {
    transform: (value: string | number) => Number(value),
  });

  experiences = computed(() => this.content().value()?.experience);
  education = computed(() => this.content().value()?.education);
  qualifications = computed(() => this.content().value()?.qualifications);
  languages = computed(() => this.content().value()?.languages);
  skills = computed(() => this.content().value()?.skills);

  isFirstPage = computed(() => this.page() === 1);

  downloadFiles(fileUrls: string[]): void {
    fileDownload(fileUrls);
  }
}
