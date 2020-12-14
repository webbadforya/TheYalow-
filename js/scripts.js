let menuButton = document.querySelector(".hamburger-button")
let menu = document.querySelector(".header-nav")
menuButton.addEventListener("click",()=>{
   menu.classList.toggle("open-menu")
})