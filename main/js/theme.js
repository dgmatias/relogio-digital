let chk = document.querySelector('#chk');
let html = document.querySelector('html');


chk.addEventListener('click',()=>{
  chk.classList.toggle('active_dark');
  html.classList.toggle('active');
  
});