var edad = 10;
var imprime = "";

switch(edad){
    case 18:
        imprime = "es mayor de edad";
    break;
    case 17:
        imprime = "es menor";
    break;
    default:
        imprime = "no se que eres";
    break;
}

console.log(imprime);