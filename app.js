const $btnMenu = document.getElementById('btn__menu')
const $nav = document.querySelector('.menu')

$btnMenu.addEventListener('click', ()=>{
    $nav.classList.toggle('show')
})