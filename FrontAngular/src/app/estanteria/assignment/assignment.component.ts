import { Component, OnInit } from '@angular/core';
import { EstanteriaService } from '../estanteria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Asigment} from '../asigment';
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
  asigmenentRegistered :any;
  itemsSelected: string[] = [];
  items: string[];
  constructor(private estanteriaService: EstanteriaService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService) { }

  get posicion() {
    return this.asigmenForm.get('posicion');
  }

  ngOnInit(): void {

    this.cargarEstante();
    this.inputForm();


  }


  cargarEstante() {
    const id = this.activatedRoute.snapshot.params.id
    this.estanteriaService.cargarEstanteByID(id).subscribe((resp: any) => {
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

  getdefaultLabel(){

  }
}
