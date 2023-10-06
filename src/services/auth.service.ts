import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _httpClient: HttpClient
  ) { }


  async authenticate(form: any) {
    return this._httpClient.post('https://dummyjson.com/auth/login', form).pipe(tap(this._buildCookie));
  }
  /* 
  async authenticated() {
    return this._httpClient.post()
  }
} */

  private _buildCookie(data: any) {
    try {
      Cookies.set('token', data.token);
    } catch (error) {
      console.error(error);
    }
  }
}
