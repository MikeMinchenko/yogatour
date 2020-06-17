$(document).ready(function () {
  var scrolled;
  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 700) {
      $(".header").css({
        "background": "#444444a2"
      })
    }
    if (700 > scrolled) {
      $(".header").css({
        "background": "transparent"
      })
    }

  }

  $('.trip__slider').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    variableHeight: true
  })

  $('.program__slider').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true,
    variableHeight: true
  })


});