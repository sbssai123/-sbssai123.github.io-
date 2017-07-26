/** Handles all the animations**/
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

$(document).ready(function() {
  $(".rectangle").hide(); //Hide componenets first
  $('#experience img').hide();
  $(window).scroll(function() {
      if($(this).scrollTop()>=$('#experience').position().top){
        $('#experience img').fadeIn(300);
        $('.r-left').show("slide", { direction: "left" }, 1000);
        $('.r-right').delay(500).show("slide", { direction: "right" }, 1000);
      }
  });
});


//Start chart animation when page gets to the skills section
// for the first time
$(function() {
    var oTop = $('#skills').offset().top - window.innerHeight;
    var chartHidden = true;
    $(window).scroll(function(){
        var pTop = $('body').scrollTop();
        if ((pTop > oTop)  && (chartHidden)) {
            chartHidden = false;
            start_count("java-chart", 80, 20);
            start_count("python-chart", 90, 10);
            start_count("js-chart", 50, 50);
            start_count("sql-chart", 60, 40);
            start_count("html-chart", 80, 20);
        }
    });
});

// chart animations
function start_count(idelement, p1, p2){
  Chart.defaults.global.animation.duration = 3000;
  var ctx = document.getElementById(idelement);
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [p1, p2],
        backgroundColor: ["#a12e76", "#ffffff"]
      }],
      labels: [
        'Java'
      ]
    },
    options: {
      rotation: .7 * Math.PI,
      circumference: 2 * Math.PI,
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
}