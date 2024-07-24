// Activity 1: Basic Event Handling
// Task 1: Add click event to change text of paragraph by clicking button
const paragraph = document.querySelector('.para1');

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    paragraph.innerHTML = 'You clicked the button';
})


// Task 2: Add double click event to change visibility of image

const image = document.querySelector('.image1')

// image.addEventListener('dblclick', () => {
//     image.classList.toggle('hidden');
// })
// or
image.addEventListener('dblclick', () => {
    image.style.display = 'none';
})