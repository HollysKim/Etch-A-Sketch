const page = document.querySelector('.container');
const gridElements = document.querySelectorAll('.gridDiv');

for(let i = 1; i < 257; i++) {
    const div = document.createElement('div');
    div.classList.add('.gridDiv');
    page.appendChild(div);
}

