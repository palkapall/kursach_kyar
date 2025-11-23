document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".comments", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    speed: 800,
    effect: 'slide',
    
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    
    centeredSlides: false,
    roundLengths: true,
    
    navigation: {
      nextEl: ".carousel_next",
      prevEl: ".carousel_back"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger-menu');
  const menu = document.getElementById('menu');
  const button = document.querySelector('.button--uniq');

  burgerMenu.addEventListener('click', function() {
    menu.classList.toggle('menu--active');
    burgerMenu.classList.toggle('menuBU--active');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const labelImgs = document.querySelectorAll('.label');

  for(labeImg of labelImgs){
      labeImg.addEventListener('click', function(event) {
        working = event.currentTarget.parentElement;
        img = event.currentTarget.lastElementChild;
        working.style.backgroundColor = '#FF0055'; 
        addBlock = working.lastElementChild;
        if (!addBlock.classList.contains('block')) {
          addBlock.classList.add('block');             
          working.style.backgroundColor = '#B9FF66';
          working.style.padding='39px 60px 52px 62px';
          img.src = 'img/minus.svg';
        } else {
          addBlock.classList.remove('block'); 
          working.style.backgroundColor = '#F3F3F3'; 
          img.src = 'img/plus.svg';         
        }
      });
  }

 
});

function redirectToPage() {
  window.location.href = 'error.html';
}

function redirectToPage2() {
  window.location.href = 'index.html';
}