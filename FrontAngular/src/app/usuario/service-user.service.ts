import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './usuario';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }



  crearUser(user: User): any {
   let params ={
    username : user.username,
    name : user.name,
    email : user.email,
    password : user.password

   }
    return this.http.post(`${base_url}/user/create`, params);

  }

  cargarUsuarios(): any {
    return this.http.get(`${base_url}/users`).pipe(
      map(res => res)
    );
  }
}
