import { Ship } from "./ship";
export function gameBoard() {
  const board = Array.from({ length: 10 }, () => new Array(10).fill(null));
  const ships = [];

  function checkForCollision(x, y, size) {
    const row = board[x - 1];

    for (let i = y - 1; i < y - 1 + size; i++) {
      // Check if row above coordinate is empty
      if (x > 1) {
        if (board[x - 2].slice(i - 1, i + 2).some((cell) => cell !== null))
          return true;
      }
      // Check below coordinate if empty
      if (x < 9) {
        if (board[x].slice(i - 1, i + 2).some((cell) => cell !== null))
          return true;
      }

      // Check around coordinate if empty
      if (y === 1) {
        if (row.slice(i, i + 2).some((cell) => cell !== null)) return true;
      } else if (y === 10) {
        if (row.slice(i - 1).some((cell) => cell !== null)) return true;
      } else {
        if (row.slice(i - 1, i + 2).some((cell) => cell !== null)) return true;
      }
    }
    return false;
  }

  function checkForOutOFRange(constantCoor, iterCoor, size) {
    return constantCoor < 1 ||
      constantCoor > 10 ||
      iterCoor + size - 1 > 10 ||
      iterCoor < 1
      ? true
      : false;
  }
  return {
    placeShipHorizontal: (x, y, size) => {
      if (checkForOutOFRange(x, y, size)) return;
      if (checkForCollision(x, y, size)) return;
      const ship = Ship(size);
      board[x - 1].fill(ship, y - 1, y - 1 + size);
      ships.push(ship);
    },
    placeShipVertical: (x, y, size) => {
      if (checkForOutOFRange(y, x, size)) return;
      if (checkForCollision(x, y, size)) return;
      const ship = Ship(size);
      for (let i = x - 1; i < size + x - 1; i++) {
        board[i][y - 1] = ship;
      }
      ships.push(ship);
    },
    recieveAttack: (x, y) => {
      const ship = board[x - 1][y - 1];
      if (typeof ship === "object" && ship !== null) {
        ship.hit();
        board[x - 1][y - 1] = true;
      } else if (ship === null) {
        board[x - 1][y - 1] = false;
      }
    },
    allShipSinked: () => {
      let sinked = true;

      ships.forEach((ship) => {
        if (!ship.isSunk()) sinked = false;
      });
      return sinked;
    },
  };
}
