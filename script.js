$(".navbar li a").click(function (e) {
  e.preventDefault();

  var targetElement = $(this).attr("href");
  var targetPosition = $(targetElement).offset().top;

  $("html, body").animate({scrollTop: targetPosition - 180}, "slow");
});

$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
