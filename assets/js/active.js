!(function (e) {
  "use strict";
  jQuery(document).on("ready", function () {
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" }),
      e(window).on("scroll", function () {
        e(this).scrollTop() > 50
          ? e(".main-nav").addClass("menu-shrink")
          : e(".main-nav").removeClass("menu-shrink");
      }),
      e(".child-care-slider").on("translate.owl.carousel", function () {
        e(".single-slider .slider-text h3")
          .removeClass("animated flipInX")
          .css("opacity", "0"),
          e(" .single-slider .slider-text p")
            .removeClass("animated flipInX")
            .css("opacity", "0"),
          e(".single-slider .slider-text .custom-btn")
            .removeClass("animated flipInX")
            .css("opacity", "0");
      }),
      e(".child-care-slider").on("translated.owl.carousel", function () {
        e(".single-slider .slider-text h3")
          .addClass("animated flipInX")
          .css("opacity", "1"),
          e(".single-slider .slider-text p")
            .addClass("animated flipInX")
            .css("opacity", "1"),
          e(".single-slider .slider-text .custom-btn")
            .addClass("animated flipInY")
            .css("opacity", "1");
      }),
      jQuery(window).on("load", function () {
        jQuery(".loader").fadeOut(500);
      }),
      e(".homepage-banner").owlCarousel({
        nav: !1,
        loop: !1,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-arrow-left'></i>",
          "<i class='fa fa-arrow-right'></i>",
        ],
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
      }),
      e(".child-care-slider").owlCarousel({
        items: 1,
        loop: !0,
        nav: !0,
        dots: !0,
        smartSpeed: 5e3,
        mouseDrag: !1,
      }),
      e(".testi-slider").owlCarousel({
        nav: !1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 1 },
        },
      }),
      e(".admission-testi-slider").owlCarousel({
        nav: !1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        margin: 60,
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 3 },
        },
      }),
      e(".testi-slider2").owlCarousel({
        nav: !1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 1 },
        },
      }),
      e(".testi-sliderC").owlCarousel({
        nav: !0,
        loop: !0,
        dots: !1,
        autoplay: !1,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 1 },
        },
      }),
      e(".program-slider").owlCarousel({
        nav: !1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        margin: 20,
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 4 },
        },
      }),
      e(".whychoose-slider").owlCarousel({
        nav: !0,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        margin: 20,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: { items: 2 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 6 },
        },
      }),
      e(".blended-learning-slider").owlCarousel({
        nav: !1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        margin: 60,
        responsive: {
          0: { items: 2 },
          650: { items: 1 },
          992: { items: 1 },
          1e3: { items: 6 },
        },
      }),
      e(".blog-slider").owlCarousel({
        nav: !0,
        margin: 30,
        loop: !0,
        dots: !0,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          650: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
        },
      }),
      e(".our-programs-slider").owlCarousel({
        nav: !0,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: { 0: { items: 1 }, 650: { items: 3 }, 992: { items: 4 } },
      }),
      e(".logo-slider").owlCarousel({
        nav: !1,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        smartSpeed: 2e3,
        responsive: { 0: { items: 2 }, 650: { items: 3 }, 992: { items: 8 } },
      }),
      e(".blog-slider-two").owlCarousel({
        nav: !0,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
      }),
      e(".program-slider").owlCarousel({
        nav: !0,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1024: { items: 3 } },
      }),
      e(".shop-single-slider").length &&
        (e(".slider-for").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          fade: !0,
          asNavFor: ".slider-nav",
        }),
        e(".slider-nav").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: ".slider-for",
          focusOnSelect: !0,
          responsive: [
            { breakpoint: 500, settings: { slidesToShow: 2, infinite: !0 } },
            { breakpoint: 400, settings: { slidesToShow: 2 } },
          ],
        })),
      e(".related-post-slider").owlCarousel({
        nav: !0,
        margin: 30,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayHoverPause: !0,
        smartSpeed: 2e3,
        navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
        },
      }),
      e(".bar").on("each", function () {
        e(this)
          .find(".bar-inner")
          .animate({ width: e(this).attr("data-width") }, 2e3);
      });
    var s,
      a,
      i = e(".testimonial-slider .testimonial-client>div"),
      t = e(".client-image-list>div");
    i.slick({
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      fade: !0,
      autoplay: !0,
      draggable: !0,
      asNavFor: ".client-image-list>div",
    }),
      t.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: !0,
        centerMode: !0,
        draggable: !1,
        focusOnSelect: !0,
        asNavFor: ".testimonial-slider .testimonial-client>div",
      });
    var o = e(".testimonial-slider .caption"),
      l = e(".testimonial-client .slick-current img").attr("alt");
    function n(e) {
      "" === e && (e = "&nbsp;"), o.html(e), o.removeClass("hide");
    }
    n(l),
      i.on("beforeChange", function (e, s, a, i) {
        o.addClass("hide");
      }),
      i.on("afterChange", function (s, a, i, t) {
        n((l = e(".testimonial-client .slick-current img").attr("alt")));
      }),
      new WOW().init(),
      e('a[href=".search"]').on("click", function (s) {
        s.preventDefault(),
          e(".search").addClass("open"),
          e('.search > form > input[type="search"]').focus();
      }),
      e(".search, .search button.close").on("click keyup", function (s) {
        (s.target == this ||
          "close" == s.target.className ||
          27 == s.keyCode) &&
          e(this).removeClass("open");
      }),
      e("form").on("submit", function (e) {
        return e.preventDefault(), !1;
      }),
      e(".faq-panel > .faq-title").on("click", function () {
        e(this).hasClass("active")
          ? (e(this).removeClass("active"),
            e(this).siblings(".faq-textarea").slideUp(200),
            e(".faq-panel > .faq-title i")
              .removeClass("fa fa-minus")
              .addClass("fa fa-plus"))
          : (e(".faq-panel > .faq-title i")
              .removeClass("fa fa-minus")
              .addClass("fa fa-plus"),
            e(this).find("i").removeClass("fa fa-plus").addClass("fa fa-minus"),
            e(".faq-panel > .faq-title").removeClass("active"),
            e(this).addClass("active"),
            e(".faq-textarea").slideUp(200),
            e(this).siblings(".faq-textarea").slideDown(200));
      });
    var r =
      ((s = e(".js-accordion").find(".js-accordion-header")),
      e(".js-accordion-item"),
      (a = { speed: 400, oneOpen: !1 }),
      {
        init: function (i) {
          s.on("click", function () {
            r.toggle(e(this));
          }),
            e.extend(a, i),
            a.oneOpen &&
              e(".js-accordion-item.active").length > 1 &&
              e(".js-accordion-item.active:not(:first)").removeClass("active"),
            e(".js-accordion-item.active").find("> .js-accordion-body").show();
        },
        toggle: function (e) {
          a.oneOpen &&
            e[0] !=
              e
                .closest(".js-accordion")
                .find(
                  "> .js-accordion-item.active > .js-accordion-header"
                )[0] &&
            e
              .closest(".js-accordion")
              .find("> .js-accordion-item")
              .removeClass("active")
              .find(".js-accordion-body")
              .slideUp(),
            e.closest(".js-accordion-item").toggleClass("active"),
            e.next().stop().slideToggle(a.speed);
        },
      });
    e(".popup-youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    });
    var $ = e(window).width();
    e(window).on("load", function (e) {
      $ >= 768
        ? AOS.init({
            easing: "ease-out-in",
            duration: 500,
            disable: function () {
              return window.innerWidth < 767;
            },
          })
        : AOS.init({
            disable: function () {
              return window.innerWidth < 768;
            },
          });
    });
  });
})(jQuery);
