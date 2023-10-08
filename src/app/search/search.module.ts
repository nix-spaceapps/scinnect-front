import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ScinnectorsComponent } from './scinnectors/scinnectors.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    SearchComponent,
    ScinnectorsComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class SearchModule { }
