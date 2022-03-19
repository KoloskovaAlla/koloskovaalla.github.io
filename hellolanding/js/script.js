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


$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1.7,
		//slidesToScroll: 3,
		autoplay: true,
		speed: 500,
		easing: 'linear',
		infinite: false,
		autoplay: true,
		autoplaySpeed: 800,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 2,
		waitForAnimate: false,
		//centerMode: true,
		//rows: 2,
		variableWidth: false,
		appendArrows: $('.arrows'),
		appendDots: $('.dots'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1.3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});
});

