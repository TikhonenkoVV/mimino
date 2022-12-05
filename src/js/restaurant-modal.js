(() => {
  const refs = {
    openModalBtnTable: document.querySelector('[data-modal-table-open]'),
    closeModalBtnTable: document.querySelector('[data-modal-table-close]'),
    openModalBtnTable2: document.querySelector('[data-modal-table-open-2]'),
    closeModalBtnTable2: document.querySelector('[data-modal-table-close-2]'),
    modalTable: document.querySelector('[data-modal-table]'),
  };

  refs.openModalBtnTable.addEventListener('click', toggleModalTable);
  refs.closeModalBtnTable.addEventListener('click', toggleModalTable);
  refs.openModalBtnTable2.addEventListener('click', toggleModalTable);
  refs.closeModalBtnTable2.addEventListener('click', toggleModalTable);


  function toggleModalTable() {
    refs.modalTable.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }
})(); 
