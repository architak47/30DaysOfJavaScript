// Activity 4: Form Event
// Task 1: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.querySelector('.form1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form Submitted');
    console.log('Name: ', form.name.value);
})

// Task 2: Add a change event listener to select dropdown that displays the selected value in a paragraph

const select = document.querySelector('.select1');
const para = document.querySelector('.para3');

select.addEventListener('change', (e) => {
    para.textContent = `You have selected ${select.value}`;
})

