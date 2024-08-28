import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public saveToken(token: string) : void {
    window.localStorage.removeItem("TOKEN_KEY");
    window.localStorage.setItem("TOKEN_KEY", token);
  }

  public getToken() : string | null {
    return window.localStorage.getItem("TOKEN_KEY") !== null ? window.localStorage.getItem("TOKEN_KEY") : null;
  }

  public getUserId() : string | null {
    const jwtToken = this.getToken();
    if(!jwtToken) return null;

    try {
      const decodedToken: any = jwtDecode(jwtToken);
      return decodedToken?.sub || null;
    }
    catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  signOut() : void {
    window.localStorage.removeItem("TOKEN_KEY");
    window.sessionStorage.clear();
    this.router.navigate(['/login'])
    .then(() => window.location.reload());
  }
}
