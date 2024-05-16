import { Component } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  mensaje: string = "";

  constructor(private calculadoraService: CalculadoraService) {}

  sumar(a: number, b:number) {
    // logica del metodo
    this.resultado =  this.calculadoraService.sumarService1(a,b);
  }

  restar(a: number, b:number) {
    // logica del metodo
    this.resultado =  this.calculadoraService.restarService(a,b);
  }

  multiplicar(a: number, b:number) {
    // logica del metodo
    this.resultado =  this.calculadoraService.multiplicarService(a,b);
  }

  dividir(a: number, b:number) {
    // logica del metodo
    try {
      this.resultado = this.calculadoraService.dividirService(a,b);
    } catch (error: any) {
      this.resultado = NaN;
      this.mensaje = error.message;
    }
  }

  sumarTest(a:number, b:number): number {
    return a+b+3;
  }

  esNumeroValido(num: any): boolean {
    return typeof num === 'number' && !isNaN(num);
  }
}
