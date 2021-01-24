import {Component, Input, OnInit} from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../usuario';
import {ServiceUserService} from '../service-user.service';
import {Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
  providers: [MessageService]
})
export class FormUsuarioComponent implements OnInit {
  @Input() userData: User;
  @Input() newUser: boolean = true;
  @Input() viewMode: boolean = false;


  user: User = new User();
  userRegistered: User;
  rolsSelect: SelectItemGroup[];
  selectedRols: Array<string> = [];
  calendarES: any;
  minDate: Date;
  userForm: FormGroup;
  msgs: Message[];

  constructor(private  serviceUserService:ServiceUserService, 
    private messageService: MessageService, 
    private router: Router) { }

  get name() {
    return this.userForm.get('name');
  }
  get username() {
    return this.userForm.get('username');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }



  ngOnInit(): void {
    this.user = this.userData ? this.userData : new User();
    this.userRegistered = this.user;

    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[A-Za-z-ñÑáéíóúÁÉÍÓÚ ]+$'),
   
      ]),
     
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.email,
     
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
     
      ]),

      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.email,
     
      ]),
     
    });
  }

  getValuesForm() {
    const USER = new User();
    USER.name = this.name.value;
    USER.username = this.username.value;
    USER.email = this.email.value;
    USER.password = this.password.value;
    
    return USER;
  }

  save() {
    const USER = this.getValuesForm();
    console.log("el usuario a guardar",USER);
    this.serviceUserService.crearUser(USER)  .subscribe( (resp: any) => {
     if (resp.ok){
   
      this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Se guardo correctameente' });
      setTimeout(() => {
        this.router.navigate(['/usuario/index']);
      }, 1000);
    
     } else{
      this.messageService.add({ severity: 'error', summary: 'Información', detail: 'Ups!, transacion no existo' });
     }
    })
    
  }

  

}
