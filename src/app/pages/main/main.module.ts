import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SharedModule } from "@app/shared/shared.module";
import { CoreModule } from "@app/core";
import { MainComponent, MainRoutingModule } from "@app/pages";

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule,
        CoreModule,
        NgOptimizedImage,
    ]
})
export class MainModule {
}
