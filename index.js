const page = document.querySelector('div');
const gridBtn = document.querySelector('#gridBtn');
const eraseBtn = document.querySelector('#eraseBtn');

createGrid(16);

function createGrid(val) {
    page.style.gridTemplateColumns = `repeat(${val}, ${val}fr)`;
    let loopVal = (val*val)+1;
    for(let i = 1; i < loopVal; i++) {
        const div = document.createElement('div');
        div.classList.add('gridDiv');
        page.appendChild(div);
    };
    let gridElements = document.querySelectorAll('.gridDiv');
    mouseDown(gridElements);
    eraseColor(gridElements);
}

function deleteGrid() {
    document.querySelectorAll('.gridDiv').forEach((e) => e.parentNode.removeChild(e));
}
let colorDisabled = false;

function mouseDown(gridElements) {
    gridElements.forEach((div) => {
        div.addEventListener('mousedown', () => {
            div.classList.add('gridDivColorOn');
            colorDisabled = false;
            console.log('Mouse pressed down!');
            mouseMove(gridElements);
            mouseUp(gridElements);
        })
    })
}

function mouseMove(gridElements) {
    gridElements.forEach((div) => {
        div.addEventListener('mousemove', () => {
            if(colorDisabled == true) {
        
            }
            else {
                div.classList.add('gridDivColorOn');
                console.log('Mouse moved!');
            }
        })
    })
}

function mouseUp(gridElements) {
    gridElements.forEach((div) => {
        div.addEventListener('mouseup', ()=> {
            colorDisabled = true;
            console.log('Mouse lifted up!');
        })
    })
}


    gridBtn.addEventListener('click', () => {
        let gridSize = prompt('Input a grid size up to 100:');
        if(gridSize < 101) {
            deleteGrid();
        createGrid(gridSize);
        }
        else {
            alert('Invalid input. Inputs must be numerical and must not exceed 100.');
        }
    });

function eraseColor(gridElements) {
    eraseBtn.addEventListener('click', ()=> {
        gridElements.forEach((div) => {
            div.classList.remove('gridDivColorOn');
        })
    })
}