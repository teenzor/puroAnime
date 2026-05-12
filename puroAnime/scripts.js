// THEME (SINTAXE)
document.querySelector(".icon-theme").addEventListener("click", () => {
    document.body.classList.toggle("ativo");
});

// BTN-TOP (SINTAXE)
const btn = document.querySelector(".btntop");
btn.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    btn.hidden = scrollY < 100;
    return (btn.style.opacity = "1")
});
