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
let count = 0
const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
       square.addEventListener("click", updateSquare);
    });

let player = "X"

// document.getElementById("one").addEventListener('click', updateSquare)

function updateSquare() {
    if(!this.value){
        this.value = player
        this.innerHTML = player;
        changePlayer();
        count++
    }
    isFull(count)
    
}

function changePlayer() {
    if(player == 'X') {
        player = 'O'
    } else {
        player = 'X'
    }
}

function checkWin(){

}

function isFull(count){
    if(count === 9){
        alert("Draw!")
    }
}