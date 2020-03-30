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

      for(let i = 0; i < a; i++){
        arr.push('');  
      }

      for(let i = 0; i < b; i--){
        arr.pop();  
      }
       
      return arr.length;

    }

    static Multiplicar(a: number, b: number){
        let aux = 0;

        for(let i = 0; i < a; i++){
              aux = this.Sumar(b, aux)  
        }

        return aux;
    }

  }