import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUsuarioComponent } from './usuario/create/create-usuario.component';
import { IndexUsuarioComponent } from './usuario/index/index-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PanelComponent } from './panel/panel.component';
import {CreateEstanteriaComponent} from './estanteria/create/create-estanteria.component';
import {IndexEstanteriaComponent} from './estanteria/index/index-estanteria.component';
import {EstanteriaComponent} from './estanteria/estanteria.component';
import {AssignmentComponent} from './estanteria/assignment/assignment.component';
const routes: Routes = [
  { path: 'ingresar', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  {
    path: 'Estanteria', component: EstanteriaComponent,
    children: [
      { path: 'index', component: IndexEstanteriaComponent },
      { path: 'crear', component: CreateEstanteriaComponent },
      { path: 'asignar/:id', component: AssignmentComponent },

    ],
  },
  {
    path: 'usuario', component: UsuarioComponent,
    children: [
      { path: 'index', component: IndexUsuarioComponent },
      { path: 'crear', component: CreateUsuarioComponent },

    ],

  },
  {
    path: '**',
    redirectTo: '/ingresar',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
