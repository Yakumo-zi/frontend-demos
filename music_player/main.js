import "./style.css"
import './assets/iconfont.css'
/**@type {HTMLInputElement} */
let slider = document.querySelector('.slider input');
/**@type {HTMLDivElement} */
let process = document.querySelector('.slider .process');

/**@type {HTMLDivElement} */
let processBg = document.querySelector('.slider .process-bg');

/**@type {HTMLImageElement} */
let songCover = document.querySelector('.song-cover');

process.style.width = (slider.clientWidth * (50 / 100)) + 'px';

slider.addEventListener('input', (e) => {
    process.style.width = (slider.clientWidth * (slider.value / 100)) + 'px';
});

let deg = 1;
function rotate(time) {
    songCover.style.transform = `rotate(-${deg}deg)`;
    deg = deg + 1;
    requestAnimationFrame(rotate)
}
rotate();
