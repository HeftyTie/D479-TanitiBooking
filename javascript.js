document.addEventListener('DOMContentLoaded', function () {
    var currentPage = window.location.pathname;
    var navItems = document.querySelectorAll('nav a');

    navItems.forEach(function (navItem) {
        var href = navItem.getAttribute('href');

        if (currentPage.endsWith(href)) {
            navItem.style.padding = '5px';
            navItem.style.backgroundColor = 'white';
            navItem.style.borderRight = '2px solid black';
            navItem.style.borderRadius = '50%';
            navItem.style.opacity = '0.2';
        } 
    });

    const images = [
        "imgs/jeshoots-com-mSESwdMZr-A-unsplash.jpg",
        "imgs/julian-hochgesang-INDN7nOIVJ8-unsplash.jpg"
    ];

    const imageTexts = [
        "Home Page",
        "Lodging"
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
