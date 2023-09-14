import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from "@pages/main";
import { CoreModule } from "@app/core";
import { SharedModule } from "@app/shared";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    NgOptimizedImage,
    SharedModule
  ]
})
export class PagesModule { }
