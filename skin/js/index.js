var swiper2 = new Swiper('.swiper-container1', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true
});

$(".guide-item").on("touchstart", function () {
  $(this).addClass("shake animated");
});
$(".guide-item").on("touchend", function () {
  $(this).removeClass("shake animated");
});
$(".service-item-circle").on("touchstart", function () {
  $(this).addClass("rotateIn animated");
});
$(".service-item-circle").on("touchend", function () {
  $(this).removeClass("rotateIn animated");
});