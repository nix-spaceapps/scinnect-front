import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  get logging() {
    return this._authService.logging;
  }

  formGroup: FormGroup = new FormGroup({
    'name': new FormControl<string>('', [Validators.required]),
    'username': new FormControl<string>('', [Validators.required]),
    'email': new FormControl<string>('', [Validators.required, Validators.email]),
    'password': new FormControl<string>('', [Validators.required]),
  })

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngAfterViewInit() {
    (window as any).launchParticlesJS('particles-js');
  }

  register() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this._authService.register(this.formGroup.value).subscribe(e => this.reloadCurrentRoute());
  }

  reloadCurrentRoute() {
    window.location.reload();
  }
}
