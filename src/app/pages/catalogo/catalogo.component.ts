import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Producto} from 'src/app/interfaces/Productos' 
import { ProductoservService } from 'src/app/productoserv.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  producto:Producto | undefined
  constructor(
    private activatedRoute:ActivatedRoute,
    private productoservService:ProductoservService
  ) {
    const pepe = this.activatedRoute.snapshot.paramMap.get("pepe")
    console.log(pepe)
    if(pepe){
      this.productoservService.getById(pepe)
      .subscribe((data:Producto)=>{
        this.producto=data
    
      })
    }
    
  }

  ngOnInit(): void {
  }

}
