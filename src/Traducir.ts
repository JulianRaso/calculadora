import { nodeModuleNameResolver } from "typescript";


export default class traducir {

    
    static Traductir(a:string){
        let origen = a;
        
        return this.traducirNumero(origen.replace(/\s/g, ""));

    }

    static traducirNumero(num : string){
        let final;

        switch(num){
            case "cer":
                num.replace("cero","");
                final.push("0");
                break;
            case "uno":
                num.replace("uno","");
                final.push("1");
                break;
            case "dos":
                num.replace("dos","");
                final.push("2");
                break;
            case "tre":
                num.replace("tres","");
                final.push("3");
                break;
            case "cua":
                num.replace("cuatro","");
                final.push("4");
                break;
            case "cin":
                num.replace("cinco","");
                final.push("5");
                break;
            case "sei":
                num.replace("seis","");
                final.push("6");
                break;
            case "sie":
                num.replace("siete","");
                final.push("7");
                break;
            case "och":
                num.replace("ocho","");
                final.push("8");
                break;
            case "nue":
                num.replace("nueve","");
                final.push("9");
                break;
                
        }
        let result = final.join();
        return result
    }

    
}
