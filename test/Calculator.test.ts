import { expect } from 'chai';
import Calculator from '../src/Calculator';

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      let result = Calculator.Sumar(5, 2);
      expect(result).equal(7);
    }); 
  });

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        let result = Calculator.Multiplicar(5, 2);
        expect(result).equal(10);
      }); 

});