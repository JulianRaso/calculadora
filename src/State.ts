export default class state {

    static estado = null;
    static estadoAux = null;

    static ResulEstado(a:number){
        
        let mss = "Resultado Erroneo";

        if(this.estado == a){
            return this.estado;
        }
        else{
            return mss;
        }
    }

}