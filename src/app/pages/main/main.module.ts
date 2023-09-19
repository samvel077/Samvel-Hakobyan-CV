import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { SharedModule } from "@shared/shared.module";
import { MainComponent, MainInfoComponent, MainInfoModalComponent } from "@app/pages";
import { CoreModule } from "@core/core.module";
import { MainRoutingModule } from "@pages/main/main-routing.module";

@NgModule({
    declarations: [
        MainComponent,
        MainInfoComponent,
        MainInfoModalComponent
    ],
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
