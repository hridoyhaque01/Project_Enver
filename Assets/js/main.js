const glightbox = GLightbox({
    selector: '.glightbox'
  });


  var swiper = new Swiper(".portfolio-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });