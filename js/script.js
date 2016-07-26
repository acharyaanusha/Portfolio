var wScroll = 0;

$(window).scroll(function(){

  wScroll = $(this).scrollTop();
//  console.log(1+wScroll/10000);
  console.log(1 - (wScroll/300) + '%');
  $('.boy').css({
    'transform' : 'translate(0px , ' + 2*wScroll +'%)',
    'transform' : 'scale('+(1 + wScroll/2000) +')',
    'bottom' : (-300 - wScroll)
  });

  $('.spotlight').css({
    'transform' : 'translate(0px , ' + wScroll/8 +'%)',
    'transform' : 'scale('+(1 + wScroll/2000) +')',
    'bottom' : (- wScroll)
  });

  $('.hack').css({
    'transform' : 'translate(0px , ' + wScroll/2  +'%)',
  });

  $('.code').css({
    'transform' : 'translate(0px , ' + wScroll /4 +'%)',
  });

  $('.design').css({
    'transform' : 'translate(0px , ' + wScroll /10 +'%)',
  });

  $('.innovation').css({
    'transform' : 'translate(0px , ' + wScroll /10 +'%)',
  });

  var scrollTop = $(window).scrollTop();
  var height = $(window).height()/2;

  $('.hack,.code,.design,.innovation').css({
      'opacity': ((height - scrollTop) / height)
  });

  if (wScroll > $('.intro').offset().top - 200)  {
    $('.profile-pic,.intro-right,.intro-left').addClass('in-position');
  }

  if (wScroll > $('.skill-set').offset().top - 500)  {

    $('.skill-back').each(function(i){

      setTimeout(function () {
        $('.skill-back').eq(i).css({
          'width' : '100%'
        });
      }, 100 * i);

    });

    $('.skill-fill').each(function(i){

      var width  = [ 70, 40, 50, 60, 57 , 78 , 64, 88 ];

      setTimeout(function () {
        $('.skill-fill').eq(i).css({
          'width' : width[i] + '%'
        });
      }, 100 * (i + 1));

    });

  }


});
