//DOM

//let box = document.getElementById('box'); //innerHTML show the text or textConctent
let box = document.querySelector('#box'); // select one data
//to select all elements, there is the "querySelectorAll()" method

console.log(box);
console.log(box.innerHTML);

box.style.padding = "20px";
box.className = "clasesita";

function changeColor(color) {
    box.style.background = color;
}

let divs = document.getElementsByTagName('div');
console.log(divs);

let div1 = document.getElementsByClassName('class2');
console.log(div1);
console.log(div1[0].textContent); // just text
console.log(div1[0].innerHTML); // with html



console.log('----------------------- 2 append and prepen');

for (let index in divs) { // it has all array (position, length, name etc)

    if (Number.isInteger(parseInt(index))) {
        let paragraph = document.createElement("p");
        let text = document.createTextNode('aqui se uso el <p>' + index);
        paragraph.append(text);
        divs[index].append(paragraph);
        console.log(index);
        console.log(divs[index]);

    }
}