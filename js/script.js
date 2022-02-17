'use strict'

var app = document.getElementById('app')

var typewriter = new Typewriter(app, {
  loop: true,
})

typewriter
  .typeString('HTML')
  .pauseFor(10)
  .deleteAll()
  .typeString('CSS')
  .pauseFor(10)
  .deleteAll()
  .typeString('SASS')
  .pauseFor(10)
  .deleteAll()
  .typeString('BOOTSTRAP')
  .pauseFor(10)
  .deleteAll()
  .typeString('JAVASCRIPT')
  .pauseFor(10)
  .deleteAll()
  .typeString('VUE')
  .pauseFor(10)
  .deleteAll()
  .typeString('GIT')
  .pauseFor(10)
  .deleteAll()
  .typeString('GITHUB')
  .pauseFor(10)
  .deleteAll()
  .start()

const navbar = document.querySelector('.navbar')
window.onscroll = () => {
  if (window.scrollY > 80) {
    navbar.classList.add('nav-active')
    navbar.classList.remove('nav-noactive')
  } else {
    navbar.classList.remove('nav-active')
    navbar.classList.add('nav-noactive')
  }
}

function copyEmail() {
  navigator.clipboard.writeText('dominik.smolinsky@icloud.com')
}

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
