import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent, TooltipComponent } from "@shared/components";
import { TooltipDirective } from "@shared/directives/tooltip.directive";

@NgModule({
    declarations: [
        SvgIconComponent,
        TooltipDirective,
        TooltipComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SvgIconComponent,
        TooltipDirective,
    ]
})
export class SharedModule {
}
