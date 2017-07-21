class Modal {
  constructor() {

    let modal = document.getElementsByClassName('er-menu')[0];
    let modalCloseBtn = document.getElementsByClassName('er-menu')[0].getElementsByClassName('er-close')[0];

    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('er-menu--visible');
    });
  }
}
