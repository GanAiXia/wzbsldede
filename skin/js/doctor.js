$(function () {
  //获取模块到顶部的距离 
  var dtop = $('html')[0].style.fontSize
  var dtop = dtop.substring(0,dtop.length-2)
  var shoushu = $('#shoushu-son').offset().top-4.125*dtop;

  $('#shoushu').click(function () {
    $('html,body').animate({
      scrollTop: shoushu
    }, 500);
  })

  var feishou = $('#feishou-son').offset().top-4.125*dtop;
  $('#feishou').click(function () {
    $('html,body').animate({
      scrollTop: feishou
    }, 500);
  })

  var zhenduan = $('#zhenduan-son').offset().top-4.125*dtop;
  $('#zhenduan').click(function () {
    $('html,body').animate({
      scrollTop: zhenduan
    }, 500);
  })
})