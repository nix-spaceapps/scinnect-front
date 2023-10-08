import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    FeedComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
