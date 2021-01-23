import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  login = true;
  loginForm: FormGroup;
  loginData: Login = new Login();
  showHead: boolean;
  incorrectData: boolean;
  users: any[] = [];
  msgs: Message[];
  constructor(
    private loginService: LoginService,
    private messageService: MessageService

  ) {
    this.cargarUsuarios();
  }

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

  cargarUsuarios() {
    this.loginService.cargarUsuarios().subscribe(
      resp => {
        this.users = resp.user;
        console.log(resp)
      }
    );
  }

  aceptar() {
    const existe = this.users.filter(x => x.email === this.email.value);
    console.log(existe);
    if (existe.length > 0) {
      this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Login correcto' });
    }
    else {
      this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Correo y/o contraseña incorrectos' });
    }
  }

  validSesion() {


  }
}