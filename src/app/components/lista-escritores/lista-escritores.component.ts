import { Component, OnInit } from '@angular/core';
import { Escritor } from '../../models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.css']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores!: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit(){
    //this.arrEscritores = this.escritoresService.getAll();
    // this.escritoresService.getAllPromise()
    // .then(escritores => this.arrEscritores = escritores)
    // .catch(error => console.log(error));
    this.arrEscritores = await this.escritoresService.getAllPromise();
  }

  async onChange($eventPais:any){
    const pais: string =  $eventPais.target.value;
    if(pais === 'todos'){
      this.arrEscritores = await this.escritoresService.getAllPromise();
    }else{
      this.arrEscritores = await this.escritoresService.getByPais(pais);
    }
   
  }

}
