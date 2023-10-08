import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, finalize } from "rxjs";
import { Project } from "src/model/scinnector";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private _loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get loading(): BehaviorSubject<boolean> {
    return this._loading;
  }

  private baseUrl: string = 'https://api.scinnect.tech';
      
  constructor(private _httpClient: HttpClient) { }
 
  create(project: Project): Observable<Project> {
    this.loading.next(true);
    return this._httpClient.post<Project>(`${this.baseUrl}/projects`, project, {withCredentials: true}).pipe(finalize(() => { this._loading.next(false) }));
  }

}
