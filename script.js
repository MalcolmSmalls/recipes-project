const nav = document.querySelector('.right-div-wrapper')
const openNav = document.querySelector('.nav-btn')
const closeNav = document.querySelector('.close-nav-btn')


openNav.addEventListener('click', ()=> {
    nav.classList.add('navigation-open')
})

closeNav.addEventListener('click', ()=> {
    nav.classList.remove('navigation-open')
})