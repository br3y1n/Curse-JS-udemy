//Browser Object Model

console.log(window.innerWidth); //browser width
console.log(window.innerHeight); //browser height



function getDimentionsBrowser() {
    console.log(window.innerWidth); //browser width
    console.log(window.innerHeight); //browser height
}


function redirect(url) {
    window.location.href = url;
}

function openWindow(url) {
    window.open(url, '', 'width=200,height=200');
}