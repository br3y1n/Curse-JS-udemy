// Variables var y let
var global1 = 40;
console.log(global1);
if(true) {
  let global1 = 50; /* el global1 del let solo existe a nivel del if */
  console.log(global1);
}
console.log(global1);
