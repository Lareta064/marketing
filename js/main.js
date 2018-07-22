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

    //animated
	 wow = new WOW( {
	     boxClass:     'wow',      // default
	    animateClass: 'animated', // default
	    mobile:       false,       // default
	    offset:       100,          // через сколько пикселей сработает
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

function initMap() {    
	var center = {lat: 59.124700, lng: 37.928706};
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 17,
	center: center
	});

	var marker = new google.maps.Marker({
	position: center,
	map: map,
	title: "ул. Ленина, 50"
	});
	}