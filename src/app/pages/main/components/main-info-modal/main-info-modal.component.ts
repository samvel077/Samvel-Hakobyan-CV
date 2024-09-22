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
    if (!this.cookieService.get('main-info-modal-closed')) {
      this.modalRef = createModal('main-info-modal', {
        onHide: () => {
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
        },
      });

      this.openModal();
    }
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  private openModal(): void {
    this.modalRef.show();
  }
}
