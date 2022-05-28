const skills_wrap = document.querySelector( '.skills' );
const skills_bars = document.querySelectorAll( '.skill-progress' );
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

$( '.grid' ).isotope( {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  transitionDuration:'0.6s',
});

window.addEventListener( 'scroll', () =>
{
  skillsEffect();
})

function checkScroll ( el )
{
  let rect = el.getBoundingClientRect();
  
  if ( window.innerHeight >= rect.top + el.offsetHeight ) return true;
  return false;
}

function skillsEffect ()
{
  if ( !checkScroll( skills_wrap ) ) return;
  skills_bars.forEach( skill => skill.style.width = skill.dataset.progress );
}


var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});



function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
