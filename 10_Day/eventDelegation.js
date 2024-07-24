// Activity 5: Event Delegation
// Task 1: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector('.ul1');

list.addEventListener('click', (e) => {
    console.log(e.target.textContent);
})


// Task 2: Add an event listener to a parent element that listens for events from dynamically added child elements.

const list2 = document.querySelector('.ul2');
const button2 = document.querySelector('.btn2');

button2.addEventListener('click', () => {
    const newLi = document.createElement('li');
    let count = document.querySelectorAll('.ul2 li').length + 1;
    newLi.textContent = `New Item ${count}`;
    list2.appendChild(newLi);
})
