// const btnHam = document.querySelector('#btnHam')
const btnHam = document.querySelector('#btn-ham')
const header = document.querySelector('.header')
const fadeElements = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

window.onbeforeunload = function(){ 	window.scrollTo(0,0); }

// hamburguer menu
btnHam.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll')
    header.classList.remove('open')
    fadeElements.forEach((element) => {
      element.classList.add('fade-out')
      element.classList.remove('fade-in')
    })
  } else {
    body.classList.add('noscroll')
    header.classList.add('open')
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})
// close the hamburger menu when the screen is bigger
visualViewport.onresize = () => {
  if (visualViewport.width > 1008) {
    if (header.classList.contains('open')) {
      body.classList.remove('noscroll')
      header.classList.remove('open')
      fadeElements.forEach((element) => {
        element.classList.add('fade-out')
        element.classList.remove('fade-in')
      })
    }
  }
}
