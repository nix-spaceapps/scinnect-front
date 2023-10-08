import { Component, Input } from '@angular/core';
import { Post } from 'src/model/feed';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  static index: number = 1;

  bgImage: string = `https://i.pravatar.cc/32?img=${PostComponent.index}`;

  get index() {
    return PostComponent.index;
  }

  @Input() post?: Post;

  constructor() {
    PostComponent.index++;
  }

}
