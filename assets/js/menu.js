if ($(".smart-scroll").length > 0) {
  var l = 0;
  $(window).on("scroll", function () {
    (scroll_top = $(this).scrollTop()) < l
      ? $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up")
      : $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down"),
      (l = scroll_top);
  });
}
