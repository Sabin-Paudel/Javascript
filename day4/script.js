let show = document.querySelector('.show');
let close = document.querySelector('.close');
let model = document.querySelector('.model');

show.addEventListener('click', () => {
  model.style.opacity = 1;
  model.style.pointerEvents = 'auto'; 
});

close.addEventListener('click', () => {
  model.style.opacity = 0;
  model.style.pointerEvents = 'none'; 
});