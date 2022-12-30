const squares = document.querySelectorAll('.square')
squares.forEach(square => {
    square.addEventListener('click', placeLetter)
})
class Board{
    constructor(){

    }

}

class Player{
    constructor(){

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