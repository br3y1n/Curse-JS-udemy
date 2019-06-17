/**
 * make a program that asks me 6 number per screen and add it in a array
 * shows the array (all elements) in the body of the page and in the console
 * order array
 * reverse array
 * shows how many elements the array has
 * search of a value introduced by user, says me if finds it and your index 
 */

var numeros = [];

for(i=1; i<=6; i++){
    numeros.push(parseInt(prompt("introduzca el numero"+i+" para el array")));
}

console.log(numeros);
document.write(numeros);

console.log(numeros.sort());
console.log(numeros.reverse());

console.log("el array tiene " + numeros.length+" elementos");

var busqueda = parseInt(prompt("buscar numero"));
console.log(numeros.find(numero => numero == busqueda));
console.log(numeros.findIndex(numero => numero == busqueda));


 