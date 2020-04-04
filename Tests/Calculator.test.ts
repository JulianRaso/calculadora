import { expect } from 'chai';
import Calculator from '../src/Calculator';
import state from '../src/State';

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      Calculator.Sumar(5, 2);
      expect(state.estado).equal(7);
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
      expect(state.estado).equal(2);
    }); 
});

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        Calculator.Multiplicar(5, 2);
        expect(state.estado).equal(10);
      }); 

});

describe('aritmetica', function(){
  it('Division 6/2', function() {
      Calculator.Dividir(6, 2);
      expect(state.estado).equal(3);
    }); 
});
