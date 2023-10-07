import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from 'src/services/auth.service';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  return service.validate().pipe(map((e) => {
    service.session = e;

    return true
  }), catchError(() => {
    router.navigateByUrl(`/auth/sign-in`)
    return of(false);
  }));
};

export const UnauthenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);

  return service.validate().pipe(map((e) => {
    service.session = e;
    if (e.email) {
      router.navigateByUrl(`/user/${e.username}`)
      new Error("O usuário está logado");
      return false
    }

    return true;
  }), catchError((e) => {
    console.log(e)
    return of(true);
  }));
};