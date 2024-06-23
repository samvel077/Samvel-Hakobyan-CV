import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  // The initFlowbite works only with single page applications
  ngAfterViewInit() {
    // The setTimeout need for iPhone initialization issue
    setTimeout(() => {
      initFlowbite();
    }, 100);
  }
}
