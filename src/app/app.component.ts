import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class AppComponent implements AfterViewInit {
  // The initFlowbite works only with single page applications
  ngAfterViewInit(): void {
    // The setTimeout need for iPhone initialization issue
    setTimeout(() => {
      initFlowbite();
    }, 100);
  }
}
