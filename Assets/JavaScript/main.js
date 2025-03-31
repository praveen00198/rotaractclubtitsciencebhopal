// Toggle the menu on mobile devices
// This function toggles the visibility of the navigation menu when the hamburger icon is clicked
let isOpen = false;

function toggleMenu() {
    const navElement = document.querySelector(".nav-element");

    if (isOpen) {
        navElement.classList.remove("active");
    } else {
        navElement.classList.add("active");
    }

    isOpen = !isOpen; 
}
