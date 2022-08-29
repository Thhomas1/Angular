import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ErrorComponent } from './pages/error/error.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"error",component:ErrorComponent},
  {path:"alta",component:RegistroComponent},
  {path:"baja",component:LoginComponent},
  {path:"detalle/:id",component:DetalleComponent},
  {path:"catalogo",component:CatalogoComponent},
  //{path:"catalogo/:pepe",component:CatalogoComponent}, aca probe si funcionaba y lo hizo pero lo saque por estetica!
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
