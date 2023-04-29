export class Game {
  constructor() {
    this._history = [];
    this._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this._fieldSize = 3;
    this._computerName = 'computer';
    this._userName = 'user';
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
    this._updateHistory(_userName, x, y);
  }

  createComputerMove() {
    if (this._getFreeCellsCount() === 0) {
      return this._throwException('no cells available');
    }

    const [x, y] = this._getFreeRandomCoordinates();

    this._updateHistory(this._computerName, x, y);
    this._updateBoard(x, y, {
      symbol: this._computerMoveSymbol,
    });
  }

  getHistory() {
    return this._history;
  }

  isWinner(player) {
    const symbol = this._getSymbolForPlayer(player);
    const range = [...Array(this._fieldSize).keys()];
    const isEqual = this._checkCellEqual(symbol);

    const horizontal = range.reduce(
      (res, i) => (isEqual(i, 0) && isEqual(i, 1) && isEqual(i, 2)) || res,
      false
    );

    return horizontal;
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

  _getFreeRandomCoordinates() {
    let x = this._getRandomCoordinate();
    let y = this._getRandomCoordinate();

    while (!!this._board[x][y]) {
      x = this._getRandomCoordinate();
      y = this._getRandomCoordinate();
    }

    return [x, y];
  }

  _getFreeCellsCount() {
    return this._board.reduce(
      (total, row) =>
        row.reduce((count, el) => (el === '' ? ++count : count), total),
      0
    );
  }

  _getSymbolForPlayer(player) {
    return player === this._userName
      ? this._userMoveSymbol
      : this._computerMoveSymbol;
  }

  _checkCellEqual(symbol) {
    return (i, j) => this._board[i][j] === symbol;
  }
}
