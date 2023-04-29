export class Game {
  constructor() {
    this._history = [];
    this._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this._fieldSize = 3;
    this._userMoveSymbol = 'x';
    this._computerMoveSymbol = 'o';
  }
  getState() {
    return this._board;
  }

  acceptUserMove(x, y) {
    if (!this._isCellFree(x, y)) {
      this._throwException('This cell is already occupied');
    }

    this._updateBoard(x, y);
    this._updateHistory('user', x, y);
  }

  createComputerMove() {
    const x = this._getRandomCoordinate();
    const y = this._getRandomCoordinate();

    if (this._isCellFree(x, y)) {
      this._updateBoard(x, y, { symbol: this._computerMoveSymbol });
      this._updateHistory('computer', x, y);
    }
  }

  getHistory() {
    return this._history;
  }

  _updateBoard(x, y, config = {}) {
    const { symbol = this._userMoveSymbol } = config;
    this._board[x][y] = symbol;
  }

  _updateHistory(turn, x, y) {
    this._history.push({ turn, x, y });
  }

  _isCellFree(x, y) {
    return !this._board[x][y];
  }

  _throwException(message) {
    throw new Error(message);
  }

  _getRandomCoordinate() {
    return Math.floor(Math.random() * (this._fieldSize - 0));
  }
}
