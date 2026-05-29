import { gameBoard } from "./gameBoard.js";
describe("Horizontal Recieve Attack", () => {
  test("Check if horizontal gets sinked", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 4, 3);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(2, 6);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Check if horizontal still not sinked", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 4, 3);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    expect(board.allShipSinked()).toBe(false);
  });

  test("Check trying to sink on already sinked coordinate", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 4, 3);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(2, 5);
    expect(board.allShipSinked()).toBe(false);
  });

  test("Check if collision works", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 4, 3);
    board.placeShipHorizontal(3, 4, 3);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(2, 6);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Check if there is no collision", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 4, 3);
    board.placeShipHorizontal(4, 4, 3);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(2, 6);
    expect(board.allShipSinked()).toBe(false);
  });

  test("Check if there is no collision in one row", () => {
    const board = gameBoard();
    board.placeShipHorizontal(1, 1, 3);
    board.placeShipHorizontal(1, 4, 3);
    board.recieveAttack(1, 1);
    board.recieveAttack(1, 2);
    board.recieveAttack(1, 3);
    board.recieveAttack(1, 5);
    board.recieveAttack(1, 6);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Adding horizontal in edge", () => {
    const board = gameBoard();
    board.placeShipHorizontal(10, 1, 3);
    board.placeShipHorizontal(10, 10, 1);
    board.recieveAttack(10, 1);
    board.recieveAttack(10, 2);
    board.recieveAttack(10, 3);

    expect(board.allShipSinked()).toBe(false);
  });

  test("Adding horizontal in 9th row", () => {
    const board = gameBoard();
    board.placeShipHorizontal(9, 10, 2);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Assigning below 0", () => {
    const board = gameBoard();
    board.placeShipHorizontal(1, 0, 4);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Assigning constant out of range", () => {
    const board = gameBoard();
    board.placeShipHorizontal(11, 2, 3);
    board.placeShipVertical(2, 5, 1);
    board.recieveAttack(2, 5);
    expect(board.allShipSinked()).toBe(true);
  });
});

describe("Vertical Testing", () => {
  test("Check if vertical ship can be sunked", () => {
    const board = gameBoard();
    board.placeShipVertical(2, 5, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(3, 5);
    board.recieveAttack(4, 5);
    board.recieveAttack(5, 5);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Check if vertical ship is not sunked", () => {
    const board = gameBoard();
    board.placeShipVertical(2, 5, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(3, 5);
    board.recieveAttack(4, 5);
    expect(board.allShipSinked()).toBe(false);
  });

  test("Parallel Vertical Collision", () => {
    const board = gameBoard();
    board.placeShipVertical(2, 5, 4);
    board.placeShipVertical(3, 5, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(3, 5);
    board.recieveAttack(4, 5);
    board.recieveAttack(5, 5);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Collision with Horizontal", () => {
    const board = gameBoard();
    board.placeShipVertical(2, 5, 4);
    board.placeShipHorizontal(2, 6, 4);
    board.recieveAttack(2, 5);
    board.recieveAttack(3, 5);
    board.recieveAttack(4, 5);
    board.recieveAttack(5, 5);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Assigning over 10", () => {
    const board = gameBoard();
    board.placeShipVertical(10, 2, 4);
    board.placeShipVertical(2, 6, 2);
    board.recieveAttack(2, 6);
    board.recieveAttack(3, 6);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Assigning below 0", () => {
    const board = gameBoard();
    board.placeShipVertical(0, 2, 4);
    expect(board.allShipSinked()).toBe(true);
  });

  test("Assigning out of range", () => {
    const board = gameBoard();
    board.placeShipVertical(2, 11, 3);
    board.placeShipVertical(2, 5, 1);
    board.recieveAttack(2, 5);
    expect(board.allShipSinked()).toBe(true);
  });
});

describe("Missed Attacks", () => {
  test("Missed attack horizontal", () => {
    const board = gameBoard();
    board.placeShipHorizontal(2, 5, 3);
    board.recieveAttack(5, 3);
    board.recieveAttack(5, 2);
    board.recieveAttack(2, 4);
    board.recieveAttack(2, 5);
    expect(board.missedAttacks().length).toBe(3);
    expect(board.allShipSinked()).toBe(false);
  });

  test("Missed attack vertical", () => {
    const board = gameBoard();
    board.placeShipVertical(1, 4, 3);
    board.recieveAttack(5, 3);
    board.recieveAttack(5, 2);
    board.recieveAttack(2, 4);
    board.recieveAttack(1, 4);
    expect(board.missedAttacks().length).toBe(2);
    expect(board.allShipSinked()).toBe(false);
  });

  test("No missed", () => {
    const board = gameBoard();
    board.placeShipVertical(1, 4, 3);
    board.recieveAttack(1, 4);
    board.recieveAttack(2, 4);
    board.recieveAttack(3, 4);
    board.placeShipHorizontal(1, 5, 4);
    expect(board.missedAttacks().length).toBe(0);
    expect(board.allShipSinked()).toBe(true);
  });
});
