// Botão Mobile

const btnMobile = document.getElementById("js-btn-mobile");

btnMobile.addEventListener("click", () => {
    btnMobile.classList.toggle("is-active");
    document.documentElement.classList.toggle("menu-opened");
})