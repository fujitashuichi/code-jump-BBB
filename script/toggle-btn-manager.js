const toggleBtn = document.getElementById("toggle-btn");
const spanList = document.querySelectorAll("span");

if (!toggleBtn || !spanList) {
    console.error("Some Element was not defined");
} else {
    console.info("All Elements were defined");
}


toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open");
});
