window.addEventListener('load', function () {

  let
    interval = setInterval(() => console.log('Se cumplio el tiempo'), 3000),
    stop = this.document.getElementById('stop')

  stop.addEventListener('click', () => this.clearInterval(interval))

})