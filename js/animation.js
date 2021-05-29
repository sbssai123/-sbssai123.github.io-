// animation for about section
$(document).ready(function() {
  $(".about-bio").hide();
  $(".contact-me-all").hide();
  $(window).scroll(function() {
    let bottom_of_object = $(".about-bio").position().top + $(".about-bio").outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(".about-bio").fadeIn(1800, function(){
        $(".contact-me-all").fadeIn(500);
      });
    }
  });
});
