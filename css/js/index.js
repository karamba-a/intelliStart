const images = [
    "img/fishing.png",
    "img/reading.png",
    "img/bike.png"
]

let currentSlide = 0;

function showSlide () {
    const carouselImage = document.querySelector('.hobbies img');
    carouselImage.src = images[currentSlide];
}

function nextSlide () {
    currentSlide++;
    if (currentSlide >= images.length) currentSlide = 0;
    showSlide ();
}

setInterval(nextSlide, 1000);

