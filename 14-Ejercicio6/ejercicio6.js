/**
 * Shows if a number is pair or odd 
 * 1. use prompt
 * 2. If isn't  a valid number, request a new number 
 */
var number;
 do{
     number = parseInt(prompt("Introduzca un numero"));
}while(isNaN(number) || number == 0);

for(i=1; i<=number; i++){
    if(i%2 == 0){
        console.log(i + ' Es par');
    }else{
        console.log(i + ' Es impar');
    }
}
 
 



