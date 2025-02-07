const slider = document.getElementById('slider');
const image = document.getElementById('image');
image.style.opacity = 0;

slider.value = 0;

slider.addEventListener('input', () => {
    const value = slider.value;
    image.style.opacity = value / 100;
});

