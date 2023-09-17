import { AfterViewInit, Component } from '@angular/core';

import { initFlowbite } from "flowbite";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        // The etTimeout need for iPhone initialization issue
        setTimeout(() => {
            initFlowbite();
            alert('done');
        }, 100)
    }

}
