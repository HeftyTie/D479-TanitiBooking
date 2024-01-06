document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname;
    var navItems = document.querySelectorAll('nav a');

    navItems.forEach(function (navItem) {
        var href = navItem.getAttribute('href');

        if (currentPage.endsWith(href)) {
            navItem.style.color = '#e9c46a';
        } 
    });

    const images = [
        "imgs/jeshoots-com-mSESwdMZr-A-unsplash.jpg",
        "imgs/tim-toomey-STqHLqMne3k-unsplash.jpg",
        "imgs/upgraded-points-KenpE6DO1l0-unsplash.jpg",
        "imgs/sebastian-pena-lambarri-7i5HMCGupVw-unsplash.jpg",
        "imgs/why-kei-8e2gal_GIE8-unsplash.jpg",
        "imgs/bruce-mars-xj8qrWvuOEs-unsplash.jpg",
        "imgs/rupixen-com-Q59HmzK38eQ-unsplash.jpg"
    ];

    const imageTexts = [
        "Home Page",
        "Food",
        "Lodging",
        "Activities",
        "Travel",
        "FAQs",
        "Booking"
    ];

    let currentImageIndex = 0;
    const backgroundImage = document.querySelector(".background-image");
    const pageHolder = document.querySelector(".pageHolder");
    const h1Element = pageHolder.querySelector("h1");

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundImage.src = images[currentImageIndex];
        h1Element.innerText = imageTexts[currentImageIndex];
    }

    setInterval(changeBackgroundImage, 3000);

});
