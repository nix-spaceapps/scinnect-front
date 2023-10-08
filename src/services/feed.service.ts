import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, finalize } from "rxjs"
import { Post } from "src/model/feed";
import { Pageable } from "src/model/pageable";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get loading(): BehaviorSubject<boolean> {
    return this._loading;
  }

  private baseUrl: string = 'https://api.scinnect.tech';
      
  constructor(private _httpClient: HttpClient) { }
 
  find(keyword?: string): Observable<Pageable<Post>> {
    this.loading.next(true);
    return this._httpClient.get<Pageable<Post>>(`${this.baseUrl}/posts?${keyword ? 'keyword=' + keyword : ''}`, { withCredentials: true }).pipe(finalize(() => { this._loading.next(false) }));
  }

}
