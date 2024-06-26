import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import { initFlowbite } from 'flowbite';

import { preloadImages } from '@app/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    preloadImages([
      'assets/images/background.webp',
      'assets/images/background-dark.webp',
    ]);
  }

  // The initFlowbite works only with single page applications
  ngAfterViewInit(): void {
    // The setTimeout need for iPhone initialization issue
    setTimeout(() => {
      initFlowbite();
    }, 100);
  }
}
