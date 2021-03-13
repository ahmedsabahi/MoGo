jQuery(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop ").fadeIn();
    } else {
      $("#scrollToTop ").fadeOut();
    }
  });

  $("#scrollToTop ").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(window).scroll(function () {
    if (
      $(this).scrollTop() == $("#header").height() ||
      $(this).scrollTop() > $("#header").height()
    ) {
      $("body").addClass("fixed-nav");
    } else {
      $("body").removeClass("fixed-nav");
    }
  });
});
