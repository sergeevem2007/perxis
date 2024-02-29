import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


const promoSlider = new Swiper('.promo__slider', {
	modules: [Pagination],
	direction: 'horizontal',
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 16,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		enabled: true
	},
	breakpoints: {
		640: {
			slidesPerView: 2,

		},
		900: {
			spaceBetween: 36,
			slidesPerView: 3,
			pagination: {
				enabled: false,
			}
		},
	}
});

if (window.innerWidth > 900) {
	promoSlider.update();
}
