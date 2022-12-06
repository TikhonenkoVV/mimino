// input mask

$(document).ready(function () {
  $('#phone-input').inputmask('+38 (999) 999-99-99');
});

$(document).ready(function () {
  $('#client-phone').inputmask('+38 (999) 999-99-99');
});

// custom calendar

$(function () {
  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker2').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker3').datepicker({
    dateFormat: 'dd/mm/yy',
    monthNames: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
    dayNamesMin: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'],
  });
});

$(function () {
  $('#datepicker').datepicker();
});

$(function () {
  $('#datepicker2').datepicker();
});

$(function () {
  $('#datepicker3').datepicker();
});

// custom select

$('.custom-select').each(function () {
  var classes = $(this).attr('class'),
    id = $(this).attr('id'),
    name = $(this).attr('name');
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select__trigger">' +
    $(this).attr('placeholder') +
    '</span>';
  template += '<div class="custom-select__options">';
  $(this)
    .find('option')
    .each(function () {
      template +=
        '<span class="custom-select__option' +
        '"data-value="' +
        $(this).attr('value') +
        '">' +
        $(this).html() +
        '</span>';
    });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$('.custom-select__option:first-of-type').hover(
  function () {
    $(this).parents('.custom-select__options').addClass('option-hover');
  },
  function () {
    $(this).parents('.custom-select__options').removeClass('option-hover');
  }
);
$('.custom-select__trigger').on('click', function () {
  $('html').one('click', function () {
    $('.custom-select').removeClass('opened');
  });
  $(this).parents('.custom-select').toggleClass('opened');
  event.stopPropagation();
});
$('.custom-select__option').on('click', function () {
  $(this)
    .parents('.custom-select-wrapper')
    .find('select')
    .val($(this).data('value'));
  $(this)
    .parents('.custom-select__options')
    .find('.custom-select__option')
    .removeClass('selection');
  $(this).addClass('selection');
  $(this).parents('.custom-select').removeClass('opened');
  $(this)
    .parents('.custom-select')
    .find('.custom-select__trigger')
    .text($(this).text());
});
var swiper = new Swiper('.swiper-container-hotel', {
  slidesPerView: 1.35,
  leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2.16,
      spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.46,
      spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

var swiperRest = new Swiper('.swiper-container-restaurant', {
  slidesPerView: 1.35,
  leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-r',
    prevEl: '.swiper-button-next-r',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2.16,
      spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.46,
      spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});

var swiperRoom = new Swiper('.swiper-container-room', {
  slidesPerView: 0.5,
  // leftSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 10,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev-rh',
    prevEl: '.swiper-button-next-rh',
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      slidesPerView: 2.16,
      spaceBetween: 34,
      // slideToClickedSlide: true,
    },
    // when window width is >= 480px
    1280: {
      slidesPerView: 2.46,
      spaceBetween: 86,
      slideToClickedSlide: false,
      // slideToClickedSlide: true,
    },
  },
});
