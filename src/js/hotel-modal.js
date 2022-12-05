(() => {
  const refs = {
    openModalBtnRoom: document.querySelector('[data-modal-room-open]'),
    closeModalBtnRoom: document.querySelector('[data-modal-room-close]'),
    openModalBtnPrice: document.querySelector('[data-modal-price-open]'),
    closeModalBtnPrice: document.querySelector('[data-modal-price-close]'),
    modalRoom: document.querySelector('[data-modal-room]'),
    modalPrice: document.querySelector('[data-modal-price]'),
  };

  refs.openModalBtnRoom.addEventListener('click', toggleModalRoom);
  refs.closeModalBtnRoom.addEventListener('click', toggleModalRoom);
  refs.openModalBtnPrice.addEventListener('click', toggleModalPrice);
  refs.closeModalBtnPrice.addEventListener('click', toggleModalPrice);

  function toggleModalRoom() {
    refs.modalRoom.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function toggleModalPrice() {
    refs.modalPrice.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
