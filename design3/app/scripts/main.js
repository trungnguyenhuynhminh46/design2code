var btn_toggle = document.querySelector('.header-top__toggle');
var header_top_menu = document.querySelector('.header-top__menu');
btn_toggle.addEventListener('click', function(e){
  header_top_menu.classList.add('is-expand');
})
window.addEventListener('click', function(e){
  if((!header_top_menu.contains(e.target)) && (!e.target.matches('.header-top__toggle'))){
    header_top_menu.classList.remove('is-expand');
  }
})
var arrows_class = {
  up: "fa-chevron-up",
  down: "fa-chevron-down"
}
// accordion
var whatwedo_items = document.querySelectorAll('.whatwedo-item');
for(let i=0;i<whatwedo_items.length;i++){
  whatwedo_items[i].addEventListener('click', function(e){
    let header = e.target.closest('.whatwedo-item__header');
    let is_active = whatwedo_items[i].classList.contains('is-active');
    let current_active = document.querySelector('.whatwedo-item.is-active');
    if(header){
      if(is_active){
        header.querySelector('i').classList.remove(arrows_class['up']);
        header.querySelector('i').classList.add(arrows_class['down']);
        whatwedo_items[i].classList.remove('is-active');
      }else{
        header.querySelector('i').classList.remove(arrows_class['down']);
        header.querySelector('i').classList.add(arrows_class['up']);
        if(current_active){
          current_active.classList.remove('is-active');
          current_active.querySelector('i').classList.remove(arrows_class['up']);
          current_active.querySelector('i').classList.add(arrows_class['down']);
        }
        whatwedo_items[i].classList.add('is-active');
      }
    }
  })
}
$(document).ready(function(){
  $('.speech__list').slick({
    autoplay:true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  });
})