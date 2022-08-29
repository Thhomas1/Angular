import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators"
import { Observable } from 'rxjs';
import { Producto, ResponseProductos } from './interfaces/Productos';
import {lastValueFrom} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ProductoservService {

  constructor(
    private http:HttpClient
  ) { }
  getAll():Observable<ResponseProductos>{
    return this.http.get<ResponseProductos>("https://api.mercadolibre.com/sites/MLA/search?q=ipod")
  }
  getAllAsync(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").pipe(map((value:any)=>{return value["results"]}))
  }
  getAllPromise(){
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod"))
    
  }
  getById(id:string):Observable<Producto>{
    return this.http.get<Producto>("https://api.mercadolibre.com/items/"+id)
  }
 // pepito(pepe:string):Observable<Producto>{
  //  return this.http.get<Producto>("https://api.mercadolibre.com/items/"+pepe) Lo saque por estetica, pero queria probar si funcionaba!
 // } 
}

