const btntop = document.querySelector(".btntop");
const icontheme = document.querySelector(".icon-theme");
const body = document.body
const headertheme = document.querySelector(".header-theme");
const footertheme = document.querySelector(".footer-theme")

icontheme.addEventListener("click", () => {
    body.classList.toggle("ativo")
    headertheme.classList.toggle("ativo")
    footertheme.classList.toggle("ativo")
})

window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
        return (btntop.style.opacity = "0");
    }

    return (btntop.style.opacity = "1");
});

btntop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});