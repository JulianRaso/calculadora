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
        for(let i = 0; i < b; i++){
          arr.push('');  
        }
  
        for(let i = 0; i < a; i++){
          arr.pop();  
        }
        return arr.length;
      }

    }

    static Multiplicar(a: number, b: number){
        let aux = 0;

        for(let i = 0; i < a; i++){
              aux = this.Sumar(b, aux)  
        }

        return aux;
    }

    static Dividir(a: number, b: number){
      let aux = 0;
      let aux1 = a


        while(aux1 > 0){
          aux1 = this.Resta(aux1,b);
          aux = this.Sumar(aux,1);
        }
        return aux;
    }

  }