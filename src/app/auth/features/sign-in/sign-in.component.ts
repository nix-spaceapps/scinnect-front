import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [MessageService]
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
    private _messageService: MessageService,
    private _router: Router,
  ) {}

  ngAfterViewInit() {
    (window as any).launchParticlesJS('particles-js');
  }

  login() {
    this._authService.authenticate(this.formGroup.value).subscribe(() => this.reloadCurrentRoute());
  }

  reloadCurrentRoute() {
    window.location.reload();
  }
}
