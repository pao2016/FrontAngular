import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import {EstanteriaService} from '../estanteria.service';
import { exportPDF} from '../../shared/global';
import { Estanteria } from '../estanteria';
@Component({
  selector: 'app-index-estanteria',
  templateUrl: './index-estanteria.component.html',
  styleUrls: ['./index-estanteria.component.css'],
  providers: [MessageService]
})
export class IndexEstanteriaComponent implements OnInit {
  cols: any[];
  lisEstanterias: any[];
  constructor(private router:Router, private estanteriaService:EstanteriaService) { 
    
    this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'descripcion', header: 'Descripción' },
      { field: 'fila', header: 'Fila' },
      { field: 'columna', header: 'Columna' },
     
 
    ];
  }

  ngOnInit(): void {
    
  this.cargarUsuarios();
  }



  cargarUsuarios() {
    this.estanteriaService.cargaEstanteria().subscribe(
      resp => {
        this.lisEstanterias = resp.estanerias;
        console.log(resp)
      }
    );
  }

  exportPdf() {
    const columns = [
      { header: 'codigo', dataKey: 'codigo' },
      { header: 'descripcion', dataKey: 'descripcion' },
      { header: 'fila', dataKey: 'fila' },
      { header: 'columna', dataKey: 'columna' }
    
    ];
    exportPDF(columns, this.dataToExport(), 'usuarios');
  }

  dataToExport() {
    return this.lisEstanterias.map((estanteria: Estanteria) => {
   
      return {
        codigo: estanteria.codigo,
        descripcion: estanteria.descripcion,
        fila: estanteria.fila,
        columna: estanteria.columna,
       
       
      };
    });
  }



  redirect(route, id = false) {
    switch (route) {
      case 'create':
        return this.router.navigate(['/Estanteria/crear']);
        case 'edit':
          return this.router.navigate([`/Estanteria/asignar/${id}`]);
      default: {
        console.log('No correct route.');
      }
    }
  }
}


