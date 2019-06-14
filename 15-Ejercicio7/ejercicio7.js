// Multiplication table of a number entered by screen 

var number = parseInt(prompt("introduzca un numero", 0));

for(i=1; i<=10; i++){
    var text = number + ' x ' + i + ' = ' + (number*i);
    console.log(text);
    document.write('<p>'+ text+'</p>');
}