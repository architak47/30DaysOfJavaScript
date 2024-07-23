const changeTextButton = document.getElementById('changeTextButton');
const para = document.getElementById('paragraph');

changeTextButton.addEventListener('click', () => {
    para.textContent = 'The text has changed!';
})

const mouseoverElement = document.getElementById('mouseoverElement');

mouseoverElement.addEventListener('mouseover', () => {
    mouseoverElement.style.borderColor = 'red';
});

mouseoverElement.addEventListener('mouseout', () => {
    mouseoverElement.style.borderColor = 'black';
});