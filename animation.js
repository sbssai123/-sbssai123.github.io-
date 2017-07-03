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

// Fade down button in home screen when mouse hovers over
$(document).ready(function() {
  $("#learn-more img, #learn-more, #learn-more h4").hover(
    function() {
      $(this).stop().animate({"opacity": .6});
    },
    function() {
      $(this).stop().animate({"opacity": 1});
    }
  )
});



// hover and transition effects for vertical dot nav bar
$(document).ready(function($){
        var parPosition = [];
      $('.container-fluid').each(function() {
          parPosition.push($(this).offset().top);
      });
        $('.Navbar ul li a').click(function () {
    $('.Navbar ul li a').removeClass('active');
      $(this).addClass('active');
  });
     $('.Navbar a').hover(function() {
         $(this).find('.label').show();
         }, function() {
         $(this).find('.label').hide();
     });
         $(document).scroll(function(){
      var position = $(document).scrollTop(),
              index;
              for (var i=0; i<parPosition.length; i++) {
              if (position <= parPosition[i] * 1.5) {
                  index = i;
                  break;
              }
          }
    $('.Navbar ul li a').removeClass('active');
          $('.Navbar ul li a:eq('+index+')').addClass('active');
      });
        $('.Navbar ul li a').click(function () {
    $('.Navbar ul li a').removeClass('active');
      $(this).addClass('active');
  });
});

// Handles fading in and out of navbar
$(document).ready(function() {
  $(".Navbar").hide(); //Hide the navigation bar first
  $(document).on('scroll', function() {
      if($(this).scrollTop()>=$('#about').position().top){
        $('.Navbar').show(); //Show the navigation bar
      } else {
          $('.Navbar').hide(); //Else hide it
        }
  });
});


var inView = false;
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#myChart')) {
        if (inView) { return; }
        inView = true;
        new Chart(document.getElementById("myChart").getContext("2d")).Pie(data);
    } else {
        inView = false;
    }
});



// chart animations
Chart.defaults.global.animation.duration = 2500;
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [60]
    }],
    labels: [
      'Java'
    ]
  },
  options: {
    rotation: .7 * Math.PI,
    circumference: 1.5 * Math.PI,
    tooltips: {enabled: false},
    hover: {mode: null},
 legend: {
   display: false,
     labels: {
       display: false
     }
   }
 }
});
