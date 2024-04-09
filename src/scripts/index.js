document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".main-content button");
    const sectionAbout = document.querySelector("section#about");

    button.addEventListener("click", function() {
        sectionAbout.scrollIntoView({ behavior: "smooth" });
    });
});
