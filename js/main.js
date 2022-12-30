// const squares = document.querySelectorAll('.square')

// class Board{
//     constructor(){
        
//     }
//     initialize(){
//         squares.forEach((square) => {
//           square.addEventListener("click", placeLetter());
//         });
//     }

//     placeLetter(letter){
        
//     }
// }

// class Player{
//     constructor(letter){
//         this._letter = letter
//     }
//     get letter(){
//         return this._letter
//     }
// }

// // function placeLetter () {
    
// //     console.log("square")
// // }

// let player = "X";

// function changePlayer() {
//     if(player == 'X') {
//         player = 'O'
//     } else {
//         player = 'X'
//     }
// }

// console.log('hi')

// let theGameBegin = new Board

const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
       square.addEventListener("click", updateSquare);
    });

let player = "X"

// document.getElementById("one").addEventListener('click', updateSquare)

function updateSquare() {
    console.log(this.value)
    if(!this.value){
        console.log(this.value)
        this.value = player;
    }
    
    changePlayer()
}

function changePlayer() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}