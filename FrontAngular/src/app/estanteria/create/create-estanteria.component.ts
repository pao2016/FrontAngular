import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-estanteria',
  templateUrl: './create-estanteria.component.html',
  styleUrls: ['./create-estanteria.component.css'],
  providers: [MessageService]
})
export class CreateEstanteriaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back() {
    return this.router.navigate(['/estanteria/index']);
  }
}
