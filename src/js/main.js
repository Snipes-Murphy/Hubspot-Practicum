
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 80) {
    $('.dark-navigation-bg').addClass('bg-purple-900');
  } else {
    $('.dark-navigation-bg').removeClass('bg-purple-900');
  }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
    $('#navbar').addClass('-translate-y-full')
   } else {
    $('#navbar').removeClass('-translate-y-full')
   }
   lastScrollTop = st;
});

$(document).on('click', "#mobile-menu-button", function() {
  let isClosed = $(".navigation-items").hasClass('hidden')
  if (isClosed) {
    $(".navigation-items").removeClass('hidden')
    $(this).find('.close-icon').removeClass('hidden')
    $(this).find('.menu-icon').addClass('hidden')
  } else {
    $(".navigation-items").addClass('hidden')
    $(this).find('.close-icon').addClass('hidden')
    $(this).find('.menu-icon').removeClass('hidden')
  }
})