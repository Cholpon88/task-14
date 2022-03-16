let menuBtn = document.querySelector(".menu-btn");

let menu = document.querySelector(".header-nav");

menuBtn.addEventListener("click", function(){
    menu.classList.toggle("active");

    if (menu.classList.contains("active")){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});