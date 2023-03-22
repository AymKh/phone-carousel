const mainSlideElement = document.querySelector('#main-slide');
const imageToSlide = document.querySelector('.image-to-slide');
const timeToNextImage = 1000;
let currentImageIndex = 0;
const slideIndicatorsContainer = document.querySelector('#slide-indicators')

// WILL BE FED BY THE USER WHEN USING THIS PACKAGE
const imagesList = [
    '../assets/carousel-photo-01.jpg',
    '../assets/carousel-photo-02.jpg',
    '../assets/carousel-photo-03.jpg',
    '../assets/carousel-photo-04.jpg'
];


// THIS FUNCTION HOLDS THE AUTO SLIDING IMAGES LOGIC
// THIS SWITCHES BETWEEN ALL AVAILABLE IMAGES BASE ON THE GIVEN
// TIME IN MILLESECONDS
const autoSlide = () => {
    imageToSlide.setAttribute('src', imagesList[currentImageIndex]);
    if (currentImageIndex < imagesList.length - 1)
        currentImageIndex++;
    else
        currentImageIndex = 0;
}





// BOOTSTRAPING ALL THE LOGIC HERE
(function bootstrap() {

    // auto slide
    setInterval(() => {
        autoSlide();
    }, timeToNextImage);

    // slide indicators
    for (img in imagesList) {
        slideIndicatorsContainer.innerHTML += '<div class="indicator"></div>';
    }
})()