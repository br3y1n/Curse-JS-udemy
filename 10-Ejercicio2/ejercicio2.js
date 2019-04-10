//use a loop, show the sum and average the numbers input until the entry number is  negative
var number = 0;
var suma = 0;
var conteo = 0;

do{
    number = parseInt(prompt("Ingrese un numero"));
    
    if(!isNaN(number)){
        if(number>=0){
            suma += number;
            conteo ++;
        console.log("1");
        }
    }else{
        number = 0;
        console.log("2");
        
    }
    
}while(number >= 0)
    
alert("la suma es: " + suma + " y el promedio es: " + (suma/conteo));