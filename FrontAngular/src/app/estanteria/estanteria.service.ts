import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Estanteria} from './estanteria';
import { Asigment } from './asigment';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class EstanteriaService {

  constructor(private http: HttpClient) { }


  
  crearEstanteria(estanteria: Estanteria): any {
    let params ={
     codigo : estanteria.codigo,
     descripcion : estanteria.descripcion,
     fila : estanteria.fila,
     columna : estanteria.columna,
 
    }
     return this.http.post(`${base_url}/estante/create`, params);
 
   }
 
   cargaEstanteria(): any {
     return this.http.get(`${base_url}/estantes`).pipe(
       map(res => res)
     );
   }

   cargarEstanteByID(id: any): any {
    
     return this.http.get(`${base_url}/estante/${ id }`);
 
   }

   cargaProductos(): any {
    return this.http.get(`${base_url}/productos`).pipe(
      map(res => res)
    );
  }

  crearEstanteriProducto(asig: Asigment): any {
    let params ={
      idEstante : asig.idEstante,
      idProducto : asig.idProducto,
      posicion :asig.posicion,
   
 
    }
     return this.http.post(`${base_url}/estanteProducto/create`, params);
 
   }

   cargaEstanteProductos(): any {
    return this.http.get(`${base_url}/estanteProducto`).pipe(
      map(res => res)
    );
  }
}
