const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
container.style.width = '65%';
createGrid(256);

resetButton.addEventListener('click', (e) => {reset()});

function createGrid(size) {
    let long = Math.sqrt(size);
    for (var i = 0; i < size; i++) {
        var gridDiv = document.createElement('div');
        container.style.setProperty(`--rowNum`, long);
        container.style.setProperty(`--colNum`, long);
        gridDiv.classList.add('empty');
        container.appendChild(gridDiv);
    }
    draw();
}



function draw() {
    const empty = document.querySelectorAll('.empty');
    empty.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            cell.classList.add('filled')}
    )});
}

function reset() {
    var size = prompt("Enter new size:");
    size = Number(size);

    alert(`Creating new grid, ${size} by ${size} large`);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    size = (size * size);
    createGrid(size);

}