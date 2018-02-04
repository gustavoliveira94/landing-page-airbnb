var menu = document.querySelector(".hamburger");
var menuMobile = document.querySelector(".hidden");

function menuShow() {
    if (menuMobile.classList.contains("hidden")) {
        menuMobile.classList.remove("hidden");
    }

    else {
        menuMobile.classList.add("hidden");
    }
}

menu.addEventListener("click", menuShow);