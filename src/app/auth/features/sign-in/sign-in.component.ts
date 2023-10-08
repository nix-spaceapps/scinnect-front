import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { NotifyService } from 'src/core/ui/dialog/notify/notify.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [NotifyService]
})
export class SignInComponent {
  
  get logging() {
    return this._authService.logging;
  }

  formGroup: FormGroup = new FormGroup({
    'email': new FormControl<string>('', [Validators.required, Validators.email]),
    'password': new FormControl<string>('', [Validators.required]),
  })

  constructor(
    private _authService: AuthService,
    private _notifyService: NotifyService
  ) {}

  ngAfterViewInit() {
    (window as any).launchParticlesJS('particles-js');    
  }

  login() {
    this._authService.authenticate(this.formGroup.value).subscribe(() => this.reloadCurrentRoute(), () => {
      this._notifyService.error({
        position: {x: 'center', y: 'bottom'},
        message: 'Usuário/senha incorretos.'
      });
    });
  }

  reloadCurrentRoute() {
    window.location.reload();
  }
}
