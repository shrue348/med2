'use strict';

function number_format(number, decimals, dec_point, separator ) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof separator === 'undefined') ? ',' : separator ,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Р¤РёРєСЃРёРј Р±Р°Рі РІ IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}


$(function(){ 
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 400);
    return false;
    });
});


$(function(){
  $('[name=phone]').mask("+7 (999) 999-9999");
})

$(function() { 
  $('select.select').selectbox();
});  

$(function(){
  const prevArrow = '<button class="carousel_arrow carousel_arrow-prev"></button>';
  const nextArrow = '<button class="carousel_arrow carousel_arrow-next"></button>';

  $('.companies_carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });

  $('.last_news_carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });

  $('.last_reviews_carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });
});