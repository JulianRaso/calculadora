import { expect } from 'chai';
import Calculator from '../src/Calculator';

describe('calculate', function() {
    it('add', function() {
      let result = Calculator.Sum(5, 2);
      expect(result).equal(7);
    }); 
  });

describe('calculate', function(){
    it('add', function() {
        let result = Calculator.Multiplicar(5, 2);
        expect(result).equal(10);
      }); 

});