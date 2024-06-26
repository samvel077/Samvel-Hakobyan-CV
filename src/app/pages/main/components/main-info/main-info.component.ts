import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { fileDownload } from '@app/core';
import { MainService } from '@pages/main/services/main.service';
import { IMainInfo } from '@core/interfaces/main-info.interface';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrl: './main-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainInfoComponent {
  public loadingTemplates: void[] = Array(5).fill(null);

  public content$: Observable<IMainInfo>;

  private presentationFileUrls: string[] = [
    'assets/pdf/Presentation.pdf',
    'assets/pdf/Presentation-slides.pdf',
  ];

  constructor(private mainService: MainService) {
    this.initContent();
  }

  private initContent(): void {
    this.content$ = this.mainService.getMainContent();
  }

  public downloadPresentationFiles(): void {
    fileDownload(this.presentationFileUrls);
  }
}
