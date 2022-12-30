const squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('click', placeLetter)
})

class Board{
    constructor(){
        squares.forEach(square => {
            square.addEventListener('click', placeLetter())
        })
    }
}

class Player{
    constructor(letter){
        this._letter = letter
    }
    get letter(){
        return this._letter
    }
}

function placeLetter () {
    
    // console.log(this)
}

let player = "X";

function changePlayer() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}

console.log('hi')

let theGameBegin = new Board