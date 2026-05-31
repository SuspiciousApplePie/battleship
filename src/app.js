import { parentClass, mainParentClassBorders } from "./constant.js";
import {
  createBoardContainer,
  createBoardBorder,
  createBoard,
  renderBoardContainer,
  renderBoardBorder,
  renderBoard,
} from "./ui.js";

import {
  populateBoardWithShip,
  populateAIBoard,
  attackCell,
} from "./gameEvent.js";

import "./styles/styles.css";
const main = document.querySelector(parentClass.MAIN);

export function init() {
  const boardContainer = createBoardContainer();
  renderBoardContainer(boardContainer, main);

  const leftBorder = createBoardBorder(mainParentClassBorders.PLAYER_1);
  renderBoardBorder(leftBorder, boardContainer);

  const rightBorder = createBoardBorder(mainParentClassBorders.PLAYER_2);
  renderBoardBorder(rightBorder, boardContainer);

  const leftBoard = createBoard();
  renderBoard(leftBoard, leftBorder);

  const rightBoard = createBoard();
  renderBoard(rightBoard, rightBorder);

  populateBoardWithShip(mainParentClassBorders.PLAYER_1);
  populateAIBoard();
  rightBoard.addEventListener("click", attackCell);
}
