const btntop = document.querySelector(".btntop");

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