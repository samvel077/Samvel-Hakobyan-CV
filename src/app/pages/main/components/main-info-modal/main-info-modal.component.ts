import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';

import { Modal } from 'flowbite';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '@environments/environment';
import { SvgIconComponent } from '@shared/components';
import { createModal } from '@utils/flowbite-components';

@Component({
  selector: 'app-main-info-modal',
  standalone: true,
  templateUrl: './main-info-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SvgIconComponent],
})
export class MainInfoModalComponent implements OnInit {
  private modalRef: Modal;

  private cookieService = inject(CookieService);

  ngOnInit(): void {
    this.modalRef = createModal('main-info-modal', {
      onHide: () => {
        this.setCookie();
      },
    });

    this.modalRef.show();
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  private setCookie(): void {
    // set cookie to expires date to 1 hour
    const now = new Date();
    const time = now.getTime();
    const expires = time + 3600 * 1000;
    now.setTime(expires);

    this.cookieService.set(
      'main-info-modal-closed',
      'true',
      now,
      environment.PATH
    );
  }
}
