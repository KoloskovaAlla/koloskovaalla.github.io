$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.footer__label').click(function (event) {

		$(this).toggleClass('active').next().slideToggle(300);
	});
});

// let willYouSwim = true;

// if (willYouSwim) console.log(' :-) ');

// else console.log(' :-( ');


$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 3,
		//slidesToScroll: 3,
		autoplay: true,
		speed: 500,
		easing: 'linear',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
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
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
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