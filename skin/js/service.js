$(function () {
    $(".service-item-circle").on("touchstart", function () {
        $(this).addClass("rotateIn animated");
    });
    $(".service-item-circle").on("touchend", function () {
        $(this).removeClass("rotateIn animated");
    });
})