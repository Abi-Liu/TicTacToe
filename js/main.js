
let count = 0
let won = false
const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
       square.addEventListener("click", updateSquare);
    });

let player = "X"

function updateSquare() {
    if(won){
        return null
    }
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
      won = true
      count = 9
      isFull(count)
    }
}

function isFull(count){
    if(count === 9 && won){
        alert(`Player ${player} won!`)
    } else if (count === 9 && !won) {
        alert('Draw!')
    }
}