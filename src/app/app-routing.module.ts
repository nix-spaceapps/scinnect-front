import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './auth/guard/auth-guard.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule ) },
  { path: 'user', canActivate: [AuthenticatedGuard], loadChildren: () => import('./user/user.module').then(m => m.UserModule ) },
  { path: 'project', canActivate: [AuthenticatedGuard], loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule ) },
  { path: '**', redirectTo: '/auth/sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
