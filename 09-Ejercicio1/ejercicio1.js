//program that asks for numbers and say if it is greater, lesser or equal
//PLUS: check if the values are numbers or greater than 0

do{
    var number1 = parseInt(prompt("digite el numero 1"));
}while(isNaN(number1) || number1 <=0)

do{
    var number2 = parseInt(prompt("digite el numero 2"));
}while(isNaN(number2) || number2 <=0)

    
if (number1 > number2){
    alert("numero 1: " + number1 + " es mayor que el numero 2: " + number2);
}else if (number1 < number2){
    alert("numero 1: " + number1 + " es menor que el numero 2: " + number2);       
}else if(number1 == number2){
    aler("numero 1: " + number1 + " es igual al numero 2: " + number2);
}else{
    alert("ingrese numeros correctos");
}