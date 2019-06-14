var nombre = prompt("nombre");
var apellido = prompt("apellido");

var texto = `

    <h1> hola que tal </h1>
    <h3> mi nombre es: ${nombre}</h3>
    <h3> mis apellidos son: ${apellido}</h3>

`; // inverted quotes

document.write(texto);