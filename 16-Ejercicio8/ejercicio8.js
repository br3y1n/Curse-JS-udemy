// make a calculator

var number1;
var number2;
do{
    number1 = parseInt(prompt("Ingrese el numero 1", 0))
}while(isNaN(number1))

do{
    number2 = parseInt(prompt("Ingrese el numero 2", 0))
}while(isNaN(number2))

console.log('la suma es: ' + (number1+number2));
console.log('la resta es: '+ (number1-number2));
console.log('la multiplicacion es: ' + (number1*number2));
console.log('la division es: ' + (number1/number2));