var btnOpen = document.querySelector('.footer-contacts .btn');
var modal = document.querySelector('.modal-feedback');
var btnClose = modal.querySelector('.close');

btnOpen.addEventListener('click', function(event) {
  event.preventDefault();
  if (modal.classList.contains('hide')) {
    modal.classList.remove('hide');
    modal.classList.add('show');
    console.log(1);
  }
  modal.classList.add('show');
});

btnClose.addEventListener('click', function(event) {
  event.preventDefault();
  if (modal.classList.contains('show')) {
    modal.classList.remove('show');
    modal.classList.add('hide');    
    console.log(2);
  }  
    console.log(3);
});