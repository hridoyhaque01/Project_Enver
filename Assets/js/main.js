

  /*========================== SHOW NAVBAR WHEN IT'S SCROLL ==============================*/
    const navbar = document.querySelector('.navbar')
    function showNav(){
      let scrollY = window.scrollY
      if(scrollY > 60){
        navbar.classList.add('show_navbar')
      }else{
        navbar.classList.remove('show_navbar')
      }
    }

  window.addEventListener('load', showNav)
  window.addEventListener('scroll', showNav)

  /*========================== AUTO SELECT NAVBAR WHEN WINDOW SCROLL ==============================*/

  const sections = document.querySelectorAll('section[id')
  
  function autoActive(){

    const scrollY = window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 90,
            sectionId = current.getAttribute('id')
      
      if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight){
        document.querySelector('.navbar_items ul li a[href*='+sectionId + ']').classList.add('active')
      }else{
        document.querySelector('.navbar_items ul li a[href*='+sectionId + ']').classList.remove('active')
      }
    })

  }

  window.addEventListener('load', autoActive)
  window.addEventListener('scroll', autoActive)

  /*===================> SHOW NAVBAR IN MOBILE DEVICE ========================*/
  const navbar_menu = document.querySelector('.navbar_items'),
        showBtn = document.querySelector('.menu_btn'),
        closeBtn = document.querySelector('.close_menu'),
        list = document.querySelectorAll('.navbar_items ul li a')
  
  if(navbar_menu){
    showBtn.addEventListener('click', ()=>{
      navbar_menu.classList.add('mobile-menu')
    })
    closeBtn.addEventListener('click', ()=>{
      navbar_menu.classList.remove('mobile-menu')
    })

    list.forEach(item => {
      item.addEventListener('click',()=>{
        navbar_menu.classList.remove('mobile-menu')
      })
    })
  }

  /*===================> IMPLEMENT LIGHTBOX JS FOR VIDEO POPUP ========================*/

  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /*===================> IMPLEMENT OWL-CAROUSEL JS FOR SLIDER BOX ========================*/

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
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

  