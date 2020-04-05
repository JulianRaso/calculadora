

export default class traducir {

    
    static Traductir(a:string){
        let origen = a;
        let numFinal = null;

        numFinal = this.traducirNumero(origen.trim());

        return numFinal;

    }

    static traducirNumero(num : string){
        let final;
        switch(num){
            case "cer":
                final = "0";
                break;
            case "uno":
                final = "1";
                break;
            case "dos":
                final = "2";
                break;
            case "tre":
                final = "3";
                break;
            case "cua":
                final = "4";
                break;
            case "cin":
                final = "5";
                break;
            case "sei":
                final = "6";
                break;
            case "sie":
                final = "7";
                break;
            case "och":
                final = "8";
                break;
            case "nue":
                final = "9";
                break;
                
        }
        return final;
    }
}
