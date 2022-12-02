$(document).ready(function () {
  $('#phone-input').inputmask('+38 (999) 999-99-99');
});

$(document).ready(function () {
  $('#client-phone').inputmask('+38 (999) 999-99-99');
});

$('.custom-select').each(function () {
  var classes = $(this).attr('class'),
    id = $(this).attr('id'),
    name = $(this).attr('name');
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr('placeholder') +
    '</span>';
  template += '<div class="custom-options">';
  $(this)
    .find('option')
    .each(function () {
      template +=
        '<span class="custom-option' +
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
$('.custom-option:first-of-type').hover(
  function () {
    $(this).parents('.custom-options').addClass('option-hover');
  },
  function () {
    $(this).parents('.custom-options').removeClass('option-hover');
  }
);
$('.custom-select-trigger').on('click', function () {
  $('html').one('click', function () {
    $('.custom-select').removeClass('opened');
  });
  $(this).parents('.custom-select').toggleClass('opened');
  event.stopPropagation();
});
$('.custom-option').on('click', function () {
  $(this)
    .parents('.custom-select-wrapper')
    .find('select')
    .val($(this).data('value'));
  $(this)
    .parents('.custom-options')
    .find('.custom-option')
    .removeClass('selection');
  $(this).addClass('selection');
  $(this).parents('.custom-select').removeClass('opened');
  $(this)
    .parents('.custom-select')
    .find('.custom-select-trigger')
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
