/**
 * Show all odd numbers between two numbers entered by user
 */

 var number1 = parseInt(prompt("Introduzca el numero 1", 0));
 var number2 = parseInt(prompt("Introduzca el numero 2", 0));


 for(i = number1; i <= number2; i++){
    if( i%2 != 0 ){
        console.log(i);
    }
}