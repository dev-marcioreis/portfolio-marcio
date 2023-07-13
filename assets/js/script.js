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