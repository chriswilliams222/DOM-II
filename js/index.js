// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`
let home = document.querySelector('a.nav-link')
home.addEventListener('mouseenter', event => event.target.style.color = 'blue')
home.addEventListener('mouseleave', event => event.
target.style.color = 'black')

let about = document.querySelector('a.nav-link:nth-of-type(2)')
about.addEventListener('mouseenter', event => event.target.style.color = 'grey')
about.addEventListener('mouseleave', event => event.target.style.color = 'black')

let blog = document.querySelector('a.nav-link:nth-of-type(3)')
blog.addEventListener('mouseenter', event => event.target.style.color = 'green')
blog.addEventListener('mouseleave', event => event.target.style.color = 'black')

let contact = document.querySelector('a.nav-link:nth-of-type(4)')
contact.addEventListener('mouseenter', event => event.target.style.color = 'red')
contact.addEventListener('mouseleave', event => event.target.style.color = 'black')

let logo = document.querySelector('.logo-heading')
logo.addEventListener('click', (event) => {
    alert("You're on the Fun Bus!")
  })
let busPic = document.querySelector('header img')
busPic.addEventListener('mouseenter', event => event.target.style.opacity = 0.6)
busPic.addEventListener('mouseleave', event => event.target.style.opacity = 1)


let body = document.querySelector('body')
body.addEventListener('wheel', event => {
    console.log('Window scrolled')
})

let intro = document.querySelector('.intro')
intro.addEventListener('mouseenter', event => event.target.style.background = 'red')


