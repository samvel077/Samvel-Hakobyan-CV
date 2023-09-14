import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, NgOptimizedImage } from "@angular/common";


import { AppComponent } from "@app/app.component";
import { CoreModule } from "@app/core";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "@app/app-routing.module";
import { environment } from "@environments/environment";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        CoreModule,
        RouterOutlet,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: environment.BASE_HREF
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
