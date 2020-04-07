export default class state {

    static estado = 0;

    static ResulEstado(a:number){
        let aux = this.estado;
        this.estado= 0;
        let mss = "Resultado Erroneo";

        if(aux == a){
            return aux;
        }
        else{
            this.estado = 0;
            return mss;
        }
    }

}