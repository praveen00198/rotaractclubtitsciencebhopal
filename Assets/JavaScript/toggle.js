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

const carousel = document.querySelector('.carousel');
carousel.innerHTML += carousel.innerHTML; // Duplicates cards for infinite looping
document.querySelector('.carousel').style.animationDuration = "25s"; // Change to slower speed
