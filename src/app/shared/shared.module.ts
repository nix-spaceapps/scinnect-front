import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsideItemComponent } from './aside/aside-item/aside-item.component';


@NgModule({
  declarations: [AsideComponent, AsideItemComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [AsideComponent]
})
export class SharedModule { }
