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
      state.estado = arr.length;
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
        state.estado = arr.length;
      }
    }

    static Multiplicar(a: number, b: number){

        for(let i = 0; i < a; i++){
          state.estado = this.Sumar(b, state.estado)  
        }
    }

    static Dividir(a: number, b: number){
      state.estadoAux = a;
      
        while(state.estadoAux > 0){
          state.estadoAux = this.Resta(state.estadoAux,b);
          state.estado = this.Sumar(state.estado,1);
        }
    }

  }