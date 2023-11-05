/**@type {HTMLDivElement} */
let dragElement = document.querySelector('.drag_element');
/**@type {HTMLDivElement} */
let dragContainer = document.querySelector('.drag_container');

dragElement.addEventListener('dragstart', (event) => {
    dragElement.style.opacity = '0.7';
});
dragElement.addEventListener('dragend', (event) => {
    dragElement.style.opacity = '1';
});

dragContainer.addEventListener('dragenter', (event) => {
    dragContainer.style.borderColor = 'aqua';
});

dragContainer.addEventListener('dragleave', (event) => {
    dragContainer.style.borderColor = 'black';
});

dragContainer.addEventListener('dragover', (event) => {
    event.preventDefault();
});
dragContainer.addEventListener('drop', (e) => {
    dragContainer.style.borderColor = 'black';
    dragElement.parentElement.removeChild(dragElement);
    dragContainer.appendChild(dragElement);
})