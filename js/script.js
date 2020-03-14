$(".sells_catalog .row").slick({    
    infinite: true,
    slidesToShow: 3, 
    
});
$(".sells_main_switch_r button").click(function() {
    $(".sells_catalog .row").slick("slickNext");
});
$(".sells_main_switch_l button").click(function() {
    $(".sells_catalog .row").slick("slickPrev");
});
$(".catalog_main").click(function() {
    $(this).toggleClass("open");
    $(".menu").slideToggle();
});
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();

      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
          $('html, body').animate({scrollTop: dn}, 1000);
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице


     

    
      * 1000 скорость перехода в миллисекундах
      */
    });
  });
