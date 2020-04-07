import { expect } from 'chai';
import Calculator from '../src/Calculator';
import state from '../src/State';
import Traductor from '../src/Traducir';
import traducir from '../src/Traducir';

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      Calculator.Sumar(5, 2);
      expect(state.ResulEstado(7)).equal(7);
    }); 
  });

describe('aritmetica', function(){
  it('Resta 5-2', function() {
      Calculator.Resta(5, 2);
      expect(state.ResulEstado(3)).equal(3);
    }); 
}); 

describe('aritmetica', function(){
  it('Resta 2-3', function() {
      Calculator.Resta(2, 3);
      expect(state.ResulEstado(-1)).equal(-1);
    }); 
});

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        Calculator.Multiplicar(5, 2);
        expect(state.ResulEstado(10)).equal(10);
      }); 

});

describe('aritmetica', function(){
  it('Division 6/2', function() {
      let resultado = Calculator.Dividir(6,2);
      expect(resultado).equal(3);
    }); 
});

describe('Traductor', function(){
  it('123', function() {
      let result = traducir.Traductir(" cerodos");
      expect(result).equal(0);
    }); 
});
