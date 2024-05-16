import { CalculadoraService } from './../services/calculadora.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let calculadoraService: CalculadoraService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [CalculadoraService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    calculadoraService = TestBed.inject(CalculadoraService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia inicializar correctamente las propiedades', () => {
    expect(component.numero1).toBe(0);
    expect(component.numero2).toBe(0);
    expect(component.resultado).toBe(0);
    expect(component.mensaje).toBe("");
  });

  // se usa espia sobre el servicio pero no se usa .and.callThrough
  // luego se usa ese metodo del servicio desde el metodo sumar del componente
  it('Mediante un espía que vigila el método sumarService y sin ejecutar su lógica, debería realizar la llamada al método sumarService correctamente con los números 2 y 3 desde el método sumar del componente Home', () => {
    spyOn(calculadoraService, 'sumarService1');
    component.sumar(2,3);
    expect(calculadoraService.sumarService1).toHaveBeenCalledWith(2,3);
  });

  it('Debería ejectuar la lógica del método sumarTest correctamente con 2 números', () => {
    expect(component.sumarTest(2,4)).toBe(9);
  });

  it('Controlamos mediante un espía que debería llamar al método sumar correctamente con los números 2 y 3', () => {
    spyOn(component,'sumar');
    component.sumar(2,3);
    expect(component.sumar).toHaveBeenCalledWith(2,3);
  });

  it('Ejecutando la lógica del método sumar, debería sumar dos números correctamente', () => {
    component.sumar(2,3);
    expect(component.resultado).toBe(5);
  });

  it('Ejecutando la lógica mediante un espía, debería restar dos números correctamente', () => {
    spyOn(component,'restar').and.callThrough();
    component.restar(5,3);
    expect(component.resultado).toBe(2);
  });

  it('Comprobamos que podemos llamar al método mutiplicarService y simulamos que devuelve un valor', () => {
    spyOn(calculadoraService,'multiplicarService').and.returnValue(6);
    component.multiplicar(5,3);
    expect(component.resultado).toBe(6);
  });

  it('Ejecutamos la lógica del método mutiplicarService y debería multiplica correctamente dos números', () => {
    component.multiplicar(5,3);
    expect(component.resultado).toBe(15);
  });

  it('Comprobamos a ver si podemos llamara al método dividirService y simulamos que devuelve un valor numérico', () => {
    spyOn(calculadoraService, 'dividirService').and.returnValue(4);
    component.dividir(7,1);
    expect(component.resultado).toBe(4);
  });

  it('Ejecutamos la lógica de dividir y debería dividir dos números correctamente', () => {
    component.dividir(7,1);
    expect(component.resultado).toBe(7);
  });

  it('Comprobamos si podemos llamar a dividirService y mediante .and.throwError forzamos que el texto devuelto es "No se puede dividir por cero"', () => {
    spyOn(calculadoraService, 'dividirService').and.throwError('No se puede dividir por cero');
    component.dividir(7,0);
    expect(component.resultado).toBeNaN();
    expect(component.mensaje).toBe('No se puede dividir por cero');
  });

  it('Ejecutamos la lógica de dividir y debería manejar correctamente la excepción al dividir por cero.', () => {
    component.dividir(7,0);
    expect(component.resultado).toBeNaN();
    expect(component.mensaje).toBe('No se puede dividir por cero');
  });

  it('Debería verificar si un número es válido', () => {
    expect(component.esNumeroValido(1)).toBeTrue();
    expect(component.esNumeroValido(NaN)).toBeFalse();
    expect(component.esNumeroValido('hola')).toBeFalse();
  });
});
