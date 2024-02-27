// Botão Mobile

const btnMobile = document.getElementById("js-btn-mobile");

btnMobile.addEventListener("click", () => {
    btnMobile.classList.toggle("is-active");
    document.documentElement.classList.toggle("menu-opened");
})

// Swiper Seção de posts relacionados

var slidePostRel = new Swiper(".swiper-posts-rel", {
    slidesPerView: 2,
    spaceBetween: 32,
    pagination: {
        el: ".swiper-posts-rel .navigation .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-posts-rel .navigation .btn-next",
        prevEl: ".swiper-posts-rel .navigation .btn-prev",
    },
    speed: 600,
})