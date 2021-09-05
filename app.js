const $btnMenu = document.getElementById('btn__menu')
const $nav = document.querySelector('.menu')

$btnMenu.addEventListener('click', (e)=>{
    if(!$nav.classList.contains('show')){
        e.target.classList.toggle('far-bars')
        e.target.classList.add('fa-times')
    }else {
        e.target.classList.remove("fa-times")
        e.target.classList.add('far-bars')
    }
    $nav.classList.toggle('show')
    
})

ScrollReveal().reveal('.main');
ScrollReveal().reveal('.about',{ delay: 600 });
ScrollReveal().reveal('.skills',{ delay: 600 });
ScrollReveal().reveal('.proyect',{ delay: 600 });
ScrollReveal().reveal('.contact',{ delay: 600 });