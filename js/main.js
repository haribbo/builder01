$(document).ready(function() {
  var main_nav_menu = $('.main_nav').find('li.menu');
  var drop_box = $('.drop_box');
  var drop_box_menus = $('.drop_box_menus');

  main_nav_menu.mouseover(function(event) {

    var idx = main_nav_menu.index(this);

    if (drop_box.hasClass('active')) {
      drop_box_menus.remove('active');
      drop_box_menus.eq(idx).addClass('active');
      console.log("bg있음");
    } else {
      drop_box.eq(idx).addClass('active');
      drop_box_menus.eq(idx).addClass('active');
      console.log("bg없음");
    }
    $('.arrow').removeClass('active');
    $('.arrow').eq(idx).addClass('active');
  }).mouseout(function(event) {
    drop_box.removeClass('active');
    $('.arrow').removeClass('active');
  });

  $('.main_nav').mouseout(function(event) {
    drop_box.removeClass('active');
    $('.arrow').removeClass('active');
  });

  // slider
  var mySwiper = new Swiper('#main_content .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '#main_content .swiper-pagination',
    },

    fadeEffect: {
      crossFade: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '#main_content .swiper-button-next',
      prevEl: '#main_content .swiper-button-prev',
    }
  })



  // acodian
  var acodian_btn = $('.acodian_list > li');
  var acodian_pannel = acodian_btn.find('.acodian_pannel');
  var acodian_arrow = acodian_btn.find('i');

  acodian_btn.click(function(event) {
    event.preventDefault();

    acodian_arrow.attr('class', 'xi-angle-down-thin xi-x');
    var idx = acodian_btn.index(this);

    if (acodian_btn.eq(idx).hasClass('active')) {
      acodian_btn.eq(idx).removeClass('active');
    } else {
      acodian_btn.removeClass('active');
      acodian_arrow.eq(idx).attr('class', 'xi-angle-up-thin xi-x');
      acodian_btn.eq(idx).addClass('active');
    }
  });

});
