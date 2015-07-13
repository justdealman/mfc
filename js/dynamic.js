$(document).ready(function() {
if ( $('.filter').length > 0 ) {
	var filterNum = $('section.list .filter .number > ul > li');
	filterNum.children('span').bind('click', function(event) {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().removeClass('active');
		}
		else {
			$(this).parent().addClass('active');
		}
		event.preventDefault();
	});
	filterNum.find('ul li').bind('click', function(event) {
		$(this).hide().siblings().show();
		filterNum.children('span').find('em').empty().text($(this).text());
		filterNum.removeClass('active');
		event.preventDefault();
	});
	$('html').click(function() {
		filterNum.removeClass('active');
	});
	filterNum.click(function(event){
		event.stopPropagation();
	});
	$('.filter input.from, .filter input.to').datepicker({
		monthNames: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
		dayNamesShort: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
		prevText: '',
		nextText: '',
		dateFormat: 'dd.mm.yy',
		showOtherMonths: true
	});
}
if ( $('section.list .core').length > 0 ) {
	$('section.list .core ul li p.place[data-address]').hover(
		function() {
			$('body').append('<p class="bubble-address">'+$(this).attr('data-address')+'</p>');
			$('.bubble-address').css({
				'left': $(this).offset().left+'px',
				'top': $(this).offset().top+'px'
			});
		},
		function() {
			$('.bubble-address').remove();
		}
	);
}
if ( $('input[type="checkbox"]').length > 0 ) {
	$('input[type="checkbox"]').uniform();
}
$('input.phone').mask('+7 000 000 00 00', {placeholder: '+7'});
if ( $('.modal').length > 0 ) {
	$('.modal').append('<span class="close"></span>');
}
$('[data-open]').bind('click', function(event) {
	var target = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
	target.css({
		'top': $(document).scrollTop()+($(window).height()-target.outerHeight())/2+'px'
	}).stop(true,true).fadeIn(200);
	$('.fade').stop(true,true).fadeIn(200);
	event.preventDefault();
});
if ( $('.modal .order .drop').length > 0 ) {
	var deliveryType = $('.modal .order .drop > li');
	deliveryType.children('div').bind('click', function(event) {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().removeClass('active');
		}
		else {
			$(this).parent().addClass('active');
		}
		event.preventDefault();
	});
	deliveryType.find('ul li').bind('click', function(event) {
		$(this).hide().siblings().show();
		deliveryType.children('div').find('span').empty().html($(this).html());
		deliveryType.removeClass('active');
		event.preventDefault();
	});
	$('html').click(function() {
		deliveryType.removeClass('active');
	});
	deliveryType.click(function(event){
		event.stopPropagation();
	});
}
$('.modal .block').bind('click', function() {
	$(this).parents('.modal').find('.constant h6.active').removeClass('active').addClass('inactive').empty().text('Заблокирована');
	$(this).parents('.modal').find('button.unblock').show();
	$(this).parents('.modal').find('button.block').hide();
	event.preventDefault();
});
$('.modal .edit').bind('click', function() {
	$(this).parents('.modal').find('.restrictions h6.add').show();
	$(this).parents('.modal').find('button.edit').hide();
	$(this).parents('.modal').find('button.save').show();
	if ( $(this).parents('.modal').find('.restrictions-edit').length > 0 ) {
		$(this).parents('.modal').find('.restrictions-edit').show();
	}
	if ( $(this).parents('.modal').find('.restrictions-list').length > 0 ) {
		$(this).parents('.modal').find('.restrictions-list').hide();
	}
	event.preventDefault();
});
$('.modal .unblock').bind('click', function() {
	$(this).parents('.modal').find('.constant h6.inactive').removeClass('inactive').addClass('active').empty().text('Активна');
	$(this).parents('.modal').find('button.unblock').hide();
	$(this).parents('.modal').find('button.block').show();
	event.preventDefault();
});
$('.modal .close, .fade').bind('click', function(event) {
	$('.modal, .fade').stop(true,true).fadeOut(200);
	event.preventDefault();
});
if ( $('.restrictions-edit').length > 0 ) {
	$('.restrictions-edit .select').each(function() {
		var selected = $(this).find('span').attr('data-selected');
		$(this).find('span').text($(this).find('li[data-option="'+selected+'"]').text());
		$(this).find('li[data-option="'+selected+'"]').hide();
	});
	$('.restrictions-edit li .more').bind('click', function(event) {
		$(this).parents('li').append('<div><ul class="select type1"><li><span data-selected="1"></span><ul><li data-option="1">Сезонное</li><li data-option="2">Евро</li><li data-option="3">Что-то еще</li></ul></li></ul><span class="hide"></span></div>');
		event.preventDefault();
	});
	$('.restrictions .add span').bind('click', function(event) {
		$(this).parents('.restrictions').find('.empty').hide();
		$(this).parent().siblings('.restrictions-edit').show();
		$(this).parents('.restrictions').find('.restrictions-edit').append('<li><div><ul class="select type1"><li><span data-selected="3"></span><ul><li data-option="1">Дизельное топливо Арктическое</li><li data-option="2">Бензин Аи-92</li><li data-option="3">Бензин Аи-95</li></ul></li></ul><span class="more"></span><span class="input"><input type="text" value="1"><em>л</em></span><ul class="select type2"><li><span data-selected="1"></span><ul><li data-option="1">в день</li><li data-option="2">в неделю</li><li data-option="3">в месяц</li><li data-option="4">в год</li></ul></li></ul><span class="remove"></span></div></li>')
		event.preventDefault();
	});
	$('.restrictions-edit .select span').bind('click', function(event) {
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().removeClass('active');
			$(this).parents('.select').css({
				'z-index': '10'
			});
		}
		else {
			$(this).parent().addClass('active');
			$(this).parents('.select').css({
				'z-index': '50'
			});
		}
		event.preventDefault();
	});
	$('.restrictions-edit .select ul li').bind('click', function(event) {
		var parent = $(this).parents('.select');
		$(this).hide().siblings().show();
		parent.find('span').text($(this).text());
		parent.find('span').attr('data-selected', $(this).attr('data-option'));
		parent.children('li').removeClass('active');
		parent.css({
			'z-index': '10'
		});
		event.preventDefault();
	});
	$('html').click(function() {
		$('.restrictions-edit .select > li').removeClass('active');
	});
	$('.restrictions-edit .select').click(function(event){
		if ( $('.restrictions-edit .select li.active').length > 1 ) {
			$('.restrictions-edit .select').css({
				'z-index': '10'
			}).children('li').removeClass('active');
			$(this).css({
				'z-index': '50'
			}).children('li').addClass('active');
		}
		event.stopPropagation();
	});
	$('.restrictions-edit li .remove').bind('click', function(event) {
		$(this).parents('li').remove();
		event.preventDefault();
	});
	$('.restrictions-edit li .hide').bind('click', function(event) {
		$(this).parent().remove();
		event.preventDefault();
	});
}
});