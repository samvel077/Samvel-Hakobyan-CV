import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SharedModule } from "@app/shared";
import { CoreModule } from "@app/core";
import { MainComponent, MainInfoComponent, MainRoutingModule } from "@app/pages";

@NgModule({
    declarations: [MainComponent, MainInfoComponent],
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
