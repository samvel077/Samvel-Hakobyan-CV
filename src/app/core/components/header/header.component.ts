import { ChangeDetectionStrategy, Component } from '@angular/core';

import { createTooltip } from '@app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public content: any;

  constructor() {
    this.initContent();
  }

  private initContent(): void {
    this.content = {
      name: 'Samvel Hakobyan',
      position: 'Front-end Angular Developer',
      about: `Front-end Developer with over 4 years experience.
                    I specialize in JavaScript and have professional experience working with Angular.
                    During this time, I have faced various challenges and managed to offer the most
                    optimal and the best solutions.
                    Create complex web applications with user friendly interfaces.
                    Develop efficient and reusable components and front-end solutions with ensuring a clear
                    dependency chain, in terms of both application logic as well as file relationships.`,
    };
  }

  public openViewAllTooltip(targetId: string, triggerId: string): void {
    const tooltip = createTooltip(targetId, triggerId, {
      triggerType: 'click',
    });

    tooltip.show();
  }
}
