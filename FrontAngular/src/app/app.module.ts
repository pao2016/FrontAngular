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
import { PanelComponent } from './panel/panel.component';
import {ToolbarModule} from 'primeng/toolbar';
import { EstanteriaComponent } from './estanteria/estanteria.component';
import { CreateEstanteriaComponent } from './estanteria/create/create-estanteria.component';
import { FormEstanteriaComponent } from './estanteria/form/form-estanteria.component';
import { IndexEstanteriaComponent } from './estanteria/index/index-estanteria.component';
import { AssignmentComponent } from './estanteria/assignment/assignment.component';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    CreateUsuarioComponent,
    FormUsuarioComponent,
    IndexUsuarioComponent,
    SharedComponent,
    PanelComponent,
    EstanteriaComponent,
    CreateEstanteriaComponent,
    FormEstanteriaComponent,
    IndexEstanteriaComponent,
    AssignmentComponent

    
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
    TableModule,
    ToolbarModule,
    FieldsetModule,
    CardModule,
    MultiSelectModule,
    DialogModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
