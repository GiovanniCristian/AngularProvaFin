import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor() { }

  isLoggedIn(): boolean {
    if (localStorage.getItem('regstered-user')) {
      return this.isLogged = true;
    } else { return this.isLogged }
  }

}
