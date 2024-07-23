const heading = document.getElementById('name');
// heading.textContent = 'Hello Papa!';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    heading.textContent = 'Hello Papa!';
})

const col = document.querySelector('.cls');

col.style.backgroundColor = 'red';