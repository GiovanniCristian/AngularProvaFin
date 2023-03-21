import { AuthService } from './../../shared/services/auth/auth.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  setEmail(email: string) {
    this.email = email;
    console.log(this.email);

  }

  setPassword(password: string) {
    this.password = password;
    console.log(this.password);

  }

  signUp() {
    localStorage.setItem('registered-user', this.email && this.password);
    console.log(
      localStorage.setItem('registered-user', this.email && this.password)
    );
  }

  login() {
    return this.authService.isLoggedIn(), this.router.navigate(['home']);
  }
}
