const logo = document.getElementById("site-logo");
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

if (!menu || !toggleBtn) {
    console.error("Some Element was not defined");
} else {
    console.info("All Elements were defined");
}


toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
    menu.classList.toggle("open");
    logo.classList.toggle("white");
});
