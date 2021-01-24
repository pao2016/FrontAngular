import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'; 
import {AccordionModule} from 'primeng/accordion';     
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { CreateUsuarioComponent } from './usuario/create/create-usuario.component';
import {FormUsuarioComponent} from './usuario/form/form-usuario.component';
import {IndexUsuarioComponent} from './usuario/index/index-usuario.component';
import {ListboxModule} from 'primeng/listbox';
import {ButtonModule} from 'primeng/button';
import { SharedComponent } from './shared/shared.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    CreateUsuarioComponent,
    FormUsuarioComponent,
    IndexUsuarioComponent,
    SharedComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ListboxModule,
    ButtonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
