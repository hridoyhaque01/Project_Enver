

  /*========================== SHOW NAVBAR WHEN IT'S SCROLL ==============================*/
    const navbar = document.querySelector('.navbar')
    function showNav(){
      let scrollY = window.scrollY
      if(scrollY > 60){
        navbar.classList.add('show_navbar')
      }else{
        navbar.classList.remove('show_navbar')
      }
      console.log(scrollY)
    }

  window.addEventListener('load', showNav)
  window.addEventListener('scroll', showNav)

  /*===================> IMPLEMENT LIGHTBOX JS FOR VIDEO POPUP ========================*/

  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /*===================> IMPLEMENT OWL-CAROUSEL JS FOR SLIDER BOX ========================*/

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:50,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          767:{
              items:3,
              nav:false
          },
          991:{
              items:4,
              nav:true,
              loop:false
          }
      }
  })

  