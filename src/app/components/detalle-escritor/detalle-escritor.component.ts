import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.css']
})
export class DetalleEscritorComponent implements OnInit {

  escritor!: Escritor;

  constructor(private activedRouter: ActivatedRoute, private escritorService: EscritoresService) { }

  ngOnInit() {
    this.activedRouter.params.subscribe(async params =>{
      this.escritor = await this.escritorService.getById(parseInt(params['escritorId']));
    })
  }

}
