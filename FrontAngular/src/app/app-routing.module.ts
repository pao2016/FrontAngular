import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  { path: 'ingresar', component: LoginComponent },

  
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
