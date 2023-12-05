function GameBoard() {
  // Board is an array with row 1 being indexes 0-2, row 2 being indexes 3-5, row 3 being indexes 6-8
  const board = Array(9);
  board.fill(0);

  const getBoard = () => board;

  const checkAvailable = () => board.includes(0);

  const markCell = (cell, mark) => {
    if (board[cell] == 0) {
      board[cell] = mark;
      return true;
    };
    return false;
  };

  const printBoard = () => {
    console.log(board);
  };

  return {getBoard, checkAvailable, markCell, printBoard};
};

function GameController(
  playerOneName = "Player One", playerTwoName = "Player Two"
) {
  const board = GameBoard();

  const players = [
    Player(playerOneName, 'X'),
    Player(playerTwoName, 'O')
  ];

  let currentPlayer = players[0];

  const switchPlayer = () => {
    currentPlayer = currentPlayer == players[0] ? players[1] : players[0];
  };

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkWin = () => {
    for (let i = 0; i < winningConditions.length; i++) {
      condition = winningConditions[i];
      a = board.getBoard()[condition[0]];
      b = board.getBoard()[condition[1]];
      c = board.getBoard()[condition[2]];
      if (!a || !b || !c) continue;
      if (a == b && b == c) {
        return true;
      };
    };
    false;
  };

  const playRound = (cell) => {
    let validInput = false;
    while (!validInput) {
      const input = prompt(`${currentPlayer.playerName}, which cell would you like to mark?`);
      // Insert code here to verify input is a number 0-9
      validInput = board.markCell(input, currentPlayer.playerMarker);
      if (!validInput) console.log("That cell is already occupied, please make a different move.")
    }
    board.printBoard();
    if (checkWin()) {
      console.log(`${currentPlayer.playerName} has won this match!`);
      return true;
    }
    else {
      switchPlayer();
    };
  };

  const playGame = () => {
    board.printBoard();
    while (board.checkAvailable()) {
      if (playRound()) return;
    };
    console.log(`This match ended in a tie.`);
  };

  return {playGame};
};

function Player(name, marker) {
  const playerName = name;
  const playerMarker = marker;

  return {playerName, playerMarker};
};
