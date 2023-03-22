import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isRegisteredNow(): boolean {
    // condizione ternaria //
    return localStorage.getItem('registered-user') ? true : false;
  }

}
