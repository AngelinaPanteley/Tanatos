// Can also be used with $(document).ready()
$(window).load(function() {
  $('.js-flexslider-1').flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: false

  });

  $('.js-flexslider-2').flexslider({
    animation: "slide",
    directionNav: false,
    controlNav: true,
    slideshow: false
  });
});


$(".menu-btn").on("click", function(e){
  e.preventDefault();
  $("nav").addClass("menu-bar");
  $("body").append('<div class="fade"></div>');
})

$(".menu-cls").on("click", function(e){
  $("nav").removeClass("menu-bar");
  $(".fade").remove();
})

$(".hire-us-btn").on("click", function(e){
  $(".hire-us-popup").addClass("active-popup");
  $("body").append('<div class="fade"></div>');
})

$(".popup-cls").on("click", function(e){
  $(".hire-us-popup").removeClass("active-popup");
  $(".fade").remove();
})
