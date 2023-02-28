import './scss/style.scss'
//Swiper css
import 'swiper/css';
//additional Swiper css
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//Swiper module
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


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

//gsap animation start
gsap.registerPlugin(ScrollTrigger);

function onAnim(){
  gsap.to('.horSection', {
    scrollTrigger: {
      trigger: '.horSection',
      markers: true,
      // horizontal: true
    },
    x : 100,
    duration: 2
  }, 1)
}

onAnim()



//popup test start

// const testBtn = document.querySelector('.testBtn');
// const popWrap = document.querySelector('.popWrap');
// const closeBtn = document.querySelector('.closeBtn');

// function onPopup(){
//   console.log('show popup');
//   popWrap.style.display = 'flex';

// }
// function onPopdown(e){
//   e.preventDefault();
//   popWrap.style.display = 'none';

// }

// testBtn.addEventListener('click', onPopup)
// closeBtn.addEventListener('click', onPopdown)


//stroke animation strat
const path = document.querySelector('.cls-1');
console.log(path.getTotalLength())