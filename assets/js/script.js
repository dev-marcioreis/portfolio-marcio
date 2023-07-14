// Swiper
let swiperProjects = new Swiper(".projects__container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: -20,
        },
      },
  });


// Scroll Up
const scrollUp = () => {
  const scrollUp = document.querySelector('.scroll__up')

  if(this.scrollY >= 200) {
      scrollUp.classList.add('show-scroll')
  } else {
      scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', scrollUp)


// Portfolio
const eye = document.querySelector('.portfolio__eye')
const back = document.querySelector('.btn__back')

let tOne = gsap.timeline( {paused: true, reversed: true} )
let tTwo = gsap.timeline( {paused: true, reversed: true} )

eye.addEventListener('click', () => {
  tTwo.play()
})

back.addEventListener('click', () => {
  tTwo.reverse()
})

tOne.play()

tOne.from('.btn__back', {
    ease: "elastic.out(1, .8)",
    scale: 0,
    duration: 1.5
}, 0.6)

tTwo.to('.portfolio__image', {
  ease: 'elastic.out(1, .8)',
  top: '-60%',
  duration: .1,
})

tTwo.to('.portfolio__title', {
  ease: 'elastic.out(.5, .8)',
  bottom: '-25%'
}, .1)

tTwo.to('.portfolio__eye i', {
  ease: 'power1.inOut',
  scale: 0,
  duration: .1,
}, .1)

tTwo.to('.portfolio__eye', {
  ease: 'power1.inOut',
  scaleY: 20,
  width: 300,
  duration: 0.1,
}, 0.1)


tTwo.to('.portfolio__image-1', {
  ease: 'elastic.out(1, .8)',
  top: '0%',
  duration: 1.5,
}, 0.5)

tTwo.to('.layer__title', {
  ease: 'elastic.out(1, .8)',
  left: '60%',
  duration: 1.5,
}, 0.5)

tTwo.to('.portfolio__sumary-1', {
  ease: 'elastic.out(1, .8)',
  top: '53%',
  duration: 1.5,
}, 0.5)

tTwo.to('.portfolio__sumary-2', {
  ease: 'elastic.out(1, .8)',
  top: '60%',
  duration: 1.5,
}, 0.5)

tTwo.to('.portfolio__btns', {
  ease: 'elastic.out(1, .8)',
  bottom: '3%',
  duration: 1.5,
}, 0.5)


// Contact
const contactForm = document.querySelector('#contactForm')
const contactName = document.querySelector('#contactName')
const contactEmail = document.querySelector('#contactEmail')
const contactProject = document.querySelector('#contactProject')
const contactMessage = document.querySelector('#contactMessage')

const sendEmail = e => {
  e.preventDefault()

    if(contactName.value === '' | contactEmail.value === '' | contactProject.value === '') {
      contactMessage.classList.remove('contact__message-blue')
      contactMessage.classList.add('contact__message-red')

      contactMessage.textContent = '*Preencha os campos'
    } else {
      emailjs.sendForm('service_94ioeei', 'template_5qerzom', '#contactForm', 'Zsn6MiCroxal55rla')
        .then(() => {
          contactMessage.classList.add('contact__message-blue')
          contactMessage.textContent = 'Projeto enviado!'

          setTimeout(() => {
            contactMessage.textContent = ''
          }, 4000)

        }, (error) => {
          alert('Desculpe o transtorno, estamos verificando...', error)
        })

        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
  
}

contactForm.addEventListener('submit', sendEmail)


// Scrollbar
let progressScrollbar = document.querySelector('.progress-scrollbar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function() {

    let progressHeight = (window.pageYOffset / totalHeight) * 100
    progressScrollbar.style.height = progressHeight + '%'


}


// Scrollreveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})

sr.reveal(`.home__content, .home__title`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.sec__title, .sec__subtitle, .skills__title`, {delay: 500, origin: 'top', interval: 100})
sr.reveal(`.skills__data`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.qualifications__content`, {delay: 400, origin: 'bottom', interval: 100})
sr.reveal(`.services__card, .services__description`, {delay: 500, origin: 'top', interval: 100})
sr.reveal(`.portfolio__card`)
sr.reveal(`.contact__title`, {delay: 300, origin: 'top'})
sr.reveal(`.contact__info, .contact__form`, {delay: 500, origin: 'bottom', interval: 100})
sr.reveal(`.footer__container`, {delay: 200, origin: 'bottom'})