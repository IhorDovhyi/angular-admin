import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DashboardModule} from './features/dashboard/dashboard.module';
import {SettingsModule} from './features/settings/settings.module';
import {UsersModule} from './features/users/users.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => DashboardModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.module').then(m => SettingsModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => UsersModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
