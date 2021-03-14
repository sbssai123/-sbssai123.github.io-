// Scroll to component on page
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});


// animation for about section
$(document).ready(function() {
  $(".about-bio").hide();
  $(".about-fun-all").hide();
  $(window).scroll(function() {
    let bottom_of_object = $(".about-bio").position().top + $(".about-bio").outerHeight();
    let bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(".about-bio").fadeIn(1000, function(){
        $(".about-fun-all").fadeIn(800);
      });
    }
  });
});
