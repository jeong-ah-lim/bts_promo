import './scss/style.scss'
//Swiper css
import 'swiper/css';
//additional Swiper css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Swiper module
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'


//init Swiper:
const swiper = new Swiper('.swiper', {
  //Optional parameters
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
   delay: 1000,
   disableOnInteraction: false,
  }, 
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// gsap.registerPlugin(ScrollTrigger);


// function onAnim(){
//   gsap.to('.box', {
//     scrollTrigger: {
//       trigger: '.box',
//       markers: true
//     },
//     x : 100,
//     duration: 2
//   }, 1)
// }

// onAnim()