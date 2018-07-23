/* адаптивный шрифт*/
$(function() {
  $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  $(window).resize(function(){
    $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  });

	//плавная прокрутка
    $("a,nav a,a[href='#'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
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
	    offset:       150,          // через сколько пикселей сработает
	    live:         true        // для мобильных оставить или убрать анимацию
	    }
	  )
	  wow.init();
	   new WOW().init();
	   // end animated


});
//parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
 //map google

