function openNav() {
  document.getElementById("overlay-wrapper").style.width = "100%";
  document.getElementById("overlay-wrapper").style.opacity = "1";
  document.getElementById("overlay-wrapper").style.zIndex = "999";
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("swiper").style.opacity = "0";
  document.getElementById("logo-top").style.opacity = "0";
  document.getElementById("cross").style.opacity = "0";
}

function closeNav() {
document.getElementById("overlay-wrapper").style.opacity = "0";
document.getElementById("overlay-wrapper").style.zIndex = "0";
document.getElementById("swiper").style.opacity = "1";
document.getElementById("logo-top").style.opacity = "1";
document.getElementById("cross").style.opacity = "1";
setTimeout(function() {
    document.getElementById("overlay-wrapper").style.width = "0%";
    document.getElementById("overlay").style.width = "0%";
  }, 500);
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    effect: 'fade',
    speed: 800,
    autoplay: {
      delay: 2800,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
      crossFade: true,
    }
  });


  var tl = gsap.timeline()
    .from("body", {opacity:0, duration: 1.6, delay: .5})


