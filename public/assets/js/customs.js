var lastScrollTop = 0;
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  var scrollH = $(window).scrollTop();
  if (scrollH > 50) {
    // downscroll code
    //alert('down');
    $(".main-menu").addClass("sticky");
    $(".full-menu").addClass("sticky");
  } else {
    // upscroll code

    $(".main-menu").removeClass("sticky");
    $(".full-menu").removeClass("sticky");
  }
  lastScrollTop = st;
});