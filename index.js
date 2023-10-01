const menubtn = document.querySelector(".menubar");
const sideMenu = document.querySelector("aside");
const closebtn = document.querySelector(".close");
const themeToggler = document.querySelector(".theme-toggler");

menubtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
});

closebtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});