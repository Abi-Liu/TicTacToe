const squares = document.querySelectorAll('.square')

class Board{
    constructor(){
        squares.forEach(square => {
            square.addEventListener('click', placeLetter)
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

let player = "X";

function changePlayer() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}
console.log('hi')