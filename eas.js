const container = document.querySelector('.container')

function creatDivs(col,rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        div.style.border = '1px solid black'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
creatDivs(32,32)

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}