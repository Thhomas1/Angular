import { Component, OnInit } from '@angular/core';
import {Producto, ResponseProductos} from 'src/app/interfaces/Productos' 
import { ProductoservService } from '../../productoserv.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:Producto[]=[]
  constructor(
    private ProductoservService:ProductoservService
  ) { 
    
     
    this.ProductoservService.getAll()
    .subscribe((data:ResponseProductos)=>{
      console.log(data)
      if(data.results)
      this.productos=data.results
    })
  }
  ngOnInit(): void {
  }

}


