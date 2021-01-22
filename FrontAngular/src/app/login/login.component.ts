import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = true;
  loginForm: FormGroup;
  loginData: Login = new Login();
  showHead: boolean;
  incorrectData: boolean;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.loginData.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.loginData.password, [
        Validators.required,
      ])
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }


  onSubmit() {
   
}

}