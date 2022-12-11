let menuBtn = document.querySelector('.menu-btn');
let menuList = document.querySelector('.menu__list');
menuBtn.addEventListener('click', function(e) {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});