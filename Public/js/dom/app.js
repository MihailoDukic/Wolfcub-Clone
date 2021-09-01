import { gsap } from "../vendors/gsap.min.js";
import { ScrollTrigger } from "../vendors/ScrollTrigger.min.js";

// Onload animation la = loading animation 

window.onload = () => {
  const preload = gsap.timeline();
  preload.to('.preloader',{opacity: 0,visibility:'hidden'});
};


// GSAP TIMELINE & SCROLLTRIGGER

const tl = gsap.timeline({
  defaults: {
    duration: .1,
    ease: 'power1.easeInOut',
  }
});
tl.to('.bar-one', { x: 1000, opacity: 0 });
tl.to('.bar-two', { top: '50%', rotate: 45 });
tl.to('.bar-three', { top: '50%', rotate: 135 });

tl.to('.nav-container', { opacity: 1, visibility: 'visible', overflow: 'hidden' });
tl.to('.menu .list', { stagger: 0.2, opacity: 1 });
tl.to('.contact-details p', { opacity: 1, stagger: 0.2 });
tl.to('.contact-details .social', { opacity: 1, stagger: 0.2 });
tl.to('body', {position: 'fixed'})
tl.reversed(true);

const animateMenu = () => {
  tl.reversed(!tl.reversed());
};

document.querySelector('.toggle-menu').addEventListener('click', animateMenu);


// wolf story 
// Grabbing all trees 

const story = gsap.timeline({
  scrollTrigger: {
    trigger: '.story',
    start: '+=-450',
    height: 'auto',
    scrub:true
  }
});
story.to('.tree-one', {opacity: 0.1})
story.to('.container-one', {opacity: 0.6, marginTop: 0})
story.to('.wolf-left', {left: '0'})
story.to('.container-two', {opacity: 0.6, marginTop: 0})
story.to('.wolf-right', {right: '0'})
story.to('.container-three', {opacity: 0.6, marginTop: 0})
story.to('.tree-two', {opacity: 0.1})
story.to('.tree-three', {opacity: 0.1})
story.to('.tree-four', {opacity: 0.1})
story.to('.tree-five', {opacity: 0.1})


// Filter 

const blogs = document.querySelectorAll('.blog');
const filters = document.querySelectorAll('.filter');

const filterBlogs = () => {
  // grab each blog
  blogs.forEach(() => { });

  // filters & blogs 

  filters.forEach(() => {

    //filter All
    filters[0].addEventListener('click', () => {
      // filters 
      filters[0].classList.add('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');

      setTimeout(() => {
        //blogs all 
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.remove('hide');
        blogs[3].classList.remove('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.remove('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500)
    });

    //filter Design thinking
    filters[1].addEventListener('click', () => {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.add('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');

      setTimeout(() => {
        //blogs design thinking
        blogs[0].classList.add('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.add('hide');
        blogs[11].classList.add('hide');
      }, 500)
    });

    //filter User experience
    filters[2].addEventListener('click', () => {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.add('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');

      setTimeout(() => {

        //blogs design thinking
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.add('hide');
        blogs[11].classList.remove('hide');
      }, 500)
    });

    //filter design
    filters[3].addEventListener('click', () => {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.add('active');
      filters[4].classList.remove('active');
      filters[5].classList.remove('active');

      setTimeout(() => {
        //blogs all 
        blogs[0].classList.add('hide');
        blogs[1].classList.add('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.add('hide');
        blogs[6].classList.add('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.add('hide');
        blogs[9].classList.add('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500)
    });

    //filter brand
    filters[4].addEventListener('click', () => {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.add('active');
      filters[5].classList.remove('active');

      setTimeout(() => {
        //blogs all 
        blogs[0].classList.add('hide');
        blogs[1].classList.add('hide');
        blogs[2].classList.add('hide');
        blogs[3].classList.add('hide');
        blogs[4].classList.add('hide');
        blogs[5].classList.add('hide');
        blogs[6].classList.add('hide');
        blogs[7].classList.add('hide');
        blogs[8].classList.add('hide');
        blogs[9].classList.add('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.add('hide');
      }, 500)
    });

    //filter news
    filters[5].addEventListener('click', () => {
      // filters 
      filters[0].classList.remove('active');
      filters[1].classList.remove('active');
      filters[2].classList.remove('active');
      filters[3].classList.remove('active');
      filters[4].classList.remove('active');
      filters[5].classList.add('active');


      setTimeout(() => {
        //blogs all 
        blogs[0].classList.remove('hide');
        blogs[1].classList.remove('hide');
        blogs[2].classList.remove('hide');
        blogs[3].classList.remove('hide');
        blogs[4].classList.remove('hide');
        blogs[5].classList.remove('hide');
        blogs[6].classList.remove('hide');
        blogs[7].classList.remove('hide');
        blogs[8].classList.remove('hide');
        blogs[9].classList.remove('hide');
        blogs[10].classList.remove('hide');
        blogs[11].classList.remove('hide');
      }, 500)
    });
  });

};

  filterBlogs();
