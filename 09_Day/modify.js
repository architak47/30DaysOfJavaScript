const image = document.querySelector('#myImage');
image.src = 'https://images.unsplash.com/photo-1719937206341-38a6392dfdef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const divElement = document.querySelector('.lorem');
const toggleClassButton = document.getElementById('toggleClassButton');

toggleClassButton.addEventListener('click', () => {
    divElement.classList.toggle('new-class');
});