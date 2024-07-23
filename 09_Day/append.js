newDiv = document.createElement('div');
newDiv.textContent = 'Hello World';

newDiv.style.backgroundColor = 'red';


document.body.appendChild(newDiv);


// Add list

const list = document.getElementById('myList');
const newList = document.createElement('li');
newList.textContent = 'New Item';

list.appendChild(newList);

 count = 2;

document.getElementById('addList').addEventListener('click', () => {
    const nl = document.createElement('li');
    nl.textContent = `New Item ${count++}`;
    list.appendChild(nl);
})


