$(function () {
    // rem计算
    //得到手机屏幕的宽度
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (htmlWidth > 640) {
        htmlWidth = 640
    }
    //得到html的Dom元素
    var htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 20 + 'px';
    
    //导航部分js 
    var windoww = $(window).width();
    $('.sp_nav').click(function () {
        $('.sp_nav').toggleClass('sp_nav_se');
        $('.sjj_nav').toggleClass('nav_show');
    });

    $('.sjj_nav ul li i').click(function () {
        $(this).parent().children('ul').slideToggle().parent().siblings().children('ul').slideUp();
        $(this).toggleClass('sjj_nav_i_se');
        $(this).parent().siblings().find('i').removeClass('sjj_nav_i_se');
    });

    $('.sp_nav_xjb').html('<svg t="1496193951932" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="995" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"> <path d="M768.468 428.876l-84.723-84.723-170.711 170.711-170.711-170.711-84.723 84.723 170.711 170.711-0.092 0.091 84.723 84.724 0.092-0.092 0.092 0.092 84.723-84.724-0.092-0.091z" p-id="996"></path></svg>');

    var swiper1 = new Swiper('#sw-common', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination :{
            el: '.swiper-pagination',
            clickable :true,
          }
      });
});