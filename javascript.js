var currentPage;
var navItems;
var images;
var imageTexts;
var currentImageIndex;
var backgroundImage;
var pageHolder;
var h1Element;

document.addEventListener('DOMContentLoaded', function () {
    currentPage = window.location.pathname;
    navItems = document.querySelectorAll('nav a');

    navItems.forEach(function (navItem) {
        var href = navItem.getAttribute('href');

        if (currentPage.endsWith(href)) {
            navItem.style.color = '#e9c46a';
        }
    });

    images = [
        "imgs/jeshoots-com-mSESwdMZr-A-unsplash.jpg",
        "imgs/tim-toomey-STqHLqMne3k-unsplash.jpg",
        "imgs/upgraded-points-KenpE6DO1l0-unsplash.jpg",
        "imgs/sebastian-pena-lambarri-7i5HMCGupVw-unsplash.jpg",
        "imgs/why-kei-8e2gal_GIE8-unsplash.jpg",
        "imgs/bruce-mars-xj8qrWvuOEs-unsplash.jpg",
        "imgs/rupixen-com-Q59HmzK38eQ-unsplash.jpg"
    ];

    imageTexts = [
        "Home Page",
        "Food",
        "Lodging",
        "Activities",
        "Travel",
        "FAQs",
        "Booking"
    ];

    currentImageIndex = 0;
    backgroundImage = document.querySelector(".background-image");
    pageHolder = document.querySelector(".pageHolder");
    h1Element = pageHolder.querySelector("h1");

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateUI();
    }

    function redirectToHtmlPage() {
        const pageUrls = [
            "index.html",
            "food.html",
            "lodging.html",
            "activities.html",
            "transporation.html",
            "faqs.html",
            "booking.html"
        ];

        window.location.href = pageUrls[currentImageIndex];
    }

    setInterval(changeBackgroundImage, 3000);
    h1Element.addEventListener("click", redirectToHtmlPage);

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            changeBackgroundImage();
        } else if (event.key === "ArrowLeft") {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateUI();
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            // Swipe left
            changeBackgroundImage();
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateUI();
        }
    });
});
function moveBackward() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateUI();
}

function moveForward() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateUI();
}
function updateUI() {
    backgroundImage.src = images[currentImageIndex];
    h1Element.innerText = imageTexts[currentImageIndex];

    const breadcrumbs = document.querySelectorAll(".breadcrumb");
    breadcrumbs.forEach((breadcrumb, index) => {
        if (index === currentImageIndex) {
            breadcrumb.classList.add("current-breadcrumb");
        } else {
            breadcrumb.classList.remove("current-breadcrumb");
        }
    });
}