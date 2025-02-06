// script.js
const slider = document.getElementById('slider');
const image = document.getElementById('image');

slider.addEventListener('input', () => {
    const value = slider.value;
    image.style.opacity = value / 100;
});