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
      return state.estado = arr.length;
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
        state.estado = arr.length;
      }

      else{
        for(let i = 0; i < b; i++){
          arr.push('');  
        }
  
        for(let i = 0; i < a; i++){
          arr.pop();  
        }
        return state.estado = arr.length;
      }
    }

    static Multiplicar(a: number, b: number){

        for(let i = 0; i < a; i++){
          state.estado = this.Sumar(b, state.estado)  
        }
    }

    static Dividir(a: number, b: number){
      let aux=a;
      
        while(aux > 0){
          aux = this.Resta(aux,b);
          state.estado = this.Sumar(state.estado,1);
        }
    }

  }