// Activity 3: Keyboard Event
// Task 1: Add a keydown event to the input field that logs the key pressed to the console

const input = document.querySelector('.input1');

input.addEventListener('keydown', (e) =>{
    console.log(e.key);
})

// Task 2: Add a keyup event to the input field that displays the current in a paragraph 

const paragraph2 = document.querySelector('.para2');

input.addEventListener('keyup', function keyUpFunction(e){
    paragraph2.textContent = e.target.value;
});

