$(document).ready(function() {

    //меняем белый цвет иконки на зеленый при наведении курсора
	/*$('.menu-icon').mouseenter(function() {
		
		$(this).addClass('menu-icon--active');

	});

   //возвращаем белый цвет иконке , когда курсор уходит с нее
	$('.menu-icon').mouseleave(function() {
		
		$(this).removeClass('menu-icon--active');
		
	});*/

	//показываем меню #nav-menu  при клике по иконке
	$('.menu-icon').on('click', function(){	

	$('#nav-menu').toggleClass('disp-n');

	if ($('#nav-menu').hasClass('disp-n')){

		//если меню скрыто, возвращаем иконке белый цвет
		$('.menu-icon').removeClass('menu-icon--active');
		} else {

			//если меню не скрыто, то придаем иконке зеленый цвет
			$('.menu-icon').addClass('menu-icon--active');
		}


	});



})
