$(document).ready(function($) {
	$('.catalog__menu .menu__item').click(function(e) {
		e.preventDefault();

		let blockRep = $(this).parents('.catalog').find('.catalog__wrapper');
		category = $(this).data('category'),
		prevCategory = $('.catalog__menu .menu__item.menu__item--active'),
		prevCategoryId = $('.catalog__menu .menu__item.menu__item--active').data('category');

		prevCategory.removeClass('menu__item--active');
		$('.catalog__menu .menu__item[data-category='+category+']').addClass('menu__item--active');
		$('#stack_'+prevCategoryId).css('display', 'none');
		$('#stack_'+category).css('display', 'flex');
	});
});