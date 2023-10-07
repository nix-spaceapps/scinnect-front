import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  get session() {
    return this._authService.session
  }

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}


  logout() {
    this._authService.logout().subscribe(() => this.reloadCurrentRoute());
  }

  reloadCurrentRoute() {
    window.location.reload();
  }

}
