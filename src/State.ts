import traducir from '../src/Traducir';
import calculator from '../src/Calculator';

export default class state {


    // A y C reciOperen los parametros a calcular, Oper reciOpere la Operacion

    static RealizarOp(a:string,b:string,c:string){
        let Num1 = a.replace(/\s/g, "");
        let Oper = b.replace(/\s/g, "");
        let Num2 = c.replace(/\s/g, "");

        if( Oper == "suma"){
            Num1 = traducir.traducirNumero(Num1);
            Num2 = traducir.traducirNumero(Num2);
            return calculator.Sumar(Num1,Num2);
        }
        else if( Oper == "resta"){
            Num1 = traducir.traducirNumero(Num1);
            Num2 = traducir.traducirNumero(Num2);
            return calculator.Resta(Num1,Num2);

        }
        else if( Oper == "multiplicar"){
            Num1 = traducir.traducirNumero(Num1);
            Num2 = traducir.traducirNumero(Num2);
            return calculator.Multiplicar(Num1,Num2);
            
        }
        else if( Oper == "dividir"){
            Num1 = traducir.traducirNumero(Num1);
            Num2 = traducir.traducirNumero(Num2);
            return calculator.Dividir(Num1,Num2);
        }
        else{
            if( Num1 == "suma" || Num2 == "suma"){
                return console.log("Syntax Error")
            }
            else if( Num1 == "resta" || Num2 == "resta"){
                return console.log("Syntax Error")
    
            }
            else if( Num1 == "multiplicar" || Num2 == "multiplicar"){
                return console.log("Syntax Error")
                
            }
            else if( Num1 == "dividir" || Num2 == "dividir"){
                return console.log("Syntax Error")
            }
        }
        

            
    }

}