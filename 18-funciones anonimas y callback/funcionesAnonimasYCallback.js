
function sumar(numero1, numero2, suma1, suma2){ //suma1 and suma2 are callback functions
var suma = numero1 + numero2;

suma1(suma);    //callback
suma2(suma*2);

return suma;

}

sumar(2,7, function(dato){ //anonymous function
    console.log('la suma por 1: ' + dato);
}, dato =>{ //arrow function = anonymous function
    console.log('la suma por 2: ' + dato);
});