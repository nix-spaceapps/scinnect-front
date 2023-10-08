import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'create', loadChildren: () => import('./features/create/create.module').then(m => m.CreateModule) },
  { path: 'view', loadChildren: () => import('./features/view/view.module').then(m => m.ViewModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
