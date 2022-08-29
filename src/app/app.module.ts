import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HttpClientModule  } from '@angular/common/http';
import { ConcatenarPipe } from './concatenar.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { ListadosModule } from './listados/listados.module';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    ConcatenarPipe,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadosModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
