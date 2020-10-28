let openBtn = document.querySelector('.js-open');
let modalBg = document.getElementById("background-modal");
let modalBox = document.getElementById("modal-box");

openBtn.addEventListener('click', function(event){
    event.preventDefault();
    modalBg.classList.add('active');
    modalBox.classList.add('active');

})
 let closeBtns = document.querySelectorAll('.js-close');
 closeBtns.forEach(node => {
     node.addEventListener('click', function(e){
         e.preventDefault();
        modalBg.classList.remove('active');
    modalBox.classList.remove('active');  
     })
 })