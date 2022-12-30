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
        checkWin()
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
    if (
      (document.getElementById("one").innerHTML == player &&
        document.getElementById("two").innerHTML == player &&
        document.getElementById("three").innerHTML == player) ||

      (document.getElementById("four").innerHTML == player &&
        document.getElementById("five").innerHTML == player &&
        document.getElementById("six").innerHTML == player) ||

      (document.getElementById("seven").innerHTML == player &&
        document.getElementById("eight").innerHTML == player &&
        document.getElementById("nine").innerHTML == player) ||

      (document.getElementById("one").innerHTML == player &&
        document.getElementById("four").innerHTML == player &&
        document.getElementById("seven").innerHTML == player) ||

      (document.getElementById("two").innerHTML == player &&
        document.getElementById("five").innerHTML == player &&
        document.getElementById("eight").innerHTML == player) ||

      (document.getElementById("three").innerHTML == player &&
        document.getElementById("six").innerHTML == player &&
        document.getElementById("nine").innerHTML == player) ||

        document.getElementById("one").innerHTML == player && 
        document.getElementById("five").innerHTML == player && 
        document.getElementById("nine").innerHTML == player ||

        document.getElementById("three").innerHTML == player && 
        document.getElementById("five").innerHTML == player && 
        document.getElementById("seven").innerHTML == player

    ) {
      console.log(`${player} wins!`);
    }
}

function isFull(count){
    if(count === 9){
        alert("Draw!")
    }
}