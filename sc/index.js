$(document).ready(function(){
    $(".sportdiv").animate({
         width:'54rem'
     }, 1000);

     setTimeout(function(){
         $(".logo").animate({
              opacity:'1.0'
          },1000);

         $(".text").animate({
              opacity:'1.0',
             top:'14rem'
          },600);

         $(".numbers").animate({
             opacity:'0.8'
         },1000);

    setTimeout(function(){

            var i = 1;


            function slider(){
                    $('.carousel-image').animate({
                        opacity: 0, left: '15%'}, 500).css({'display':'none'});

                    $('.numbers > span').removeClass('active');

                    $('.carousel-image:nth-child('+i+')').css({'display':'inherit'}).animate({
                        opacity: 1, left:'20%'}, 500);

                    $('.numbers > span:nth-child('+i+')').addClass('active');

                    if(i==$('.carousel-image').length) i=0;
                    ++i;
                }
            slider();
            setInterval(slider,4000);

                     $(".head").show().animate({
                          opacity:'1.0'
                      },500);

                     $(".timing").animate({
                          opacity:'0.8',
                         top:'28rem'
                      },800);

                     $(".sliderconstant").animate({
                          width:'100%'
                      },1000);

                     $(".slider").animate({
                          opacity:'0.55'
                      },1000);

                     setTimeout(function(){

                         $(".scicon").animate({
                              opacity:'0.8'
                          },1000);

                         $(".vl").animate({
                              height:'4rem'
                          },1000);

                     },1000);
                 },500);
     },1000);

     /*setTimeout(function(){
         $(".vl").animate({
              height:'3.33rem';
          },500);
     },1200);*/

});