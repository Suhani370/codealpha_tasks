// Select filter buttons and gallery items
const filterButtons = document.querySelectorAll(".filter-buttons button");
const galleryItems = document.querySelectorAll(".gallery-item");

// Filter images by category
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (
                filterValue === "all" ||
                item.classList.contains(filterValue)
            ) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        });

    });

});
// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".close");

let currentIndex = 0;

// Open image in lightbox
galleryItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        const selectedImage = item.querySelector("img");

        lightboxImage.src = selectedImage.src;

        lightbox.classList.add("active");
    });

});

// Close lightbox
closeButton.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

// Close when clicking outside the image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});
// Previous and Next buttons
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Show image by index
function showImage(index) {

    const images = document.querySelectorAll(".gallery-item img");

    // Move to last image from first image
    if (index < 0) {
        currentIndex = images.length - 1;
    }

    // Move to first image from last image
    else if (index >= images.length) {
        currentIndex = 0;
    }

    else {
        currentIndex = index;
    }

    lightboxImage.src = images[currentIndex].src;
}


// Previous image
prevButton.addEventListener("click", (event) => {

    event.stopPropagation();

    showImage(currentIndex - 1);

});


// Next image
nextButton.addEventListener("click", (event) => {

    event.stopPropagation();

    showImage(currentIndex + 1);

});


// Keyboard controls
document.addEventListener("keydown", (event) => {

    // Run only when lightbox is open
    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    else if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

    else if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

});