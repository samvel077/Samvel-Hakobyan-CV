import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from "@angular/common";


import { AppComponent } from "@app/app.component";
import { CoreModule } from "@app/core";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        CoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
