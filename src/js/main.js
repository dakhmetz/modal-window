document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keypress', (event) =>{
    console.log(event.code)
  });

  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
      console.log('Esc pressed')
      switchModal();
    }
  }); 

  /* All good up here */

  modal.addEventListener('mouseup', function(event) {
    var menu = document.querySelector('.modal__dialog');
    var menu2 = document.querySelector('.modal__form');
    var menu3 = document.querySelector('.modal__policy')
    if((event.target != menu && event.target.parentNode != menu) && (event.target != menu2 && event.target.parentNode != menu2) && (event.target != menu3 && event.target.parentNode != menu3)) {
      switchModal();
    }
  });
 
});