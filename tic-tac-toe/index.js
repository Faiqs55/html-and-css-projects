let cols = document.getElementsByClassName("col");
let player = "O";
let board = Array(9).fill(null);

Object.keys(cols).forEach(function (item, index) {
  cols[item].addEventListener("click", function () {
    board[item] = player;
    //  console.log(board);
    this.innerHTML = `<div class="${player}"></div>`;
    if(board[0] == player && board[1] == player && board[2] == player ||
       board[3] == player && board[4] == player && board[5] == player ||
       board[6] == player && board[7] == player && board[8] == player ||
       board[0] == player && board[3] == player && board[6] == player ||
       board[1] == player && board[4] == player && board[7] == player ||
       board[2] == player && board[5] == player && board[8] == player ||
       board[0] == player && board[4] == player && board[8] == player ||
       board[2] == player && board[4] == player && board[6] == player 
    ){
        alert(`${player == "X" ? "Player 1 Won! (square)" : "Player 2 Won (circle)"}`)        
    }
    player = player == "X" ? "O" : "X";
  });
});
