import { Component,  Input, OnInit} from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {Estanteria} from '../../estanteria/estanteria';
import {EstanteriaService} from '../estanteria.service';
@Component({
  selector: 'app-form-estanteria',
  templateUrl: './form-estanteria.component.html',
  styleUrls: ['./form-estanteria.component.css'],
  providers: [MessageService]
})
export class FormEstanteriaComponent implements OnInit {
  @Input() estamteroaData: Estanteria;
  @Input() newUser: boolean = true;
  @Input() viewMode: boolean = false;
  estanteForm: FormGroup;
  msgs: Message[];
  estaeria : Estanteria = new Estanteria; 
  estanteriaRegistered: Estanteria;
  constructor(private messageService: MessageService, 
    private router: Router , private estanteriaService:EstanteriaService  ) { }

    get codigo() {
      return this.estanteForm.get('codigo');
    }
    get descripcion() {
      return this.estanteForm.get('descripcion');
    }
    get fila() {
      return this.estanteForm.get('fila');
    }
    get columna() {
      return this.estanteForm.get('columna');
    }
  
  

  ngOnInit(): void {

    this.estaeria= this.estamteroaData ? this.estamteroaData : new Estanteria();
    this.estanteriaRegistered = this.estaeria;
    this.estanteForm = new FormGroup({
      codigo: new FormControl(this.estaeria.codigo, [
        Validators.required,
        Validators.minLength(4)
      ]),
     
      descripcion: new FormControl(this.estaeria.descripcion, [
        Validators.required,

      ]),
      fila: new FormControl(this.estaeria.fila, [
        Validators.required,
      ]),

      columna: new FormControl(this.estaeria.columna, [
        Validators.required,
     
      ]),
     
    });
  }

  getValuesForm() {
    const ESTANTE = new Estanteria();
    ESTANTE.codigo = this.codigo.value;
    ESTANTE.descripcion = this.descripcion.value;
    ESTANTE.fila = this.fila.value;
    ESTANTE.columna = this.columna.value;
    
    return ESTANTE;
  }

  save() {
    const ESTANTE = this.getValuesForm();
    console.log("el usuario a guardar",ESTANTE);
    this.estanteriaService.crearEstanteria(ESTANTE).subscribe( (resp: any) => {
     if (resp.ok){
   
      this.messageService.add({ severity: 'success', summary: 'Información', detail: 'Se guardo correctameente' });
      setTimeout(() => {
        this.router.navigate(['/Estanteria/index']);
      }, 1000);
    
     } else{
      this.messageService.add({ severity: 'error', summary: 'Información', detail: 'Ups!, transacion no existo' });
     }
    })
    
  }


} // fin del componente
