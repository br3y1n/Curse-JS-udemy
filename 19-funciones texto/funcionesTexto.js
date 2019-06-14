 var numero = 444;
var texto1 = "hollaaa que que que que tal";
var texto2 = "que tallll que tal que tal";

numero.toString(); // convert to string
texto1.toLowerCase(); // lowercase text
texto2.toUpperCase();//Uppercase text

texto1.length(); // couent how many characters the text has

var busqueda = texto1.indexOf("que"); // find the first match "que" in the text
texto1.indexOf("que"); // find the last match "que" in the text
texto1.search("que"); // find "que"

texto1.match(/que/g);// find the match in the text and return a array

texto1.substr(14,5); // position 14 and 5 characters from there
texto1.chartAt(5); //return the character in the position 5
texto1.startsWith("holl"); // returns a boolean state - start
texto1.endsWith("holl"); // returns a boolean state - ends
texto1.includes("que"); // returns a boolean state if exists "que" in the text

texto1.replace("que" , "ooo"); //replace que to ooo
texto1.slice(5,7); // cuts the string between 5 and 7
texto1.split(" "); // convert to array the text, every parameters will be separated by " "
texto1.trim(); //deletes final spaces and initial spaces