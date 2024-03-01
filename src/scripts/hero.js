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
		enabled: false,
	},
	breakpoints: {
		1400: {
			navigation: {
				enabled: true,
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		},
	}
});

if (window.innerWidth > 1400) {
	heroSlider.update();
}
