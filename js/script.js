var wScroll = 0;

$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  console.log(wScroll);

  $('.boy').css({
    'transform' : 'translate(0px , ' + wScroll /8 +'%)'
  });

  $('.spotlight').css({
    'transform' : 'translate(0px , ' + wScroll /8 +'%)'
  });

  $('.hack').css({
    'transform' : 'translate(0px , ' + -wScroll  +'%)'
  });

  $('.code').css({
    'transform' : 'translate(0px , ' + -wScroll /2 +'%)'
  });

  $('.design').css({
    'transform' : 'translate(0px , ' + -wScroll /4 +'%)',
  });

  if (wScroll > $('.intro').offset().top - 200)  {
    $('.profile-pic,.intro-right,.intro-left').addClass('in-position');
  }


});
