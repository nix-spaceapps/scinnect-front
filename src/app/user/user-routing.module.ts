import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':id', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule ) },
  { path: ':id/settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule ) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
