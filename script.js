function GameBoard() {
  // Board is an array with row 1 being indexes 0-2, row 2 being indexes 3-5, row 3 being indexes 6-8
  const board = Array(9);
  board.fill(0);

  const getBoard = () => board;

  const printBoard = () => {
    console.log(board);
  };

  return {getBoard, printBoard};
};

function GameController() {

};

function Player(name, marker) {

};
