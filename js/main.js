/* адаптивный шрифт*/
$(function() {
  $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  $(window).resize(function(){
    $('body').css('font-size',(6+0.5*$('body').width()/100)+'px');
  });
});
//parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);