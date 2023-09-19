import { Component, OnInit } from '@angular/core';

import { Modal } from "flowbite";
import { CookieService } from "ngx-cookie-service";

import { createModal } from "@app/core";

@Component({
    selector: 'app-main-info-modal',
    templateUrl: './main-info-modal.component.html',
    styleUrls: ['./main-info-modal.component.scss']
})
export class MainInfoModalComponent implements OnInit {
    private modalRef: Modal

    constructor(private cookieService: CookieService) {
    }

    ngOnInit(): void {
        if (!this.cookieService.get('main-info-modal-closed')) {
            this.modalRef = createModal('main-info-modal', {
                onHide: () => {
                    // set cookie to expires date to 1 hour
                    const now = new Date();
                    const time = now.getTime();
                    const expires = time + 3600 * 1000;
                    now.setTime(expires);

                    this.cookieService.set('main-info-modal-closed', 'true', now, '/')
                }
            });

            this.openModal();
        }
    }

    private openModal(): void {
        this.modalRef.show();
    }

    public closeModal(): void {
        this.modalRef.hide();
    }
}
