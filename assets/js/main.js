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
