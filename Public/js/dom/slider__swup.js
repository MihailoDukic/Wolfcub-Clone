import Glide from '@glidejs/glide';
import AOS from '../vendors/aos';

const glide = new Glide('#brands', {
  type: 'carousel',
  perView: 2.5,
  focusAt: 'center',
  autoplay: '1600ms',
  hoverpause: true,
  breakpoints: {
    800: {
      perView: 1.5,
      focusAt: false,
    },
    500: {
      perView: 1.5,
      focusAt: false,
    },
    1000: {
      perView: 2,
      focusAt: false,
    }
    
  }
})
glide.mount(); 

AOS.init();








