import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, finalize } from "rxjs";
import { Scinnector } from "src/model/scinnector";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get loading(): BehaviorSubject<boolean> {
    return this._loading;
  }

  private baseUrl: string = 'https://api.scinnect.tech';
      
  constructor(private _httpClient: HttpClient) { }
 
  getScinnector(id: string): Observable<Scinnector> {
    this.loading.next(true);
    return this._httpClient.get<Scinnector>(`${this.baseUrl}/scinnectors/${id}`, {withCredentials: true}).pipe(finalize(() => { this._loading.next(false) }));
  }

}
