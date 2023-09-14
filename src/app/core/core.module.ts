import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HeaderComponent } from "@core/components";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {
}
