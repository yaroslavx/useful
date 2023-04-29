import { expect, jest, test } from '@jest/globals';
import { Game } from '../src/Game';
import { GameBuilder } from './gameBuilder';

const userMoveSymbol = 'x';
const computerMoveSymbol = 'o';
const userName = 'user';
const computerName = 'computer';
const initialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const fillCells = (game, config = {}) => {
  const { x = -1, y = -1 } = config;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i !== x || j !== y) game.acceptUserMove(i, j);
    }
  }
};

const count = (arr, symbol) => {
  return arr.reduce((res, row) => {
    return row.reduce((count, el) => {
      return el === symbol ? count + 1 : count;
    }, res);
  }, 0);
};

let game;
beforeEach(() => {
  game = new Game();
});

describe('Game', () => {
  test('Should return empty game board', () => {
    const board = game.getState();

    expect(board).toEqual(initialState);
  });

  test("Writes user's symbol in cell with given coordinates", () => {
    const x = 1,
      y = 2;

    game.acceptUserMove(x, y);
    const board = game.getState();

    expect(board[x][y]).toBe(userMoveSymbol);
  });

  test('Throws an exception if user moves in taken cell', () => {
    const x = 2,
      y = 2;

    game.acceptUserMove(x, y);
    const func = game.acceptUserMove.bind(game, x, y);

    expect(func).toThrow('This cell is already occupied');
  });

  test("Game saves user's moves history", () => {
    const x = 1,
      y = 1;

    game.acceptUserMove(x, y);
    const history = game.getHistory();

    expect(history).toStrictEqual([{ turn: userName, x, y }]);
  });

  test("Game saves computer's moves history", () => {
    const mock = jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    game.createComputerMove();
    const history = game.getHistory();

    expect(history).toEqual([{ turn: computerName, x: 1, y: 1 }]);
    mock.mockRestore();
  });

  test('Game saves all moves history', () => {
    const x = 1,
      y = 1;

    game.acceptUserMove(x, y);
    game.createComputerMove();

    const history = game.getHistory();

    expect(history.length).toBe(2);
    expect(history[0].turn).toBe(userName);
    expect(history[1].turn).toBe(computerName);
  });

  test('Computer moves in randomly selecter cell', () => {
    const mock = jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

    game.createComputerMove();
    const board = game.getState();

    expect(board[1][1]).toEqual(computerMoveSymbol);
    mock.mockRestore();
  });

  test('Compoter moves in last vacant cell', () => {
    fillCells(game, { x: 2, y: 2 });
    game.createComputerMove();
    const board = game.getState();

    expect(count(game.getState(), userMoveSymbol)).toBe(8);
    expect(count(game.getState(), computerMoveSymbol)).toBe(1);
    expect(board[2][2]).toEqual(computerMoveSymbol);
  });

  test('If there are no free cells computer throws an exception', () => {
    fillCells(game);

    const func = game.createComputerMove.bind(game);
    expect(func).toThrow('no cells available');
  });

  test('Checks if user won by horizontal', () => {
    const game = new GameBuilder()
      .withBoardState(
        `
        x x x
        . . .
        . . .
      `
      )
      .build();

    const userWon = game.isWinner(userName);
    expect(userWon).to.equal(true);
  });
});
