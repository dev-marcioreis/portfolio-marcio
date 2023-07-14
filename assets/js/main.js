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


// Active link
const allSections = document.querySelectorAll('section[id]')

const scrollActiveLink = () => {
    const scrollY = window.pageYOffset

    allSections.forEach(sec => {
        const secHeight = sec.offsetHeight
        const secTop = sec.offsetTop - 58
        const secId = sec.getAttribute('id')
        const secClass = document.querySelector('.navbar__menu a[href*=' + secId + ']')

        if(scrollY > secTop && scrollY <= secTop + secHeight) {
            secClass.classList.add('active__link-section')
        } else {
            secClass.classList.remove('active__link-section')
        }
    })
}

window.addEventListener('scroll', scrollActiveLink)


// Close menu navbar when clicking any option
if(window.innerWidth < 992) {
    document.querySelectorAll('.navbar__list .navbar__link').forEach(nav => {
        nav.addEventListener('click', () => {
            hideNavbarMenu()
        })
    })
}


// Change color when scrolling
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling-navbar', window.scrollY)
})

window.addEventListener('scroll', () => {
    document.querySelector('.home__socials').classList.toggle('scrolling-socials', window.scrollY)
})