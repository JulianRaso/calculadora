import { expect } from 'chai';
import Calculator from '../src/Calculator';
import state from '../src/State';
import traducir from '../src/Traducir';
import calculadora from '../src/Calculadora';

// Calculadora (Suma,Resta[+,-],Producto,Division)

describe('aritmetica', function() {
    it('Sumar 5+2', function() {
      let resultado = calculadora.sumar(5, 2);
      expect(resultado).equal(7);
    }); 
  });

describe('aritmetica', function(){
  it('Resta 5-2', function() {
      let resultado = calculadora.restar(5, 2);
      expect(resultado).equal(3);
    }); 
}); 

describe('aritmetica', function(){
  it('Resta 2-3', function() {
     let resultado = calculadora.restar(2, 3);
      expect(resultado).equal(-1);
    }); 
});

describe('aritmetica', function(){
    it('Multiplicacion 5x2', function() {
        let resultado = calculadora.multiplicar(5, 2);
        expect(resultado).equal(10);
      }); 

});

describe('aritmetica', function(){
  it('Division 6/2', function() {
      let resultado = calculadora.dividir(6,2);
      expect(resultado).equal(3);
    }); 

});describe('aritmetica', function(){
  it('Division Float', function() {
      let resultado = calculadora.dividir(3,4);
      expect(resultado).equal(0.75);
    }); 
});

// State Operaciones

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
      let Num1 = "seisdos";
      let Num2 = "cuatro";
      let Op = "dividir";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal(15.5);
    }); 
});

//State Errores

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "suma";
      let Num2 = "dosuno";
      let Op = "unodos";

      let result = state.RealizarOp(Num1,Op,Num2);  
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "unodos";
      let Num2 = "suma";
      let Op = "dos";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "resta";
      let Num2 = "dosuno";
      let Op = "unodos";

      let result = state.RealizarOp(Num1,Op,Num2);  
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "unodos";
      let Num2 = "resta";
      let Op = "dos";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "multiplicar";
      let Num2 = "dosuno";
      let Op = "unodos";

      let result = state.RealizarOp(Num1,Op,Num2);  
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "unodos";
      let Num2 = "multiplicar";
      let Op = "dos";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "dividir";
      let Num2 = "dosuno";
      let Op = "unodos";

      let result = state.RealizarOp(Num1,Op,Num2);  
      expect(result).equal("Syntax Error");
    }); 
});

describe('Realizador Operaciones', function(){
  it('Parametro Error', function() {
      let Num1 = "unodos";
      let Num2 = "dividir";
      let Op = "dos";

      let result = state.RealizarOp(Num1,Op,Num2);
      expect(result).equal("Syntax Error");
    }); 
});


/*
//Traducir

describe('Traducir', function(){
  it('Test translate', function() {
      let result = traducir.Traductir("unodostrescuatrocincoseissieteochonuevecero");
      expect(result).equal(1234567890);
    }); 
});

describe('Traducir', function(){
  it('Num repetido', function() {
      let result = traducir.Traductir("unouno");
      expect(result).equal(11);
    }); 
});

describe('Traducir', function(){
  it('24 Numeros', function() {
      let result = traducir.Traductir("unounounodosdosdostrestrestrescuatrocuatrocuatrocincocincocincoseisseisseissietesietesieteochoochoocho");
      expect(result).equal(111222333444555666777888);
    }); 
});

*/