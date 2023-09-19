import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    // Use pathMatch: 'prefix' if you have child routes, don't use pathMatch: 'full' if you have child routes
    {
        path: '',
        pathMatch: 'prefix',
        loadChildren: () => import('@pages/main/main.module').then(m => m.MainModule)
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
