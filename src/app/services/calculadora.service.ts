import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  sumarService1(a: number, b:number): number {
    // logica del metodo
    return a+b;
  }

  sumarService2(a: number, b:number): number {
    // logica del metodo
    return a+b;
  }

  restarService(a: number, b:number): number {
    // logica del metodo
    return a-b;
  }

  multiplicarService(a: number, b:number): number {
    // logica del metodo
    return a*b;
  }

  dividirService(a: number, b:number): number {
    // logica del metodo
    if (b === 0) {
      throw new Error('No se puede dividir por cero');
    }
    return a/b;
  }
}
