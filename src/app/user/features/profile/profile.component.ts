import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scinnector } from 'src/model/scinnector';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService]
})
export class ProfileComponent {

  itsMe: boolean = false;
  scinnector?: Scinnector;

  get session() {
    return this._authService.session
  }

  constructor(
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {}

  ngOnInit() { 
    const id = this._route.snapshot.params['id'];
    this._userService.getScinnector(id).subscribe(e => {
      this.scinnector = e;
      this.itsMe = e.uuid === this._authService.session.value?.scinnector?.uuid;
    });
  }

}
