import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize } from 'rxjs';
import { UserResponse } from 'src/model/register_response';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'https://scinnect-api-ff2c1a72d966.herokuapp.com'
  private _session: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  get session(): BehaviorSubject<User | undefined> {
    return this._session;
  }
  set session(user: User) {
    this._session.next(user);
  }

  private _logging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get logging(): BehaviorSubject<boolean> {
    return this._logging;
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  register(user: User): Observable<UserResponse> {
    this._logging.next(true);
    return this._httpClient.post<UserResponse>(`${this.baseUrl}/users`, user, {withCredentials: true}).pipe(finalize(() => { delay(5000); this._logging.next(false) }));
  }

  authenticate(user: User): Observable<UserResponse> {
    this._logging.next(true);
    return this._httpClient.post<UserResponse>(`${this.baseUrl}/auth/authenticate`, user, {withCredentials: true}).pipe(finalize(() => { delay(5000); this._logging.next(false) }));
  }

  logout(): Observable<UserResponse> {
    this._logging.next(true);
    return this._httpClient.post<UserResponse>(`${this.baseUrl}/auth/logout`, {}, {withCredentials: true}).pipe(finalize(() => { delay(5000); this._logging.next(false) }));
  }

  validate(): Observable<User> {
    return this._httpClient.get<User>(`${this.baseUrl}/users/validate`, {withCredentials: true});
  }

}
