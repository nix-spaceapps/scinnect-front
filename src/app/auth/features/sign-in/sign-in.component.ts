import { Component } from '@angular/core';
// @ts-ignore
import particlesJS from 'particles.js';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  ngAfterViewInit() {
    (window as any).launchParticlesJS('particles-js');
  }
}
