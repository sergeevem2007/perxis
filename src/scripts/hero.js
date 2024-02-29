import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const heroSlider = new Swiper('.hero__slider', {
	modules: [Navigation, Pagination],
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
