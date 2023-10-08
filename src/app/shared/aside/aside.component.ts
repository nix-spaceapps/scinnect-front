import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  
  get session(): User | undefined {
    return this._authService.session.value;
  }

  constructor(
    private _authService: AuthService
  ) { }

  logout() {
    this._authService.logout().subscribe(() => this.reloadCurrentRoute());
  }

  reloadCurrentRoute() {
    window.location.reload();
  }

}
