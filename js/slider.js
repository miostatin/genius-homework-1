const swiper = new Swiper('.procedures__slider', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 16,
	autoHeight: true,





	navigation: {
		nextEl: '.carousel-button-next',
		prevEl: '.carousel-button-prev',
	},

	pagination: {
		el: '.pagination',
		bulletClass: 'pagination__bullet',
		bulletActiveClass: 'pagination__bullet--active'
	},

	breakpoints: {
		520: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		},
	}


});