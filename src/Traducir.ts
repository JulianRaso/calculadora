    export default class traducir {

    static NumTrad;

    static Traductir(a:string):number{
        this.NumTrad=a;

        while (this.NumTrad.contains("uno") || this.NumTrad.contains("dos") || this.NumTrad.contains("tres") || this.NumTrad.contains("cuatro") || this.NumTrad.contains("cinco") || this.NumTrad.contains("seis") || this.NumTrad.contains("seite") || this.NumTrad.contains("ocho") || this.NumTrad.contains("nueve") || this.NumTrad.contains("cero")){
            this.NumTrad = this.NumTrad.replace("uno",1);
            this.NumTrad = this.NumTrad.replace("dos",2);
            this.NumTrad = this.NumTrad.replace("tres",3);
            this.NumTrad = this.NumTrad.replace("cuatro",4);
            this.NumTrad = this.NumTrad.replace("cinco",5);
            this.NumTrad = this.NumTrad.replace("seis",6);
            this.NumTrad = this.NumTrad.replace("siete",7);
            this.NumTrad = this.NumTrad.replace("ocho",8);
            this.NumTrad = this.NumTrad.replace("nueve",9);
            this.NumTrad = this.NumTrad.replace("cero",0);

        }
        
        
        return parseInt(this.NumTrad,10);
    }

}