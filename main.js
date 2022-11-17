function createDivs(number_of_divs_per_row) {
    const container = document.querySelector('.main-container');
    const container_width = container.getBoundingClientRect()['width'] - 4;
    const unit_width = container_width / number_of_divs_per_row;

    for (let i = 0; i < number_of_divs_per_row ** 2; i++ ) {
        container.appendChild(createUnitDiv(unit_width));
    }
}

function createUnitDiv(width) {
    const unitDiv = document.createElement('div')

    unitDiv.style.width = `${width}px`;
    unitDiv.style.height = `${width}px`;
    unitDiv.style.background = 'pink';
    unitDiv.style.border = '1px solid white';
    return unitDiv;
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    createDivs(7);
})