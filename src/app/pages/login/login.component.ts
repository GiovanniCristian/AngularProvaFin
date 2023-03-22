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

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  setEmail(email: string) {
    this.email = email;
    console.log(this.email);

  }

  setPassword(password: string) {
    this.password = password;
    console.log(this.password);

  }

  signUp() {                            //creo un oggetto che contiene all'interno mail e passwrd da salvare//
    localStorage.setItem('registered-user', JSON.stringify({email: this.email, password: this.password}));
    console.log(
      localStorage.getItem('registered-user')
    );
    this.router.navigate(['home']);
  }

  login() {
    this.router.navigate(['home']);
  }
}
