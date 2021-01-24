import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }


  crearUser(user){
    
  }

  cargarUsuarios(): any {
    return this.http.get(`${base_url}/users`).pipe(
      map(res => res)
    );
  }
}
