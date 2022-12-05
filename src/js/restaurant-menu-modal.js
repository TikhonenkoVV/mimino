(() => {
  const refs = {
    openModalBtnTable: document.querySelector('.menu__button'),
    closeModalBtnTable: document.querySelector('[data-modal-table-close]'),
    modalTable: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtnTable.addEventListener('click', toggleModalTable);
  refs.closeModalBtnTable.addEventListener('click', toggleModalTable);

  function toggleModalTable() {
    refs.modalTable.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
