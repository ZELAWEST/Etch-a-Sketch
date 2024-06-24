const container = document.querySelector('.container')
const gridSize = document.querySelector('button')
function draw(tiles) {
    let countRow = 0
    let countCol = 0
    while (countRow < tiles) {
        let row = document.createElement('div')
        row.classList.add('col')
        row.addEventListener('mouseover',e =>{
            e.target.style.backgroundColor = getRandomColor()})
        container.appendChild(row)
        countCol = 0
        while (countCol < tiles) {
            let col = document.createElement('div')
            col.classList.add('col')
            col.addEventListener('mouseover',e =>{
                e.target.style.backgroundColor = getRandomColor()})
            row.appendChild(col)
            countCol++
        }
        countRow++
    }

}
gridSize.addEventListener('click', () => {
    let gridNumber = prompt('How many squares would you like?')
    
    if (!isNaN(gridNumber) && gridNumber < 100) {
        container.textContent = ''
        draw(gridNumber)

    } else {
        container.textContent = ''
        draw(16)
    }

})
function getRandomColor(){
    let color = []
    for(let i = 0;i < 3;i++){
        color.push(Math.floor(Math.random() * 256))
    }
    return 'rgb(' + color.join(',') + ')'
}