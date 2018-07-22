$(document).ready(function() {

  /*$('.phone').mask("+7(999)999-9999", {autoclear: false});

  $.validator.addMethod("checkMask", function(value, element) {
       return this.optional(element) || /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
  }, "Введенный номер не корректен");*/

// jQuery Validate JS
  $(".contact-form").validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true },
      // skype:  { required: true },
      /*phone:{
        required: true,
        'checkMask': true
      },*/
      
      message: { required: true }
    },

    messages: {
      phone: {
        required: "Пожалуйста, введите номер телефона",
      }
     // name: "Пожалуйста, введите свое имя",
      //email: {
       // required: "Пожалуйста, введите свой email",
       //email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
    },

    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

  
   // закрываем окно, нажимая на крестик
   $('#form-close').click(function() {
     $(".overlay_popup").hide();
      $("#popup1").hide();
   });
});