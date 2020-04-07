
export default class traducir {

    
    static Traductir(a:string):number{

        
        return 0;
    }

    static traducirNumero(num : string){
        let NumTrad = num;
        let final = [];

            
            
            switch(NumTrad){
                case "cer":
                    NumTrad = NumTrad.replace("cero","");
                    final.push("0");
                    break;
                case "uno":
                    NumTrad = NumTrad.replace("uno","");
                    final.push("1");
                    break;
                case "dos":
                    NumTrad = NumTrad.replace("dos","");
                    final.push("2");
                    break;
                case "tre":
                    NumTrad = NumTrad.replace("tres","");
                    final.push("3");
                    break;
                case "cua":
                    NumTrad = NumTrad.replace("cuatro","");
                    final.push("4");
                    break;
                case "cin":
                    NumTrad = NumTrad.replace("cinco","");
                    final.push("5");
                    break;
                case "sei":
                    NumTrad = NumTrad.replace("seis","");
                    final.push("6");
                    break;
                case "sie":
                    NumTrad = NumTrad.replace("siete","");
                    final.push("7");
                    break;
                case "och":
                    NumTrad = NumTrad.replace("ocho","");
                    final.push("8");
                    break;
                case "nue":
                    NumTrad = NumTrad.replace("nueve","");
                    final.push("9");
                    break;
                    
            }
            
        
        return NumTrad;
    }
    
}
