import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from "@angular/router";
import { APP_BASE_HREF, NgOptimizedImage } from "@angular/common";

import { AppComponent } from "@app/app.component";
import { AppRoutingModule } from "@app/app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule
    ],
    providers: [
        // If you change the "baseHref" for local in angular.json "architect" -> "build" -> "options"
        // you also need to pass this provider for routing

        // {
        //     provide: APP_BASE_HREF,
        //     useValue: environment.BASE_HREF
        // },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
