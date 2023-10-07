import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: 'sign-in', canActivate: [UnauthenticatedGuard], loadChildren: () => import('./features/sign-in/sign-in.module').then(m => m.SignInModule ) },
  { path: 'sign-up', canActivate: [UnauthenticatedGuard], loadChildren: () => import('./features/sign-up/sign-up.module').then(m => m.SignUpModule ) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
