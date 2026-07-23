// Olive Homes Website V1

console.log("Olive Homes V1 Loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Ready");

    const links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            this.style.opacity = "0.8";
        });

        link.addEventListener("mouseout", function() {
            this.style.opacity = "1";
        });
    });
});
