var abrir = document.querySelector("#abrir");
var fechar = document.querySelector("#fechar");
var header_nav = document.querySelector("header nav");
var header = document.querySelector("header");
var ul_li = document.querySelectorAll("ul li");

abrir.addEventListener("click", () => {
    header_nav.classList.add("navbar_responsive");
    abrir.style.display = "none";
    fechar.style.display = "block";
    header.style.background = "#2a64a7";
    for(const link of ul_li) {
        link.classList.add("ul_li_responsive");
    }
});

fechar.addEventListener("click", () =>{
    abrir.style.display = "block";
    fechar.style.display = "none";
    header.style.background = "none";
    header_nav.classList.remove("navbar_responsive");
    for(const link of ul_li) {
        link.classList.remove("ul_li_responsive");
    }
});