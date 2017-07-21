class Header {
  constructor() {
    let header = document.getElementsByClassName('er-header')[0];

    header.addEventListener('click', e => {
        let modal = document.getElementsByClassName('er-menu')[0];

        modal.classList.add('er-menu--visible');
    });
  }
}
