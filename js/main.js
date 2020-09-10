$(document).ready(function() {
  // custom select
  $("select").selectric();

  // mainSlider
  var swiper = new Swiper(".main-slider .swiper-container", {
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  });

  //MainSlider2
  var swiper2 = new Swiper(".main-slider__container2", {
    pagination: {
      el: ".main-slider2 .swiper-pagination2",
      clickable: true,
      renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    }
  });

//MainSlider3
var swiper3 = new Swiper(".main-slider__container3", {
  pagination: {
    el: ".main-slider2 .swiper-pagination3",
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  }
});


  //right-popup
  var rightPopup = $(".right-popup");
  var rightPopupOpen = $(".right-popup_open");
  var rightPopupClose = $(".right-popup_close");

  $(rightPopupOpen).click(function() {
    $(rightPopup).toggleClass("active");
  });

  $(rightPopupClose).click(function() {
    $(rightPopup).removeClass("active");
  });


  //Mobile-Menu
  var burger = $(".burger");
  var menu = $(".header-mobile");

  $(burger).click(function() {
    $(menu).toggleClass("active");
  });

  //burger
  $('.burger').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('burger_active');
  });

});
