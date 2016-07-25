var wScroll = 0;

$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  console.log(wScroll);

  $('.boy').css({
    'transform' : 'translate(0px , ' + wScroll/6 +'%)'
  });

  $('.spotlight').css({
    'transform' : 'translate(0px , ' + wScroll/8 +'%)'
  });

  $('.hack').css({
    'transform' : 'translate(0px , ' + wScroll/6  +'%)'
  });

  $('.code').css({
    'transform' : 'translate(0px , ' + wScroll /4 +'%)'
  });

  $('.design').css({
    'transform' : 'translate(0px , ' + wScroll /10 +'%)',
  });

  if (wScroll > $('.intro').offset().top - 200)  {
    $('.profile-pic,.intro-right,.intro-left').addClass('in-position');
  }

  if (wScroll > $('.skill-set').offset().top - 200)  {
    $('.html').css({
      'width' : '70%'
    });

    $('.css').css({
      'width' : '80%'
    });

    $('.js').css({
      'width' : '65%'
    });

    $('.jquery').css({
      'width' : '60%'
    });

    $('.angular').css({
      'width' : '80%'
    });

    $('.android').css({
      'width' : '65%'
    });

    $('.graphic').css({
      'width' : '60%'
    });

    $('.skill-back').css({
      'width' : '100%'
    });

  }


});
