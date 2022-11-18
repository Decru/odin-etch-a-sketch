function createDivs(number_of_divs_per_row) {
    const container = document.querySelector('.main-container');
    const container_width = container.getBoundingClientRect()['width'] - 10;
    const unit_width = container_width / number_of_divs_per_row;

    for (let i = 0; i < number_of_divs_per_row ** 2; i++ ) {
        container.appendChild(createUnitDiv(unit_width));
    }
}

function createUnitDiv(sidelength) {
    const unitDiv = document.createElement('div')

    unitDiv.style.width = `${sidelength}px`;
    unitDiv.style.height = `${sidelength}px`;
    unitDiv.style.background = 'pink';
    unitDiv.style.border = '1px solid white';
    addMouseoverListener(unitDiv);

    return unitDiv;
}

function addMouseoverListener(unit_div) {
    unit_div.addEventListener('mouseover', () => {
        unit_div.style.background = 'black'
    });
}

function deleteContainerContents() {
    document.querySelector('.main-container').textContent = '';
}

function promptForSideLength() {
    const result = prompt('How many sections should the canvas have per side? (max 100)')

    if (result > 100) return 100;
    if (result < 1) return 1;
    return result;
}

function resetCanvas(side_length) {
    if (typeof(side_length) != 'number' || side_length < 1 || side_length > 100){
        side_length = promptForSideLength();
    }
    deleteContainerContents();
    createDivs(side_length);
}

const button = document.querySelector('button');
button.addEventListener('click', resetCanvas);
resetCanvas(20);