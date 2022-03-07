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

function copyEmail() {
  navigator.clipboard.writeText('dominik.smolinsky@icloud.com')
}

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

const menu = document.querySelector('.menu')
const closeM = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
  nav.classList.add('open-nav')
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 920) {
    nav.classList.remove('open-nav')
  }
})

closeM.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})

$('header a').click(function () {
  $('header a').css('color', 'white')
  $(this).css('color', '#64ffda')
})

const navbar = document.querySelector('nav')
window.onscroll = () => {
  if (window.scrollY > 30 && window.innerWidth > 920) {
    navbar.classList.add('nav-active')
    navbar.classList.remove('nav-noactive')
  } else {
    navbar.classList.remove('nav-active')
    navbar.classList.add('nav-noactive')
  }
}
