import state from '../src/State';
export default class calculator {

    static Sumar(a: number, b: number){
        const arr = [];

      for(let i = 0; i < a; i++){
        arr.push('');  
      }

      for(let i = 0; i < b; i++){
        arr.push('');  
      }
      return arr.length;
    }

    static Resta(a: number, b: number){
      const arr = [];

      if(a > b){

        for(let i = 0; i < a; i++){
          arr.push('');  
        }
  
        for(let i = 0; i < b; i++){
          arr.pop();  
        }
        return arr.length;
      }

      else{
        let c=0;
        
        for(b=b;b>0;b--){
            for(c=a;c==a;a--){
            }
        }
        return a;
      }
    }

    static Multiplicar(a: number, b: number){
      let aux;

        for(let i = 0; i < a; i++){
          aux = this.Sumar(b, aux);  
        }
        return aux;
    }

    static Dividir(a: number, b: number){
      let aux = 0;
      
      if(a>b){
        while(a > 0){
                  a = this.Resta(a,b);
                  aux = this.Sumar(aux,1);
                }
                return aux;
      }
      else{
        return aux;
      }
        
    }

  }