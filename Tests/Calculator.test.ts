import { expect } from 'chai';
import Calculator from '../src/Calculator';

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      let result = Calculator.Sumar(5, 2);
      expect(result).equal(7);
    }); 
  });

describe('aritmetica', function(){
  it('Resta 5-2', function() {
      let result = Calculator.Resta(5, 2);
      expect(result).equal(3);
    }); 
}); 

describe('aritmetica', function(){
  it('Resta 2-3', function() {
      let result = Calculator.Resta(2, 3);
      expect(result).equal(2);
    }); 
});

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        let result = Calculator.Multiplicar(5, 2);
        expect(result).equal(10);
      }); 

});

describe('aritmetica', function(){
  it('Division 6/2', function() {
      let result = Calculator.Dividir(6, 2);
      expect(result).equal(3);
    }); 
});