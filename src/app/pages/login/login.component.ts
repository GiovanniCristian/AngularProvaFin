import { AuthService } from './../../shared/services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService:AuthService , private router: Router){}

  ngOnInit(): void {

  }

  setEmail (email: string) {
    return this.email = email;
  }

  setPassword (password: string) {
    return this.password = password;
  }

  signUp() {
    localStorage.setItem('registered-user' , this.setEmail(this.email) && this.setPassword(this.password));
  }

  login () {
    if (localStorage.getItem('registered-user')) {
      return this.authService.isLoggedIn() , this.router.navigate(['home']);
    }
  }
}
