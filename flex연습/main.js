const togleBtn = document.querySelector('.navbar_togleBtn');
/* 햄버거 아이콘을 변수에 할당*/
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togleBtn.addEventListener('click',()=>{
    /*클릭이벤트=>active클래스 추가 제거 토글 */
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})