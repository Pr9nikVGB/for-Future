function getItems(category, block) {
	$.ajax({
		url: '/ajax/wathces.html',
		type: 'POST',
		dataType: 'html',
	})
	.done(function(data) {
		if (data.length > 0 ) {
			block.replaceWith($(data).filter('#stack_'+category));
		} else {
			block.replaceWith("<p class='text--error'>Товары не найдены!</p>");
		}
	})
	.fail(function() {
		console.log("error");
	})
}
$(document).ready(function($) {
	getItems($('.catalog__menu .menu__item.menu__item--active').data('category'), $('.catalog__menu .menu__item.menu__item--active').parents('.catalog').find('.catalog__wrapper'));
	$('.catalog__menu .menu__item').click(function(e) {
		e.preventDefault();

		let blockRep = $(this).parents('.catalog').find('.catalog__wrapper');
		console.log($(this));
		category = $(this).data('category'),
		prevCategory = $('.catalog__menu .menu__item.menu__item--active');

		prevCategory.removeClass('menu__item--active');
		$('.catalog__menu .menu__item[data-category='+category+']').addClass('menu__item--active');
		getItems(category, blockRep);
	});
});