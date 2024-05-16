import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deberia crear el metodo sumarService1', () => {
    spyOn(service, 'sumarService1');
    service.sumarService1(2,3);
    expect(service.sumarService1).toHaveBeenCalledWith(2,3);
  });

  it('sumarService2 deberia devolver 5', () => {
    spyOn(service, 'sumarService2').and.returnValue(5);
    const resultado = service.sumarService2(4,3);
    expect(resultado).toBe(5);
  });

  it('sumarService2 deberia devolver 7 - con el error corregido', () => {
    // spyOn(service, 'sumarService2');
    const resultado = service.sumarService2(4,3);
    expect(resultado).toBe(7);
  });

  it('sumarService1 deberia devolver 5 - con logica anadida', () => {
    const resultado = service.sumarService1(2,3);
    expect(resultado).toBe(5);
  });

});
