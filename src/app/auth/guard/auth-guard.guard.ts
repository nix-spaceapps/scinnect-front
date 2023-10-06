import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Cookies from 'js-cookie';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  if(!Cookies.get('token')) {
    router.navigate(['auth', 'sign-in']);
  }

  return !!Cookies.get('token');
};

export const UnauthenticatedGuard: CanActivateFn = (route, state) => {
  return !Cookies.get('token');
};