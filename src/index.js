const mainSlideElement = document.querySelector('#main-slide');
const imageToSlide = document.querySelector('.image-to-slide');
const imageSlidedAlready = document.querySelector('.preview-image-slided');
const timeToNextImage = 2000;
let currentImageIndex = 0;
let currentPreviewIndex = 0;
const slideIndicatorsContainer = document.querySelector('#slide-indicators');
const progressOverlays = document.querySelector('#progressOverlays');
// WILL BE FED BY THE USER WHEN USING THIS PACKAGE
const imagesList = [
    './assets/carousel-photo-01.jpg',
    './assets/carousel-photo-02.jpg',
    './assets/carousel-photo-03.jpg',
    './assets/carousel-photo-04.jpg'
];






// FUNCTION RESPONSIBLE FOR ANIMATING THE PROGRESS BARS
const animatePoressBar = currentIndex => {
    let i = 0;

    if (i == 0) {
        i = 1;
        var progressBarArray = document.querySelectorAll('.progress');
        progressBarArray[currentIndex].style.backgroundColor = 'yellow';
        let width = 1;
        var id = setInterval(animate, timeToNextImage / 100);

        function animate() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                progressBarArray[currentIndex].style.width = width + "%";
            }
        }
    }
}

// THIS FUNCTION HOLDS THE AUTO SLIDING IMAGES LOGIC
// THIS SWITCHES BETWEEN ALL AVAILABLE IMAGES BASE ON THE GIVEN
// TIME IN MILLESECONDS
const autoSlide = () => {
    imageToSlide.setAttribute('src', imagesList[currentImageIndex]);
    if (currentImageIndex < imagesList.length - 1)
        currentImageIndex++;
    else
        currentImageIndex = 0;
    animatePoressBar(currentImageIndex);
}

// THIS FUNCTION HOLDS THE AUTO SLIDING IMAGES LOGIC
// THIS WILL SHOW THE ALREADY SLIDED IMAGES IH THE LEFT BOTTOM PREVIEW BOX
const autoSlidePreview = () => {
    imageSlidedAlready.setAttribute('src', imagesList[currentPreviewIndex]);
    if (currentPreviewIndex < imagesList.length - 1)
        currentPreviewIndex++;
    else
        currentPreviewIndex = 0;
}





// BOOTSTRAPING ALL THE LOGIC HERE
(function bootstrap() {

    // auto slide
    imageToSlide.setAttribute('src', imagesList[0]);
    currentPreviewIndex = imagesList.length - 1;
    imageSlidedAlready.setAttribute('src', imagesList[currentPreviewIndex]);
    setInterval(() => {
        autoSlide();
        autoSlidePreview();
    }, timeToNextImage);

    // slide indicators
    for (img in imagesList) {
        slideIndicatorsContainer.innerHTML += '<div class="indicator"></div>';
        progressOverlays.innerHTML += '<div class="progress"></div>';
    }
})()