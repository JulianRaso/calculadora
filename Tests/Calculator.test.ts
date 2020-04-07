import { expect } from 'chai';
import Calculator from '../src/Calculator';
import state from '../src/State';
import traducir from '../src/Traducir';


// Calculator (Suma,Resta[+,-],Producto,Division)

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      let resultado = Calculator.Sumar(5, 2);
      expect(resultado).equal(7);
    }); 
  });

describe('aritmetica', function(){
  it('Resta 5-2', function() {
      let resultado = Calculator.Resta(5, 2);
      expect(resultado).equal(3);
    }); 
}); 

describe('aritmetica', function(){
  it('Resta 2-3', function() {
     let resultado = Calculator.Resta(2, 3);
      expect(resultado).equal(-1);
    }); 
});

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        let resultado = Calculator.Multiplicar(5, 2);
        expect(resultado).equal(10);
      }); 

});

describe('aritmetica', function(){
  it('Division 6/2', function() {
      let resultado = Calculator.Dividir(6,2);
      expect(resultado).equal(3);
    }); 
});

// State 

describe('Realizador Operaciones', function(){
  it('Suma', function() {
      let Num1 = "unotres";
      let Num2 = "cuatrocinco";
      let Op = "suma";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal(58);
    }); 
});

describe('Realizador Operaciones', function(){
  it('Resta', function() {
      let Num1 = "u not re s";
      let Num2 = "cua troc inc o";
      let Op = "re st a";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal(-32);
    }); 
});

describe('Realizador Operaciones', function(){
  it('Multiplicacion', function() {
      let Num1 = "unotres";
      let Num2 = "dos";
      let Op = "mul tip licar";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal(26);
    }); 
});

describe('Realizador Operaciones', function(){
  it('Division', function() {
      let Num1 = "";
      let Num2 = "";
      let Op = "";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal(0);
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "";
      let Num2 = "";
      let Op = "";

      let result = state.RealizarOp(Num1,Op,Num2);  
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "";
      let Num2 = "";
      let Op = "";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal("Syntax Error");
    }); 
});

//Traducir
