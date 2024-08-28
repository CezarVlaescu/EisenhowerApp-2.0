import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { inject } from '@angular/core';


export const tokenGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const jwtHelper = inject(JwtHelperService);
  const snackBar = inject(MatSnackBar);
  const router = inject(Router);

  const jwtToken = authService.getToken();

  if (!jwtToken || jwtHelper.isTokenExpired(jwtToken)) {
    const message = jwtToken ? 
      'Your session has expired. Please log in again.' : 
      'Access Denied!';

    snackBar.open(message, '❌');

    authService.signOut();
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    });

    return false;
  }

  return true; 
};
