const lorem = document.querySelector('.lorem');
// lorem.remove();
document.getElementById('remove').addEventListener('click', () => {
    // Step 3: Remove the selected element from the DOM
    lorem.remove();
});

const ul = document.getElementById('myList');

document.getElementById('removeLast').addEventListener('click', () => {
    ul.removeChild(ul.lastElementChild);
});
