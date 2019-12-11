let button = document.getElementById('firstButton')
let input = document.getElementById('firstInput')

window.addEventListener('load', () => console.log('cargo el documento'))

button.addEventListener('click', () => { changeColor() })
button.addEventListener('mouseover', () => { button.style.padding = '30px' })
button.addEventListener('mouseout', () => { button.style.padding = '20px' })

input.addEventListener('focus', () => console.log('[focus] Estas dentro del input'))
input.addEventListener('blur', () => console.log('[Blur] Estas fuera del input'))
input.addEventListener('keydown', (event) => console.log('[keydown] Pulsando la tecla ', String.fromCharCode(event.keyCode)))
input.addEventListener('keypress', event => console.log('[keypress] Tecla presionada ', String.fromCharCode(event.keyCode)))
input.addEventListener('keyup', event => console.log('[keyup] Tecla soltada ', String.fromCharCode(event.keyCode)))

function changeColor() {
  let buttonColor = button.style.background
  button.style.background = (buttonColor == 'green') ? 'red' : 'green'
}