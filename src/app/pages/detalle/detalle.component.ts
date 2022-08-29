import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Producto} from 'src/app/interfaces/Productos' 
import { ProductoservService } from 'src/app/productoserv.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  producto:Producto | undefined
  constructor(
    private activatedRoute:ActivatedRoute,
    private productoservService:ProductoservService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(id)
    if(id){
      this.productoservService.getById(id)
      .subscribe((data:Producto)=>{
        this.producto=data
    
      })
    }
    
  }

  ngOnInit(): void {
  }

}
