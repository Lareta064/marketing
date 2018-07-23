$(document).ready(function() {

  /*$('.phone').mask("+7(999)999-9999", {autoclear: false});

  $.validator.addMethod("checkMask", function(value, element) {
       return this.optional(element) || /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
  }, "Введенный номер не корректен");*/


  
   // закрываем окно, нажимая на крестик
   $('#form-close').click(function() {
     $(".overlay_popup").hide();
      $("#popup1").hide();
   });
});