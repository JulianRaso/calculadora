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

describe('Traductor', function(){
  it('123', function() {
      let result = traducir.Traductir(" cerodos");
      expect(result).equal(0);
    }); 
});
