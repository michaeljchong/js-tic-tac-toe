function GameBoard() {
  const dim = 3;
  const board = [];
  for (let i = 0; i < dim; i++) {
    board[i] = [];
    for (let j = 0; j < dim; j++) {
      board[i].push(Cell());
    }
  }
};

function GameController() {

};

function Player(name, marker) {

};
