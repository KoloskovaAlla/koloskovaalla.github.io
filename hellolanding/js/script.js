$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__row').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

// $(document).ready(function() {
// 	$('.spoiler').click(function(event) {	
// 		$(this).toggleClass('active').next().slideToggle(300);
// 	});
// });

"use strict"

const menuBody1 = document.querySelector('.menu__item1');
document.addEventListener("click", slider1);

function slider1 (event) {
	if (event.target.closest('.menu__item__title1')) {
		menuBody1.classList.toggle('_active');
	}
	if (!event.target.closest('.menu__item__title1')) {
		menuBody1.classList.remove('_active');
	}
}

const menuBody2 = document.querySelector('.menu__item2');
document.addEventListener("click", slider2);

function slider2(event) {
	if (event.target.closest('.menu__item__title2')) {
		menuBody2.classList.toggle('_active');
	}
	if (!event.target.closest('.menu__item__title2')) {
		menuBody2.classList.remove('_active');
	}
}



new Swiper('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},

	slidesPerView: 1,
	spaceBetween: 10,
	autoplay: true,
	delay: 100,

	breakpoints: {
		768: {
			slidesPerView: 1.7
		}
	}

});

