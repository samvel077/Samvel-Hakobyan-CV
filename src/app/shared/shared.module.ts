import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from "@shared/components";

@NgModule({
    declarations: [
        SvgIconComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SvgIconComponent
    ]
})
export class SharedModule {
}