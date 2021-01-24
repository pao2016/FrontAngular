import { Component, OnInit } from '@angular/core';
import { User } from '../usuario';
import { Router } from '@angular/router';
import { exportPDF} from '../../shared/global';
import { Message, MessageService } from 'primeng/api';
import {ServiceUserService} from '../service-user.service';

@Component({
  selector: 'app-index-usuario',
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css'],
  providers: [MessageService]
})
export class IndexUsuarioComponent implements OnInit {
  cols: any[];
  users: any[];
  selectedUser: User;
  response: any[] = [];
  msgs: Message[] = [];
  respoUser: any;

  constructor(private serviceUserService:ServiceUserService , private router:Router) { 
    this.cols = [
      { field: 'username', header: 'Username' },
      { field: 'name', header: 'Nombre' },
      { field: 'username', header: 'UserName' },
      { field: 'email', header: 'Email' },
     
 
    ];
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  
  dataToExport() {
    return this.users.map((user: User) => {
   
      return {
        identificador: user.id,
        username: user.username,
        nombre: user.name,
        correo: user.email,
        contraseña: user.password,
       
      };
    });
  }

  exportPdf() {
    const columns = [
      { header: 'Identificador', dataKey: 'identificador' },
      { header: 'username', dataKey: 'username' },
      { header: 'nombre', dataKey: 'nombre' },
      { header: 'correo', dataKey: 'correo' },
      { header: 'contraseña', dataKey: 'contraseña' }
    ];
    exportPDF(columns, this.dataToExport(), 'usuarios');
  }

  cargarUsuarios() {
    this.serviceUserService.cargarUsuarios().subscribe(
      resp => {
        this.users = resp.user;
        console.log(resp)
      }
    );
  }

  redirect(route, id = false) {
    switch (route) {
      case 'create':
        return this.router.navigate(['/usuario/crear']);
     
      default: {
        console.log('No correct route.');
      }
    }
  }
}
