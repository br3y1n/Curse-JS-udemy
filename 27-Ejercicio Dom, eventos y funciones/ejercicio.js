window.addEventListener('load', function () {

  let
    form = document.getElementById('myForm'),
    name = document.getElementById('name').value,
    lastName = document.getElementById('lastName').value,
    age = document.getElementById('age').value,
    buttonSend = document.getElementById('send'),
    buttonShow = document.getElementById('show'),
    content = document.getElementById('boxContent')


  buttonSend.addEventListener('click', function () {
    if (validateInputs())
      form.submit()
  })

  buttonShow.addEventListener('click', function () {
    if (validateInputs())
      content.innerHTML = `<p> Nombre: ${name}</p>
                        <p>Apellidos: ${lastName}</p>
                        <p>Edad: ${age}</p>`
  })

  function validateInputs() {

    name = document.getElementById('name').value
    lastName = document.getElementById('lastName').value
    age = document.getElementById('age').value

    if (name === null || name.trim().length == 0) {
      alert('Verifique el nombre')
      return false
    }

    if (lastName === null || lastName.trim().length == 0) {
      alert('Verifique los apellidos')
      return false
    }

    if (age === null || age.trim().length == 0 || isNaN(parseInt(age.trim()))) {
      alert('Verifique la edad')
      return false
    }

    return true
  }
})