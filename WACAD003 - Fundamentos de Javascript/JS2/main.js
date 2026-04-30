const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
    {src: 'aries.png', alt: 'aries'},
    {src: 'touro.png', alt: 'touro'},
    {src: 'gemeos.png', alt: 'gemeos'},
    {src: 'cancer.png', alt: 'cancer'},
    {src: 'leao.png', alt: 'leao'}
];

const baseURL = 'images/';
for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', baseURL + image.src);
    newImage.setAttribute('alt', image.alt);
    newImage.setAttribute('tabindex', '0')
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () => {
        updateDisplayedImage(baseURL + image.src, image.alt);
    })
    
    newImage.addEventListener('keydown', (e) => {
        if (e.key === 'Enter'){
            updateDisplayedImage(baseURL + image.src, image.alt);
        }
    })
}

function updateDisplayedImage(src, alt) {
    displayedImage.src = src
    displayedImage.alt = alt
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function() {
    const isDark = btn.classList.toggle('dark');
    btn.textContent = isDark ? 'Lighten' : 'Darken';
    overlay.style.backgroundColor = isDark ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0)';
});