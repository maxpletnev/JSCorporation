document.getElementById('some_checkbox').setAttribute('checked','checked');

let burgerBtn = document.querySelector(".burger_btn"),
    burgerMenu = document.querySelector(".burger__menu"),
    burgerBtn2 = document.querySelector(".burger_btn--2");


burgerBtn.addEventListener("click",function(){
    burgerMenu.classList.remove("animated","fadeInRight");
    burgerMenu.classList.toggle("burger__menu--show");
    burgerMenu.classList.add("animated","fadeInLeft");

});
burgerBtn2.addEventListener("click",function(){
    burgerMenu.classList.remove("animated","fadeInLeft");
    burgerMenu.classList.toggle("burger__menu--show");
    
});