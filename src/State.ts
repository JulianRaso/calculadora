import traducir from '../src/Traducir';
import calculator from '../src/Calculator';
import calculadora from '../src/Calculadora';

export default class state {

    // A y C reciOperen los parametros a calcular, Oper reciOpere la Operacion
    static Num1;
    static Num2;


    static RealizarOp(a:string,b:string,c:string){
        let err = "Syntax Error";
        this.Num1 = a.replace(/\s/g, "");
        let Oper = b.replace(/\s/g, "");
        this.Num2 = c.replace(/\s/g, "");

        if( Oper == "suma"){
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.sumar(this.Num1,this.Num2);
        }
        else if( Oper == "resta"){
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.restar(this.Num1,this.Num2);

        }
        else if( Oper == "multiplicar"){
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.multiplicar(this.Num1,this.Num2);
            
        }
        else if( Oper == "dividir"){
            this.Num1 = traducir.Traductir(this.Num1);
            this.Num2 = traducir.Traductir(this.Num2);
            return calculadora.dividir(this.Num1,this.Num2);
        }
        else{
            if( this.Num1 == "suma" || this.Num2 == "suma"){
                return err;
            }
            else if( this.Num1 == "resta" || this.Num2 == "resta"){
                return err;
    
            }
            else if( this.Num1 == "multiplicar" || this.Num2 == "multiplicar"){
                return err;
                
            }
            else if( this.Num1 == "dividir" || this.Num2 == "dividir"){
                return err;
            }
        }
        

            
    }

}