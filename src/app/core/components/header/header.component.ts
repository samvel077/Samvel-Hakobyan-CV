import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { createTooltip } from '@utils/flowbite-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class HeaderComponent {
  content: { name: string; position: string; about: string };

  private experience = new Date().getFullYear() - 2019;

  constructor() {
    this.initContent();
  }

  openViewAllTooltip(targetId: string, triggerId: string): void {
    const tooltip = createTooltip(targetId, triggerId, {
      triggerType: 'click',
    });

    tooltip.show();
  }

  private initContent(): void {
    this.content = {
      name: 'Samvel Hakobyan',
      position: 'Frontend Angular Developer',
      about: `Experienced Frontend Developer with ${this.experience}+ years of expertise specializing in JavaScript and proficient in Angular. Skilled in overcoming diverse challenges, I consistently deliver optimal solutions. Proficient in crafting complex web applications with intuitive user interfaces. Expertise in developing efficient and reusable components, maintaining clear dependency chains in terms of both application logic and file relationships.`,
    };
  }
}
