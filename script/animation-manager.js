addEventListener("DOMContentLoaded", () => {
    const tagWrappers = [...document.querySelectorAll(".slide-tag-wrapper")];

    const setItemActive = (entries) => {
        entries.forEach(entry => {
            const tag = entry.target.querySelector(".slide-tag");
            if (entry.isIntersecting) {
                tag.classList.add("active");
            } else {
                tag.classList.remove("active");
            }
        });
    }
    const options = {};
    const tagsObserver = new IntersectionObserver(setItemActive, options);

    tagWrappers.forEach(target => tagsObserver.observe(target));
});
