// 汉堡菜单
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-mobile');
hamburger.addEventListener('click',()=>{
  mobileNav.classList.toggle('show');
})