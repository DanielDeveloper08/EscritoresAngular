import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros!: Libro[];
  constructor(private librosService: LibrosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.parent?.params.subscribe(async params=>{
      
      this.libros = await this.librosService.getByEscritor(params['escritorId']);
    })
   
  }

}
