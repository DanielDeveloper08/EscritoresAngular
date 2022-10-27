import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll(): Escritor[]{
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]>{
    return new Promise((resolve,reject)=>{
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais:string): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
       const escritoresByPais = ESCRITORES.filter(escritor => escritor.pais === pPais);
       resolve(escritoresByPais);
    });
  }

  getById(escritorId:number): Promise<Escritor>{
    return new Promise((resolve, reject)=>{
       const escritorById = ESCRITORES.find(escritor => escritor.id === escritorId);
       resolve(escritorById!);
    });
  }
}
