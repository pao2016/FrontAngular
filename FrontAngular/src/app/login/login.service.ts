import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../usuario/usuario';
import { map } from 'rxjs/operators';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }



  cargarUsuarios(): any {
    return this.http.get(`${base_url}/users`).pipe(
      map(res => res)
    );


  }
}
