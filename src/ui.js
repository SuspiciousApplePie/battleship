import { parentClass, mainParentClass } from "./constant.js";

export function createBoardBorder() {
  const boardBorder = document.createElement("div");
  boardBorder.className = mainParentClass.BOARD_BORDER;
  return boardBorder;
}

export function renderBoardBorder(boardBorder) {
  const container = document.querySelector(`.${parentClass.CONTAINER}`);
  const main = container.querySelector(`.${parentClass.MAIN}`);
  main.appendChild(boardBorder);
}
