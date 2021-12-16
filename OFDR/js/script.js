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

let willYouSwim = true;

if (willYouSwim) console.log(' :-) ');

else console.log(' :-( ');