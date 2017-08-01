$(document).ready(function () {
    $(".nav-toggle").click(function() {
      $("body").toggleClass("navOpen");
      $("nav").toggleClass("open");
      $(".main").toggleClass("open");
       $(".logo-container").toggleClass("open");
      $(this).toggleClass("open");
    });

    // Animating as seen on viewport
    // -----------------------------------------------
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: '.section--developments',
            duration: 0,
        })
    .setClassToggle(".line", "center")
    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.section--developments',
            duration: 0,
        })
    .setClassToggle(".svg", "draw")
    .addTo(controller)
    .on("start", function (event) {
        var svg = new Walkway({
          selector: '.draw',
          duration: '1000',
          // can pass in a function or a string like 'easeOutQuint'
          easing: function (t) {
            return t * t;
          }
        });

        svg.draw();
    });

    new ScrollMagic.Scene({
            triggerElement: '.section--developments',
            duration: 0,
            reverse: false
        })
    .setClassToggle(".department-content", "appear")
    .addTo(controller);

    new ScrollMagic.Scene({
            triggerElement: '.section--features',
            duration: 0,
            reverse: false
        })
    .setClassToggle(".svg--feature", "draw")
    .addTo(controller)
    .on("start", function (event) {
        var svg = new Walkway({
          selector: '.svg--feature.draw',
          duration: '1000',
          // can pass in a function or a string like 'easeOutQuint'
          easing: function (t) {
            return t * t;
          }
        });

        svg.draw();
    });

    $('.owl-carousel.autoheight').owlCarousel({
      items:1,
      margin:10,
      autoHeight:true,
      dots: false,
      nav: false,
    });

    // carousel
    $(".owl-carousel").owlCarousel({
        dots: true,
        nav: true,
        video:true,
        items: 1
    });

});
