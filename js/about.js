// "Our History" animation
$(window).on("load", function() {
  $('.ourHistory').fadeIn(2000); 
});

// Description of "Our History" animation
$(function(){
  $(window).scroll(function (){
      $('.history').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});

// "CommunitiesThroughTravel" Animation
$(function(){
  $(window).scroll(function (){
      $('.CommunitiesThroughTravel').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});

// Description of "CommunitiesThroughTravel" Animation
$(function(){
  $(window).scroll(function (){
      $('.Communities').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});

// picture content Animation
$(function(){
  $(window).scroll(function (){
      $('.pictureContent').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});