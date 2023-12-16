import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from "@shared/shared.module";
import { MainComponent, MainInfoComponent, MainInfoModalComponent } from "@app/pages";
import { CoreModule } from "@core/core.module";
import { MainRoutingModule } from "@pages/main/main-routing.module";
import { MainService } from "@pages/main/services/main.service";

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
        HttpClientModule,
    ],
    providers: [MainService]
})
export class MainModule {
}
