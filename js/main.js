$(window).ready(function(){
  
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
       if(scroll > 20){
        $("header").addClass("active")
       }else{
        $("header").removeClass("active")   
       }
    });
    
    
    $('.x').slick({
        dots: false,
        infinite: false,
        autoplay:true,
        autoplaySpeed: 2000,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


})
