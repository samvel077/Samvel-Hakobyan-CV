import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  // Use pathMatch: 'prefix' if you have child routes, don't use pathMatch: 'full' if you have child routes
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('@pages/main').then(m => m.MainComponent),
  },
  { path: '**', redirectTo: '' },
];
