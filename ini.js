$(document).ready(function(){


    $('.autoplay').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        mobileFirst:true,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            centerMode: false
          }
        }]
      });

      $('.autoplay-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 1000,
        rows:4,
      });

      $(".mobile__close").click(function(){
        $(".mobile").css('right','-500px');
        
      });

      $(".hamburger").click(function() {
        $('.mobile').css('right','0px');
      });

      
    

  });


