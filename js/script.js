'use strict'

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
  nav.classList.remove('open-nav')
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

// Get all sections that have an ID defined
const sections = document.querySelectorAll('section')

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter)

function navHighlighter() {
  let scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    let sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('nav a[href*=' + sectionId + ']')
        .classList.add('active')
      console.log(sectionId)
    } else {
      document
        .querySelector('nav a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}
