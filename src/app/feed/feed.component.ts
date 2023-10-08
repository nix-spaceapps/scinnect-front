import { Component } from '@angular/core';
import { Post } from 'src/model/feed';
import { FeedService } from 'src/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [ FeedService ]
})
export class FeedComponent {

  feed: Array<Post> = [];

  constructor(private _feedService: FeedService) {}


  ngOnInit() {
    this._feedService.find().subscribe(e => this.feed = e.content);
  }
}
