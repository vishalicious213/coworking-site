const burger = document.getElementById("burger")
const menu = document.getElementById("menu")

burger.addEventListener("click", function() {
    menu.classList.toggle("menu-hide")
})