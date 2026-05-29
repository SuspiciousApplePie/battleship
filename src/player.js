import { gameBoard } from "./gameBoard.js";

export function Player(type = 1) {
  if (type > 1 || type < 0)
    throw new Error("0 and 1 is only valid player types");
  const board = gameBoard();
  return { type, board };
}
