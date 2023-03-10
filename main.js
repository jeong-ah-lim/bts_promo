import './scss/style.scss'
//Swiper css
import 'swiper/css';
//additional Swiper css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Swiper module
import Swiper, { Navigation, Autoplay } from 'swiper';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


//init Swiper:
const swiper = new Swiper('.swiper', {
  //Optional parameters
  modules: [Navigation, Autoplay],
  // loop: true,
  // autoplay: {
  //  delay: 3000,
  //  disableOnInteraction: false,
  // }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//gsap animation start


// gsap.registerPlugin(ScrollTrigger);
// let sections = gsap.utils.toArray(".panel");
  // let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none", // <-- IMPORTANT!
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     // snap: directionalSnap(1 / (sections.length - 1)),
//     end: "+=5000" //speed
//   }
// });

// ScrollTrigger.create({
//   trigger: "#gram",
//   containerAnimation: scrollTween,
//   toggleClass: "active",
//   start: "center 60%"
// }); 


//stroke animation - calc getTotalLength strat
// const path = document.querySelector('.cls-1');
// console.log(path.getTotalLength())
//stroke animation - calc getTotalLength end


//intersectionObserver start
const observeEles = document.querySelectorAll('.panel');
const options = {
  threshold: 0.7
}
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  })
}, options)
observeEles.forEach((item, i) => {
  io.observe(item);
});
//intersectionObserver end


//horizontal scroll function start
const container = document.querySelector('.scroll-container');
container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;    
});
//horizontal scroll function end


// let panelWd;
// let ctaBtnWd;
// let ratio;

// const slidePanel = document.querySelector('.slidePanel');
// const ctaBtn = document.querySelector('.ctaBtn');

// function onCalcValue(){  
//   panelWd = slidePanel.getBoundingClientRect().width; //패널의 너비값
//   ctaBtnWd = ctaBtn.getBoundingClientRect().width; //버튼의 너비값
//   ratio = panelWd / ctaBtnWd; //비율
//   ctaBtn.style.Width = `${ratio}px`;
//   console.log(ctaBtnWd);
//   console.log(ratio);
// }


// window.addEventListener('resize', onCalcValue);
// onCalcValue();

