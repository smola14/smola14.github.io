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

// $('header a').click(function () {
//   $('header a').css('color', 'white')
//   $(this).css('color', '#64ffda')
//   nav.classList.remove('open-nav')
// })

const navbar = document.querySelector('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 30 && window.innerWidth > 920) {
    navbar.classList.add('nav-active')
    navbar.classList.remove('nav-noactive')
  } else {
    navbar.classList.remove('nav-active')
    navbar.classList.add('nav-noactive')
  }
})

const sections = document.querySelectorAll('section')

window.addEventListener('scroll', navHighlighter)

function navHighlighter() {
  let scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 250
    let sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('nav a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

document
  .querySelectorAll('nav li')
  .forEach((link) =>
    link.addEventListener('click', () => nav.classList.remove('open-nav'))
  )

let topArrow = document.querySelector('.fa-arrow-up')
window.onscroll = () => {
  if (window.scrollY > 500 && window.innerWidth < 919.9) {
    topArrow.classList.add('arrow-active')
  } else {
    topArrow.classList.remove('arrow-active')
  }
}

topArrow.addEventListener('click', () => {
  $('html, body').animate({ scrollTop: 0 }, 'fast')
})

const circleDown = document.querySelector('.wrapper-circle')

circleDown.addEventListener('click', () => {
  document.querySelector('#about-me').scrollIntoView({
    behavior: 'smooth',
  })
})
