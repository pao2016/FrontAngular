import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUsuarioComponent} from './usuario/create/create-usuario.component';
import {IndexUsuarioComponent} from './usuario/index/index-usuario.component';
import {UsuarioComponent} from './usuario/usuario.component';
const routes: Routes = [
  { path: 'ingresar', component: LoginComponent },
  {
    path: 'usuario', component: UsuarioComponent,
    children: [
      { path: 'index', component: IndexUsuarioComponent } ,
      { path: 'crear', component: CreateUsuarioComponent, data: { permission: 'sugerencias.crear' } }
     
    ]
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
