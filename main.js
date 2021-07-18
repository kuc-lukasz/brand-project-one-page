const hamburgerBtn = document.querySelector("#hamburger")
const navMenu = document.querySelector(".nav-menu")

function mobile () {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log('dziala')
    
}

hamburgerBtn.addEventListener('click', mobile)