const IconMenu = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512"  x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path xmlns="http://www.w3.org/2000/svg" d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z" fill="#ffffff" data-original="#000000" style="" class=""/><path xmlns="http://www.w3.org/2000/svg" d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" fill="#ffffff" data-original="#000000" style="" class=""/></g></svg>
`
const IconClose = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512"  x="0" y="0" viewBox="0 0 365.696 365.696" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" fill="#ffffff" data-original="#000000" style=""/></g></svg>
`
const $btnMenu = document.getElementById('btn__menu')
const $up = document.querySelector('.upTop')
const $btnConfig = document.querySelector('.btn__config')
const $nav = document.querySelector('.menu')

$btnMenu.addEventListener('click', (e)=>{
    if(!$nav.classList.contains('show')){
        $btnMenu.innerHTML = IconClose
    }else {
        $btnMenu.innerHTML = IconMenu
       
    }
    $nav.classList.toggle('show')
    
})

$nav.addEventListener('click',e=>{
    console.log(e.target)
    if(e.target.classList.contains('menu__link')){
        $btnMenu.innerHTML = IconMenu
        $nav.classList.toggle('show')
    } 
})

$btnConfig.addEventListener('click', e=>{
    console.log('hola')
})

window.addEventListener('scroll', e=>{  
  if(window.scrollY < 700){
    $up.classList.add('hidden')
}else {
   $up.classList.remove('hidden')
}
})

$up.addEventListener('click',(e)=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
   
})

ScrollReveal().reveal('.main');
ScrollReveal().reveal('.about',{ delay: 600 });
ScrollReveal().reveal('.skills',{ delay: 600 });
ScrollReveal().reveal('.proyect',{ delay: 600 });
ScrollReveal().reveal('.contact',{ delay: 600 });