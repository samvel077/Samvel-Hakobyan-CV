import { AfterViewInit, Component } from '@angular/core';

import { initFlowbite } from "flowbite";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    // The initFlowbite works only with single page applications
    ngAfterViewInit() {
        // The etTimeout need for iPhone initialization issue
        setTimeout(() => {
            initFlowbite();
        }, 100)
    }

}
