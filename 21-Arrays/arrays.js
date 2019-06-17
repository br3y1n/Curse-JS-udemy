var array1 = ["uno", "dos", "tres"];
var array2 = ["cuatro" , "cinco", 5];


array2.push("hola"); // add the word in the array
array1.pop(); // delete the last word in the array


var indice = array2.indexOf("cinco");

if(indice > -1){
    array2.splice(indice,1); // delete the word in the index "indice"
}
var array_multi = [array1, array2];

var array_multi_string = array_multi.join(); // convert the array in string

var cadena = "text1, text2, text3";

var array_cadena = cadena.split(", "); // convert the string in array according to ", "

array1.sort(); // order by alphabetical order
array2.reverse(); // order by reverse alphabetical order

for(let arrays in array1){ // how foreach
    console.log(array1[arrays]);
}


//search

var array_num = [1,2,3,4,5,6];

array_num.some(valor => valor <= 5);  // false - true if it meet with condition

console.log(array_multi);

console.log(array_multi_string);



