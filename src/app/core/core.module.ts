import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { FooterComponent, HeaderComponent } from "@core/components";
import { SharedModule } from "@shared/shared.module";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        SharedModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {
}
