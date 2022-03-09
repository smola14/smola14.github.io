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
window.onscroll = () => {
  if (window.scrollY > 30 && window.innerWidth > 920) {
    navbar.classList.add('nav-active')
    navbar.classList.remove('nav-noactive')
  } else {
    navbar.classList.remove('nav-active')
    navbar.classList.add('nav-noactive')
  }
}

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

window.addEventListener('resize', () => {
  alert(window.innerWidth)
})

// const sections = document.querySelectorAll('section')
// const navLi = document.querySelectorAll('nav li')
// window.addEventListener('scroll', () => {
//   let current = ''
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop
//     const sectionHeight = section.clientHeight
//     if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute('id')
//     }
//   })

//   navLi.forEach((li) => {
//     li.classList.remove('active')
//     if (li.classList.contains(current)) {
//       li.classList.add('active')
//       console.log(li)
//     }
//   })
// })
