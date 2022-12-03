$(document).ready(function () {
  $('#phone-input').inputmask('+38 (999) 999-99-99');
});

$(document).ready(function () {
  $('#client-phone').inputmask('+38 (999) 999-99-99');
});

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
  $('#datepickersecond').datepicker({
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
  $('#datepickersecond').datepicker();
});

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

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-close]'),
    modal: document.querySelector('[data-modal-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-close]'),
    modal: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-price-open]'),
    closeModalBtn: document.querySelector('[data-modal-price-close]'),
    modal: document.querySelector('[data-modal-price]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
