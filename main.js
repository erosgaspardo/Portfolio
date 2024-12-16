function toggleOverlay() {
  var overlay = document.querySelector("body");
  var swiper = document.querySelector(".swiper");

  overlay.classList.toggle('hide-overlay');

  if (overlay.classList.contains('hide-overlay')) {
    // When hide-overlay is added
    swiper.style.opacity = "1";
    swiper.style.zIndex = "1";
  } else {
    // When hide-overlay is removed
    swiper.style.opacity = "0";
    setTimeout(() => {
      swiper.style.zIndex = "-1";

      // Trigger copy animation when hide-overlay is removed
      triggerCopyAnimation();
    }, 1000); // Delay of 1 second
  }
}

gsap.set(".copy span", {
  y: 330,
});

function triggerCopyAnimation() {
  gsap.timeline()
    .to(".copy span", {
      y: 0,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.09,
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: true,
    effect: 'fade',
    speed: 800,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  gsap.timeline()
    .from("body", {
      opacity: 0,
      duration: 1.6,
      delay: 0.5,
    });
});
