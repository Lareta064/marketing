/* адаптивный шрифт*/
$(function() {
	
  $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  $(window).resize(function(){
    $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  });

	//плавная прокрутка
    //$("a,nav a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
    // highlightSelector:"nav a"
    //});

    $("nav a,a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
    	highlightSelector:"nav a"
     });
	// end плавная прокрутка

	// смена фона в блоке с формой
	$('#form_2').click( function(event){
		$('#cta').css('background-image','url(img/bg/cta2.jpg)');
	});

    //animated
	 wow = new WOW( {
	     boxClass:     'wow',      // default
	    animateClass: 'animated', // default
	    mobile:       true,       // default
	    offset:       110,          // через сколько пикселей сработает
	    live:         true        // для мобильных оставить или убрать анимацию
	    }
	  )
	  wow.init();
	   new WOW().init();
	   // end animated

		// open modal form
	$('#open_modal').on('click', function(){
		$('#overlay').fadeIn('slow');
		$('#modalForm').css('display','block');
		
	});

	$('#modalBtn').on('click', function(){
		$('#overlay').fadeOut('slow');
		
	});

	$('#overlay').on('click', function(){
		$(this).fadeOut('slow');
		$('#modalForm').css('display','none');
	});

	// end open modal form

		// open modal form
	$('.open_modal-service').on('click', function(){
		$('#overlay2').fadeIn('slow');
		$('#modalForm2').css('display','block');
		
	});

	$('#modalBtn2').on('click', function(){
		$('#overlay2').fadeOut('slow');
		
	});

	$('#overlay2').on('click', function(){
		$(this).fadeOut('slow');
		$('#modalForm2').css('display','none');
	});

	// end open modal form


	//кнопка вверх
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () { if ($(this).scrollTop() > 200) {
                    $('#back-top').fadeIn();
            } else {
                    $('#back-top').fadeOut();
            }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
            $('body,html').animate({
                    scrollTop: 0
            }, 600); return false;
    });
    });

}); 


//parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
 //map google

