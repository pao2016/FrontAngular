import { Component, OnInit } from '@angular/core';
import { EstanteriaService } from '../estanteria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../producto';
import { Asigment } from '../asigment';
import { EstanteriaComponent } from '../estanteria.component';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers: [MessageService]
})
export class AssignmentComponent implements OnInit {
  responseEstante: any;
  posicionFilas: any[] = [];
  posicionColumnas: any[] = [];
  matrizFila: any[] = [];
  matrizColumnas: any[] = [];
  matriz: any;
  long: number;
  msgs: Message[];
  asigmenForm: FormGroup;
  asigmenent: Asigment = new Asigment();;
  asigmenentRegistered: any;
  itemsSelected: Producto[];
  items: string[];
  listProductos: any[] = [];
  idEstanteria: number;
  listEstanteProductos: Asigment[] = [];
  existeEstanteria: boolean = false;
  constructor(private estanteriaService: EstanteriaService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService) { }

  get posicion() {
    return this.asigmenForm.get('posicion');
  }

  ngOnInit(): void {

    this.cargarEstante();
    this.inputForm();
    this.cargarProductos();
    this.cargarEstanteProductos();

  }


  cargarEstante() {
    this.idEstanteria = this.activatedRoute.snapshot.params.id;
    this.estanteriaService.cargarEstanteByID(this.idEstanteria).subscribe((resp: any) => {
      this.responseEstante = resp;
      this.obtenerPosiciones(resp.estante.fila, resp.estante.columna);
      console.log(resp);
    })
  }

  obtenerPosiciones(fila, columna) {

    for (let i = 0; i < fila; i++) {
      this.posicionFilas.push(i);
    }
    for (let j = 0; j < columna; j++) {
      this.posicionColumnas.push(j);
    }

  }

  inputForm() {

    this.asigmenForm = new FormGroup({
      posicion: new FormControl(this.asigmenent.posicion, [
        Validators.required,
        Validators.minLength(2)
      ]),

      item: new FormControl({
        value: this.asigmenent.idProducto,

      }),
    });

  }

  cargarProductos() {
    this.estanteriaService.cargaProductos().subscribe(
      resp => {
        this.listProductos = resp.productos;
        console.log(resp)
      }
    );
  }

  cargarEstanteProductos() {
    this.estanteriaService.cargaEstanteProductos().subscribe(
      resp => {
        this.listEstanteProductos = resp.estenteproducto;
        console.log(resp)
      }
    );
  }



  getValuesForm() {
    const ASIG = new Asigment();
    ASIG.posicion = this.posicion.value;
    ASIG.idProducto = this.itemsSelected[0].id;
    ASIG.idEstante = +this.idEstanteria;
    return ASIG;
  }

  save() {

    const ASIG = this.getValuesForm();
    const valid = this.valid();
   
    if (!valid) {
      this.estanteriaService.crearEstanteriProducto(ASIG).subscribe((resp: any) => {
        console.log(resp);
        if (resp.ok) {

          this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Se guardo correctameente' });


        } else {
          this.messageService.add({ severity: 'error', summary: 'Información', detail: 'Ups!, transacion no exista' });
        }
      })

    } else {
      this.messageService.add({ severity: 'error', summary: 'Información', detail: 'Ups!, La posicion no esta disponible' });

    }

  }

  valid(): boolean {

    if (this.listEstanteProductos.length > 0) {
      this.listEstanteProductos.forEach(element => {
        if (element.idEstante === +this.idEstanteria && element.posicion === this.posicion.value) {
          this.existeEstanteria = true;
        } else {
          this.existeEstanteria = false;
        }
      });
    }
    return this.existeEstanteria;
  }



}
