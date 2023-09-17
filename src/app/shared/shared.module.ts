import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuDropdownComponent, SvgIconComponent } from "@shared/components";

@NgModule({
    declarations: [
        SvgIconComponent,
        MenuDropdownComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SvgIconComponent,
        MenuDropdownComponent,
    ]
})
export class SharedModule {
}
