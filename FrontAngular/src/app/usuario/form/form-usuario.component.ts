import {Component, Input, OnInit} from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../usuario';
import {ServiceUserService} from '../service-user.service';
import { MessageService } from 'primeng/api';


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

  constructor(private  serviceUserService:ServiceUserService, 
    private MessageService: MessageService) { }

  get name() {
    return this.userForm.get('name');
  }
  get username() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('name');
  }
  get password() {
    return this.userForm.get('name');
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
    
    return USER;
  }

  save() {
    const USER = this.getValuesForm();
    if (this.newUser) {
      return this.serviceUserService.crearUser(USER);
    } 
  }

  

}
