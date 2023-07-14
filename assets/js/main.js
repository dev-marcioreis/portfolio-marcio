// Show and hide navbar menu
const navbarMenu = document.querySelector('#navbarMenu')
const navbarToggle = document.querySelector('#navbarToggle')
const navbarClose = document.querySelector('#navbarClose')

// Show Navbar menu
const showNavbarMenu = () => {
    navbarMenu.classList.add('show__menu')
}

navbarToggle.addEventListener('click', showNavbarMenu)

const hideNavbarMenu = () => {
    navbarMenu.classList.remove('show__menu')
}

navbarClose.addEventListener('click', hideNavbarMenu)


// Close menu navbar when clicking any option
if(window.innerWidth < 992) {
    document.querySelectorAll('.navbar__list .navbar__link').forEach(nav => {
        nav.addEventListener('click', () => {
            hideNavbarMenu()
        })
    })
}


// Change menu navbar color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolling-navbar', window.scrollY)
})

window.addEventListener('scroll', () => {
    document.querySelector('.home__socials').classList.toggle('scrolling-socials', window.scrollY)
})