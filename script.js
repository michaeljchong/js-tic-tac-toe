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
  ]

  let currentPlayer = players[0]

  const switchPlayer = () => {
    currentPlayer = currentPlayer == players[0] ? players[1] : players[0];
  };

  return {};
};

function Player(name, marker) {
  const playerName = name;
  const playerMarker = marker;

  return {playerName, playerMarker};
};
