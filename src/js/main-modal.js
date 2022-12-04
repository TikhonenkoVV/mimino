(() => {
  const refs = {
    openModalBtnRoom: document.querySelector('[data-modal-room-open]'),
    closeModalBtnRoom: document.querySelector('[data-modal-room-close]'),
    openModalBtnTable: document.querySelector('[data-modal-table-open]'),
    closeModalBtnTable: document.querySelector('[data-modal-table-close]'),
    modalRoom: document.querySelector('[data-modal-room]'),
    modalTable: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtnRoom.addEventListener('click', toggleModalRoom);
  refs.closeModalBtnRoom.addEventListener('click', toggleModalRoom);
  refs.openModalBtnTable.addEventListener('click', toggleModalTable);
  refs.closeModalBtnTable.addEventListener('click', toggleModalTable);

  function toggleModalRoom() {
    refs.modalRoom.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
  function toggleModalTable() {
    refs.modalTable.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})();
