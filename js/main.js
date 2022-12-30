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

function placeLetter () {
    console.log('hi')
}

let player = "X";

function changePlayer() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}
<<<<<<< HEAD


let theGameBegin = new Board()
console.log('hi')
=======
console.log('hi')
>>>>>>> 86c5f14 (commit)
