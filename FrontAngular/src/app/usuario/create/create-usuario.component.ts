import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css'],
  providers: [MessageService]
})
export class CreateUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    return this.router.navigate(['/usuario/index']);
  }

}
