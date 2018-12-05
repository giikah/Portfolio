$('nav a').on('click', function(e) {
  e.preventDefault();
  var id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 2000);
});