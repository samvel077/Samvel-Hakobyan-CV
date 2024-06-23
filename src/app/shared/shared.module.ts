import { NgModule } from '@angular/core';
import { NgClass, NgForOf, NgTemplateOutlet } from "@angular/common";

import { MenuDropdownComponent, SvgIconComponent } from "@shared/components";

@NgModule({
  declarations: [
    SvgIconComponent,
    MenuDropdownComponent,
  ],
  imports: [
    NgTemplateOutlet,
    NgClass,
    NgForOf
  ],
  exports: [
    SvgIconComponent,
    MenuDropdownComponent,
  ]
})
export class SharedModule {
}
