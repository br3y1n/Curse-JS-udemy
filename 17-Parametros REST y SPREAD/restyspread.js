function listadoFrutas (fruta1, fruta2, ...resto_de_frutas){//saves "durzano, melon and papalla" in a array resto_de_frutas REST
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("manzana" , "pera", "durazno" , "melon", "papalla");

var frutitas = ["perita","manzanita"];
listadoFrutas(...frutitas, "sandia", "pera", "melon", "coco"); //SPREAD "...frutitas", converts the parameters of the array into parameters of the function