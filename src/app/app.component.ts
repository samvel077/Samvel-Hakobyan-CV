import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initDropdowns } from 'flowbite/lib/esm/components/dropdown';
import { initModals } from 'flowbite/lib/esm/components/modal';
import { initTooltips } from 'flowbite/lib/esm/components/tooltip';

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
      this.initFlowbiteComponents();
    }, 100);
  }

  private initFlowbiteComponents(): void {
    initDropdowns();
    initModals();
    initTooltips();
  }
}
