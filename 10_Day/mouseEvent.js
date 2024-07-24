// Activity 2: Mouse Event
// Task 1: add a mouseover event to the div element that changes the background color
const div = document.querySelector('.div1');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'blue';
})

// Task 2: add a mouseout event to the div element that reset the background color

div.addEventListener('mouseout', () =>{
    div.style.backgroundColor = 'white';
})