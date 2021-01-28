import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { EstanteriaService } from '../estanteria.service';
import { exportPDF } from '../../shared/global';
import { Estanteria } from '../estanteria';
import { Asigment } from '../asigment';
@Component({
  selector: 'app-index-estanteria',
  templateUrl: './index-estanteria.component.html',
  styleUrls: ['./index-estanteria.component.css'],
  providers: [MessageService]
})
export class IndexEstanteriaComponent implements OnInit {
  cols: any[];
  lisEstanterias: any[];
  display: boolean = false;
  listEstanteProductos: Asigment[] = [];
  estantePosicion: any = [] = [];
  cols2: any[];
  constructor(private router: Router, private estanteriaService: EstanteriaService) {

    this.cols = [
      { field: 'codigo', header: 'Codigo' },
      { field: 'descripcion', header: 'Descripción' },
      { field: 'fila', header: 'Fila' },
      { field: 'columna', header: 'Columna' },


    ];

    this.cols2 = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'posicion', header: 'Posicion' },

    ]
  }

  ngOnInit(): void {

    this.cargarEstantes();
    this.cargarEstanteProductos();


  }



  cargarEstantes() {
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

  showDialog() {
    this.display = true;
  }

  cargarEstanteProductos() {
    this.estanteriaService.cargaEstanteProductos().subscribe(
      resp => {
        this.listEstanteProductos = resp.estenteproducto;
        console.log(resp)
        this.obterNombres();
      }
    );
  }

  obterNombres() {
    if (this.listEstanteProductos.length > 0) {
      this.listEstanteProductos.forEach(element => {
        //let EstantePosicion = this.getEstanteName(element.idEstante) +  ' : Posicion: '+  element.posicion;
        const objet = {
          nombre: this.getEstanteName(element.idEstante),
          posicion: element.posicion
        }
        this.estantePosicion.push(objet);
        console.log("nombres", this.estantePosicion);
      });

    }

  }


  getEstanteName(id) {

    const estante = this.lisEstanterias.find(x => parseInt(x.id) === id);
    if (estante) {
      return estante.descripcion;
    } else {
      return "";
    }
  }

}


