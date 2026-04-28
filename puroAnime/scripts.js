const btntop = document.querySelector(".btntop");

// DARK-THEME (SINTAXE)
document.querySelector(".icon-theme").addEventListener("click", () => {
    document.body.classList.toggle("ativo");
});

// BTN-TOP (SINTAXE)
window.addEventListener("scroll", () => {
    btntop.hidden = scrollY < 300;
});

btntop.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});