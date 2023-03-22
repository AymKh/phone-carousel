const mainSlideElement = document.querySelector('#main-slide');
const imageToSlide = document.querySelector('.image-to-slide');
const timeToNextImage = 1000;
let currentImageIndex = 0;

const imagesList = [
    '../assets/carousel-photo-01.jpg',
    '../assets/carousel-photo-02.jpg',
    '../assets/carousel-photo-03.jpg',
    '../assets/carousel-photo-04.jpg'
];


const autoSlide = () => {
    imageToSlide.setAttribute('src', imagesList[currentImageIndex]);
    if (currentImageIndex < imagesList.length - 1)
        currentImageIndex++;
    else
        currentImageIndex = 0;
}




setInterval(() => {
    autoSlide();
}, timeToNextImage);
