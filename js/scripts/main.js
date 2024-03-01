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
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 15
        },
        500: {
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5,
        },
        1100: {
            slidesPerView: 2,
            spaceBetween: 32
        },
    }
})

// Dropdown de filtro

const btnDropDown = document.querySelector(".js-dropdown-filter");

function toggleDropdown(event) {
    if (event.target.closest('.js-dropdown-filter')) {
        btnDropDown.classList.toggle("active");
    } else {
        btnDropDown.classList.remove("active");
    }
}

document.addEventListener("click", toggleDropdown);