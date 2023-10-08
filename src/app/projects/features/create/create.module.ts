import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxInputTagModule } from '@ngx-lite/input-tag';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CreateRoutingModule,
    NgxInputTagModule.forRoot(),
    SharedModule
  ]
})
export class CreateModule { }
