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
        return state.estado = arr.length;
      }

      else{
        let c=0;
        
        for(b=b;b>0;b--){
            for(c=a;c==a;a--){
            }
        }
        return state.estado = a;
      }
    }

    static Multiplicar(a: number, b: number){

        for(let i = 0; i < a; i++){
          state.estado = this.Sumar(b, state.estado)  
        }
    }

    static Dividir(a: number, b: number){
      
      if(a>b){
        while(a > 0){
                  a = this.Resta(a,b);
                  state.estado = this.Sumar(state.estado,1);
                }
                return state.estado;
      }
      else{
        return state.estado = 0;
      }
        
    }

  }