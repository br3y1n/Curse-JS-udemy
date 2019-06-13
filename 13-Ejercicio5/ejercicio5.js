/**
 * Show all numbers that can be divided into a number entered
 */

 var number1 = parseInt(prompt("introducir un nuero", 0));

 for(i = 1; i <= number1; i++){
    if( number1%i == 0 ){
        console.log('es divisible por: ' + i);
    }
 }